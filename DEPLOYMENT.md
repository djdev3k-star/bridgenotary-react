# 🚀 Backend Deployment to Your Server

## Prerequisites
- SSH access to your server
- Docker and Docker Compose installed
- Tailscale installed and connected on the server
- Git installed

## Step-by-Step Deployment

### 1. SSH into Your Server
```bash
ssh user@your-server-ip
```

### 2. Clone the Repository
```bash
cd /opt  # or your preferred directory
git clone https://github.com/djdev3k-star/bridgenotary-react.git
cd bridgenotary-react
```

### 3. Checkout the Feature Branch
```bash
git checkout feature/odoo-forms-integration
```

### 4. Create Environment File
```bash
cp .env.docker .env.prod
```

Then edit `.env.prod` with your actual values:
```bash
nano .env.prod
```

Fill in:
```
ODOO_API_KEY=7946Apiu$er
ODOO_FORM_TOKEN=your_secret_token
PROOF_API_KEY=your_proof_key
```

### 5. Build and Run with Docker Compose
```bash
docker-compose build
docker-compose up -d
```

### 6. Verify It's Running
```bash
# Check if container is running
docker ps | grep bridgenotary-backend

# Check logs
docker logs bridgenotary-backend

# Test health endpoint
curl http://localhost:5000/health
```

Should return:
```json
{
  "status": "ok",
  "timestamp": "2026-01-21T...",
  "environment": "production"
}
```

### 7. Set Up Reverse Proxy (Nginx) for HTTPS

If you want HTTPS (recommended for production):

```bash
sudo apt-get install nginx certbot python3-certbot-nginx
```

Create `/etc/nginx/sites-available/backend`:
```nginx
server {
    listen 80;
    server_name your-api-domain.com;
    
    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable it:
```bash
sudo ln -s /etc/nginx/sites-available/backend /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

Get SSL certificate:
```bash
sudo certbot --nginx -d your-api-domain.com
```

### 8. Update Frontend .env.production

In your frontend repo, update:
```
VITE_API_URL=https://your-api-domain.com
```

Or if using IP:
```
VITE_API_URL=http://your-server-ip:5000
```

### 9. Deploy Frontend

Push frontend to Netlify/Vercel with updated env vars.

---

## 🔄 Updating the Backend

When you push new changes:

```bash
cd /opt/bridgenotary-react
git pull origin feature/odoo-forms-integration
docker-compose build
docker-compose up -d
```

---

## 🐛 Troubleshooting

### Check Docker logs:
```bash
docker logs -f bridgenotary-backend
```

### Restart the service:
```bash
docker-compose restart
```

### Stop the service:
```bash
docker-compose down
```

### Check if Tailscale is working:
```bash
ping 100.116.83.95
```

If ping fails, Tailscale isn't connected properly on your server.

---

## ✅ Final Architecture

```
Frontend (Netlify) - https://bridgenotary.com
    ↓
Backend (Your Server) - https://your-api-domain.com
    ↓ Tailscale (internal network)
Odoo (Docker) - 100.116.83.95:8069
```

---

## 📋 Checklist

- [ ] SSH access to server confirmed
- [ ] Docker & Docker Compose installed
- [ ] Tailscale installed and connected
- [ ] Repository cloned
- [ ] .env.prod created with correct values
- [ ] Docker image built successfully
- [ ] Container running and healthy
- [ ] Health endpoint responding
- [ ] Nginx reverse proxy configured (optional)
- [ ] SSL certificate installed
- [ ] Frontend .env.production updated
- [ ] Frontend deployed to Netlify
- [ ] Test form submission end-to-end
