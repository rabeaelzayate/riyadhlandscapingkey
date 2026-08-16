const fs = require('fs');
const path = require('path');

const artifactDir = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\bb2c263d-382b-42bd-a642-f1f2232c39c3';

// Find the generated jpg files in artifact directory
const files = fs.readdirSync(artifactDir);
const heroFile = files.find(f => f.startsWith('hero_landscaping') && f.endsWith('.jpg'));
const turfFile = files.find(f => f.startsWith('artificial_turf') && f.endsWith('.jpg'));
const waterfallFile = files.find(f => f.startsWith('wall_waterfall') && f.endsWith('.jpg'));
const irrigationFile = files.find(f => f.startsWith('irrigation_system') && f.endsWith('.jpg'));

if (heroFile) {
  const src = path.join(artifactDir, heroFile);
  fs.copyFileSync(src, path.join(__dirname, '../public/images/hero/hero-landscaping.jpg'));
  fs.copyFileSync(src, path.join(__dirname, '../public/images/services/landscaping.jpg'));
  fs.copyFileSync(src, path.join(__dirname, '../public/images/services/design.jpg'));
  fs.copyFileSync(src, path.join(__dirname, '../public/images/services/natural-grass.jpg'));
  fs.copyFileSync(src, path.join(__dirname, '../public/images/services/planting.jpg'));
  fs.copyFileSync(src, path.join(__dirname, '../public/images/services/maintenance.jpg'));
  fs.copyFileSync(src, path.join(__dirname, '../public/images/projects/project-1.jpg'));
  fs.copyFileSync(src, path.join(__dirname, '../public/images/projects/project-5.jpg'));
  console.log('Copied hero images');
}

if (turfFile) {
  const src = path.join(artifactDir, turfFile);
  fs.copyFileSync(src, path.join(__dirname, '../public/images/services/artificial-turf.jpg'));
  fs.copyFileSync(src, path.join(__dirname, '../public/images/projects/project-2.jpg'));
  console.log('Copied turf images');
}

if (waterfallFile) {
  const src = path.join(artifactDir, waterfallFile);
  fs.copyFileSync(src, path.join(__dirname, '../public/images/services/waterfalls.jpg'));
  fs.copyFileSync(src, path.join(__dirname, '../public/images/projects/project-3.jpg'));
  fs.copyFileSync(src, path.join(__dirname, '../public/images/projects/project-6.jpg'));
  console.log('Copied waterfall images');
}

if (irrigationFile) {
  const src = path.join(artifactDir, irrigationFile);
  fs.copyFileSync(src, path.join(__dirname, '../public/images/services/irrigation.jpg'));
  fs.copyFileSync(src, path.join(__dirname, '../public/images/projects/project-4.jpg'));
  console.log('Copied irrigation images');
}

console.log('Finished copying all realistic images!');
