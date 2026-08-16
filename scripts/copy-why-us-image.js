const fs = require('fs');
const path = require('path');

const artifactDir = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\bb2c263d-382b-42bd-a642-f1f2232c39c3';
const files = fs.readdirSync(artifactDir);
const fountainFile = files.find(f => f.startsWith('why_us_fountain') && f.endsWith('.jpg'));

if (fountainFile) {
  const src = path.join(artifactDir, fountainFile);
  fs.copyFileSync(src, path.join(__dirname, '../public/images/why-us-fountain.jpg'));
  console.log('Copied why-us-fountain.jpg successfully!');
}
