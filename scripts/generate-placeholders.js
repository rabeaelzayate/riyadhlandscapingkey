const fs = require('fs');
const path = require('path');

const directories = [
  'public/images/hero',
  'public/images/services',
  'public/images/projects'
];

directories.forEach(dir => {
  const fullPath = path.join(__dirname, '..', dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
});

function createSvgPlaceholder(title, subtitle, bgColor1 = '#0f2719', bgColor2 = '#15803d') {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bgColor1}" />
      <stop offset="100%" stop-color="${bgColor2}" />
    </linearGradient>
    <pattern id="leaves" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M20 5 C10 15 10 25 20 35 C30 25 30 15 20 5 Z" fill="#ffffff" fill-opacity="0.05"/>
    </pattern>
  </defs>
  <rect width="800" height="600" fill="url(#bgGrad)"/>
  <rect width="800" height="600" fill="url(#leaves)"/>
  <circle cx="700" cy="100" r="150" fill="#f59e0b" fill-opacity="0.1" />
  <circle cx="100" cy="500" r="200" fill="#ffffff" fill-opacity="0.03" />
  
  <g transform="translate(400, 260)" text-anchor="middle">
    <path d="M-30 40 C-60 10 -40 -30 0 -50 C40 -30 60 10 30 40 Z" fill="#22c55e" fill-opacity="0.6"/>
    <path d="M-15 30 C-35 5 -20 -20 0 -35 C20 -20 35 5 15 30 Z" fill="#f59e0b" fill-opacity="0.7"/>
  </g>

  <text x="400" y="360" font-family="sans-serif" font-size="32" font-weight="bold" fill="#ffffff" text-anchor="middle" direction="rtl">${title}</text>
  <text x="400" y="405" font-family="sans-serif" font-size="20" fill="#d1fae5" text-anchor="middle" direction="rtl">${subtitle}</text>
  <text x="400" y="440" font-family="sans-serif" font-size="14" fill="#f59e0b" text-anchor="middle">زهرة الورود لتنسيق الحدائق بالرياض</text>
</svg>`;
}

const imagesToCreate = [
  { path: 'public/images/hero/hero-landscaping.jpg', title: 'تنسيق حدائق بالرياض', subtitle: 'تصميم وتنفيذ الحدائق المنزلية والفلل', bg1: '#0f2719', bg2: '#166534' },
  { path: 'public/images/services/landscaping.jpg', title: 'تنسيق الحدائق', subtitle: 'تصميم وتنفيذ حدائق الفلل والمنازل', bg1: '#14532d', bg2: '#052e16' },
  { path: 'public/images/services/design.jpg', title: 'تصميم الحدائق', subtitle: 'استغلال أمثل للمساحات المتاحة', bg1: '#1e3a8a', bg2: '#0f2719' },
  { path: 'public/images/services/artificial-turf.jpg', title: 'العشب الصناعي', subtitle: 'ثيل صناعي عالي الجودة ومقاوم للحرارة', bg1: '#064e3b', bg2: '#047857' },
  { path: 'public/images/services/natural-grass.jpg', title: 'العشب الطبيعي', subtitle: 'تجهيز وتركيب الثيل الطبيعي النضير', bg1: '#14532d', bg2: '#15803d' },
  { path: 'public/images/services/irrigation.jpg', title: 'شبكات الري', subtitle: 'أنظمة ري أوتوماتيكية وتنقيط', bg1: '#0369a1', bg2: '#065f46' },
  { path: 'public/images/services/waterfalls.jpg', title: 'النوافير والشلالات', subtitle: 'شلالات جدارية ونوافير مودرن', bg1: '#0f172a', bg2: '#047857' },
  { path: 'public/images/services/planting.jpg', title: 'زراعة الأشجار والنخيل', subtitle: 'اختيار نباتات ملائمة لمناخ الرياض', bg1: '#14532d', bg2: '#b45309' },
  { path: 'public/images/services/maintenance.jpg', title: 'صيانة الحدائق', subtitle: 'قص وتقليم وتسميد ومتابعة دورية', bg1: '#065f46', bg2: '#1e293b' },
  { path: 'public/images/projects/project-1.jpg', title: 'تنسيق حديقة فيلا مودرن', subtitle: 'حي النرجس، الرياض', bg1: '#064e3b', bg2: '#0f172a' },
  { path: 'public/images/projects/project-2.jpg', title: 'تركيب عشب صناعي', subtitle: 'حي الياسمين، الرياض', bg1: '#14532d', bg2: '#047857' },
  { path: 'public/images/projects/project-3.jpg', title: 'شلال جداري مودرن', subtitle: 'حي حطين، الرياض', bg1: '#0f172a', bg2: '#0284c7' },
  { path: 'public/images/projects/project-4.jpg', title: 'شبكة ري أوتوماتيكية', subtitle: 'حي الملقا، الرياض', bg1: '#0369a1', bg2: '#065f46' },
  { path: 'public/images/projects/project-5.jpg', title: 'تركيب ثيل طبيعي', subtitle: 'حي الصحافة، الرياض', bg1: '#15803d', bg2: '#064e3b' },
  { path: 'public/images/projects/project-6.jpg', title: 'نافورة منزلية', subtitle: 'حي العقيق، الرياض', bg1: '#1e1b4b', bg2: '#047857' },
];

imagesToCreate.forEach(item => {
  const fullPath = path.join(__dirname, '..', item.path);
  const svgContent = createSvgPlaceholder(item.title, item.subtitle, item.bg1, item.bg2);
  fs.writeFileSync(fullPath, svgContent);
});

console.log('All image placeholders generated successfully!');
