# Self-Hosted Deployment Guide: Bridge Notary on Your Server

This guide covers deploying the Bridge Notary React frontend and Express backend on your server (89.116.159.31) with Nginx and HTTPS.

## Architecture

```
User Browser (HTTPS)
    ↓
Nginx (Port 443/80)
    ├→ Static React App (/dist)
    └→ API Proxy → Express Backend (localhost:5000)
         ↓
    Odoo CRM (Tailscale Private Network)
```

## Prerequisites

- Server IP: `89.116.159.31`
- Domain: `bridgenotary.com` (DNS points to your server)
- SSH access to the server
- Docker and Docker Compose installed
- Root or sudo access

## Step 1: Prepare Your Server

### 1.1 SSH into the server
```bash
ssh user@89.116.159.31
```

### 1.2 Create directory structure
```bash
sudo mkdir -p /var/www/bridgenotary
sudo mkdir -p /app/bridgenotary-react
sudo chown -R $USER:$USER /var/www/bridgenotary
sudo chown -R $USER:$USER /app/bridgenotary-react
```

### 1.3 Install dependencies (if not already installed)
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker (if not installed)
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Nginx
sudo apt install -y nginx certbot python3-certbot-nginx

# Start Nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

## Step 2: Clone and Build the React Frontend

```bash
cd /app/bridgenotary-react

# Clone the repository (if not already cloned)
git clone https://github.com/djdev3k-star/bridgenotary-react.git .

# Install dependencies
npm install

# Build React app for production
npm run build

# Copy built files to web root
cp -r dist/* /var/www/bridgenotary/
```

## Step 3: Set Up SSL Certificate with Let's Encrypt

```bash
# Obtain SSL certificate
sudo certbot certonly --standalone -d bridgenotary.com -d www.bridgenotary.com

# Note the certificate location:
# /etc/letsencrypt/live/bridgenotary.com/fullchain.pem
# /etc/letsencrypt/live/bridgenotary.com/privkey.pem

# Auto-renew certificates (should be automatic, but verify)
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer
```

## Step 4: Configure Nginx

### 4.1 Copy Nginx configuration
```bash
# Copy the nginx.conf from the repository
sudo cp /app/bridgenotary-react/nginx.conf /etc/nginx/sites-available/bridgenotary.conf

# Enable the site
sudo ln -s /etc/nginx/sites-available/bridgenotary.conf /etc/nginx/sites-enabled/bridgenotary.conf

# Remove default site if you want
sudo rm /etc/nginx/sites-enabled/default
```

### 4.2 Test Nginx configuration
```bash
sudo nginx -t
```

Expected output:
```
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

### 4.3 Reload Nginx
```bash
sudo systemctl reload nginx
```

## Step 5: Start the Express Backend

The backend should already be running in Docker from your previous setup. Verify:

```bash
# Check if backend is running
curl http://localhost:5000/health

# Expected response: {"status":"OK"}
```

If not running, start it:
```bash
cd /app/bridgenotary-react
docker-compose up -d
```

## Step 6: Update DNS Records

Update your DNS provider (your domain registrar) to point to your server:

```
A Record: bridgenotary.com → 89.116.159.31
CNAME Record: www.bridgenotary.com → bridgenotary.com
```

Allow 24-48 hours for DNS propagation.

## Step 7: Test the Deployment

1. **Test HTTPS:** Visit `https://bridgenotary.com` in your browser
2. **Check frontend loads:** You should see the Bridge Notary website
3. **Test form submission:** Go to `/contact` and test the inquiry form
4. **Verify Odoo integration:** After submitting, check Odoo to see if a lead was created

## Step 8: Continuous Updates

To deploy new code changes:

```bash
# Pull latest code
cd /app/bridgenotary-react
git pull origin main

# Rebuild React app
npm run build

# Copy new files to web root
cp -r dist/* /var/www/bridgenotary/

# Restart backend if needed
docker-compose restart

# Reload Nginx
sudo systemctl reload nginx
```

## Troubleshooting

### SSL Certificate Issues
```bash
# Check certificate expiration
sudo certbot certificates

# Force renewal
sudo certbot renew --force-renewal
```

### Nginx Not Serving Files
```bash
# Check Nginx logs
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log

# Verify file permissions
ls -la /var/www/bridgenotary/
```

### Backend Not Responding
```bash
# Check if Express backend is running
docker ps

# Check Docker logs
docker logs bridgenotary-backend

# Restart if needed
docker-compose restart
```

### Forms Not Submitting
```bash
# Check browser console for errors (DevTools)
# Check Nginx error logs
sudo tail -f /var/log/nginx/error.log

# Verify backend API is accessible
curl -X POST http://localhost:5000/api/odoo/form-submit -H "Content-Type: application/json" -d '{}'
```

## Monitoring and Maintenance

### Health Checks
```bash
# Frontend health
curl https://bridgenotary.com/health

# Backend health
curl http://localhost:5000/health

# Nginx status
sudo systemctl status nginx
```

### Log Rotation (automatic)
Nginx and Docker logs are automatically rotated by the system.

### Automated Backups
Consider setting up automated backups:
```bash
# Example: Backup database daily
0 2 * * * docker exec bridgenotary-backend pg_dump -U user db > /backups/db-$(date +\%Y\%m\%d).sql
```

## Security Recommendations

1. **Enable firewall**
   ```bash
   sudo ufw enable
   sudo ufw allow 22/tcp  # SSH
   sudo ufw allow 80/tcp  # HTTP
   sudo ufw allow 443/tcp # HTTPS
   ```

2. **Keep system updated**
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

3. **Monitor logs regularly**
   ```bash
   sudo tail -f /var/log/nginx/error.log
   ```

4. **Use strong passwords** for SSH and any admin accounts

5. **Consider WAF** (Web Application Firewall) for additional protection

## Performance Tips

1. **Enable caching** in Nginx (already configured)
2. **Use CDN** for static assets (optional)
3. **Monitor server resources**
   ```bash
   top  # CPU and memory
   df -h  # Disk space
   ```

## FAQ

**Q: Can I keep using Netlify for the frontend?**
A: Yes, but you'd still have the Netlify Function 401 issues. Self-hosting is cleaner.

**Q: How do I revert to Netlify?**
A: Update your DNS to point to Netlify instead of your server. Keep the backend on your server.

**Q: What if the SSL certificate fails to renew?**
A: The renewal is automatic, but check the logs: `sudo certbot renew --dry-run`

**Q: Can I use this setup without Tailscale?**
A: No - Tailscale is required to access the private Odoo instance from your public server.

---

**Support:** For issues, check the logs:
- Nginx: `/var/log/nginx/`
- Docker: `docker logs [container-name]`
- System: `journalctl -xe`
