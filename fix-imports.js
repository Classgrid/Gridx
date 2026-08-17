const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components', 'ui');
const files = fs.readdirSync(dir);

let count = 0;
for (const file of files) {
  if (file.endsWith('.tsx') || file.endsWith('.ts')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    content = content.replace(/@\/components\/marketing_ui\//g, './');
    content = content.replace(/@\/components\/ui\//g, './');
    content = content.replace(/@\/hooks\/use-media-query/g, '../../hooks/use-media-query'); // Wait, does gridx have hooks?
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      count++;
      console.log('Fixed', file);
    }
  }
}
console.log('Total files fixed:', count);
