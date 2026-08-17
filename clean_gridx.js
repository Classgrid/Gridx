const fs = require('fs');
const path = require('path');

const badFiles = [
  'ProgressOverlay.tsx',
  'calendar.tsx',
  'code-copy-dialog.tsx',
  'data-table.tsx',
  'group-blue-mark.tsx',
  'laptop-mockup.tsx',
  'refresh-button.tsx',
  'responsive-select.tsx',
  'testimonial-carousel.tsx',
  'testimonial-carousel-v2.tsx',
  'user-blue-mark.tsx',
  'nikhil_time_calendar.tsx'
];

badFiles.forEach(file => {
  const p = path.join('C:/gridx/src/components/ui', file);
  if (fs.existsSync(p)) {
    fs.unlinkSync(p);
  }
});
