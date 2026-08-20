const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, '..', 'public', 'icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

const logoSource = path.join(__dirname, '..', 'public', 'images', 'logo-transparent.png');
const logoBuffer = fs.readFileSync(logoSource);

// Copy high-res source to the standard PWA icon targets
fs.writeFileSync(path.join(iconsDir, 'icon-192x192.png'), logoBuffer);
fs.writeFileSync(path.join(iconsDir, 'icon-512x512.png'), logoBuffer);
fs.writeFileSync(path.join(iconsDir, 'icon-maskable-192x192.png'), logoBuffer);
fs.writeFileSync(path.join(iconsDir, 'icon-maskable-512x512.png'), logoBuffer);
fs.writeFileSync(path.join(iconsDir, 'apple-touch-icon.png'), logoBuffer);
fs.writeFileSync(path.join(iconsDir, 'apple-touch-icon-180x180.png'), logoBuffer);

// Also create a crisp SVG icon with the brand palette
const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#022c22" />
      <stop offset="50%" stop-color="#064e3b" />
      <stop offset="100%" stop-color="#0f5132" />
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a" />
      <stop offset="50%" stop-color="#f59e0b" />
      <stop offset="100%" stop-color="#d97706" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000" flood-opacity="0.35" />
    </filter>
  </defs>

  <!-- Background rounded rect -->
  <rect width="512" height="512" rx="112" fill="url(#bgGrad)" />
  
  <!-- Subtle border -->
  <rect width="504" height="504" x="4" y="4" rx="108" fill="none" stroke="#10b981" stroke-width="4" stroke-opacity="0.3" />

  <!-- Central Emblem / Flower / Leaf Motif -->
  <g transform="translate(256, 230)" filter="url(#shadow)">
    <!-- Central Flower Leaves -->
    <path d="M 0,-110 C 35,-65 65,-25 0,35 C -65,-25 -35,-65 0,-110 Z" fill="url(#goldGrad)" />
    <path d="M -110,0 C -65,-35 -25,-65 35,0 C -25,65 -65,35 -110,0 Z" fill="url(#goldGrad)" opacity="0.9" />
    <path d="M 110,0 C 65,-35 25,-65 -35,0 C 25,65 65,35 110,0 Z" fill="url(#goldGrad)" opacity="0.9" />
    <path d="M 0,110 C 35,65 65,25 0,-35 C -65,25 -35,65 0,110 Z" fill="url(#goldGrad)" />
    
    <!-- Diagonal Petals -->
    <path d="M -75,-75 C -35,-75 -15,-35 0,0 C -35,-15 -75,-35 -75,-75 Z" fill="#34d399" opacity="0.8" />
    <path d="M 75,-75 C 35,-75 15,-35 0,0 C 35,-15 75,-35 75,-75 Z" fill="#34d399" opacity="0.8" />
    <path d="M -75,75 C -35,75 -15,35 0,0 C -35,15 -75,35 -75,75 Z" fill="#34d399" opacity="0.8" />
    <path d="M 75,75 C 35,75 15,35 0,0 C 35,15 75,35 75,75 Z" fill="#34d399" opacity="0.8" />

    <!-- Center Core -->
    <circle cx="0" cy="0" r="28" fill="#ffffff" />
    <circle cx="0" cy="0" r="18" fill="url(#goldGrad)" />
  </g>

  <!-- Arabic Typography -->
  <text x="256" y="410" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="44" fill="#ffffff" letter-spacing="1">
    زهرة الورود
  </text>
  <text x="256" y="445" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="20" fill="#a7f3d0" letter-spacing="2">
    تنسيق حدائق الرياض
  </text>
</svg>`;

fs.writeFileSync(path.join(iconsDir, 'icon.svg'), svgIcon, 'utf8');

console.log('✅ PWA Icons successfully generated in public/icons/');
