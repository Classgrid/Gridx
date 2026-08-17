const fs = require('fs');
const path = require('path');

// Fix ProgressOverlay
const overlayPath = 'C:/gridx/src/components/ui/ProgressOverlay.tsx';
if (fs.existsSync(overlayPath)) {
  let content = fs.readFileSync(overlayPath, 'utf8');
  content = content.replace(/@\/components\/marketing_ui\//g, './');
  fs.writeFileSync(overlayPath, content);
}

// Fix chart.tsx TooltipValueType
const chartPath = 'C:/gridx/src/components/ui/chart.tsx';
if (fs.existsSync(chartPath)) {
  let content = fs.readFileSync(chartPath, 'utf8');
  content = content.replace(/TooltipValueType/g, 'any');
  fs.writeFileSync(chartPath, content);
}
