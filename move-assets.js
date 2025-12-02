// Script to move assets from src/assets to public/assets
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, 'src', 'assets', 'images');
const destDir = path.join(__dirname, 'public', 'assets', 'images');

// Create destination directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Get all files from source directory
const files = fs.readdirSync(srcDir);

// Move each file to destination directory
files.forEach(file => {
  const srcPath = path.join(srcDir, file);
  const destPath = path.join(destDir, file);
  
  // Skip directories
  if (fs.lstatSync(srcPath).isDirectory()) {
    console.log(`Skipping directory: ${file}`);
    return;
  }
  
  // Rename files - replace spaces with hyphens
  const cleanFileName = file.replace(/\s+/g, '-');
  const finalDestPath = path.join(destDir, cleanFileName);
  
  try {
    // Copy the file instead of moving to keep originals
    fs.copyFileSync(srcPath, finalDestPath);
    console.log(`Copied ${file} to ${cleanFileName}`);
  } catch (err) {
    console.error(`Error copying file ${file}: ${err.message}`);
  }
});

console.log('Asset migration completed');
