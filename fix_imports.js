const fs = require('fs');
const path = require('path');

// 1. Fix ImageCropperModal imports
const cropperPath = 'C:/gridx/src/components/ui/ImageCropperModal.tsx';
if (fs.existsSync(cropperPath)) {
  let content = fs.readFileSync(cropperPath, 'utf8');
  content = content.replace(/@\/components\/ui\//g, './');
  content = content.replace(/@\/lib\//g, '../../lib/');
  content = content.replace(/@\/hooks\//g, '../../hooks/');
  fs.writeFileSync(cropperPath, content);
}

// 2. Regenerate index.ts
const dir = 'C:/gridx/src/components/ui';
const files = fs.readdirSync(dir);
let exportContent = '';
for (const file of files) {
  if (file.endsWith('.tsx') && !file.endsWith('.backup')) {
    exportContent += `export * from "./components/ui/${file.replace('.tsx', '')}";\n`;
  }
}
fs.writeFileSync('C:/gridx/src/index.ts', exportContent);
