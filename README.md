# 🌿 شركة زهرة الورود لتنسيق الحدائق بالرياض | Zahret Al Wurood

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-16.3.1-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.4.7-black?style=for-the-badge&logo=framer&logoColor=blue)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

**موقع إلكتروني رسمي وحديث لشركة زهرة الورود الرائدة في تصميم، تنسيق، وصيانة الحدائق وتركيب العشب الصناعي والشلالات في الرياض والمملكة العربية السعودية.**

[🌐 زيارة الموقع المباشر (Live Demo)](https://zahret-al-wurood.vercel.app) • [✨ المميزات](#-المميزات-الرئيسية) • [🛠️ التقنيات المستخدمة](#-التقنيات-المستخدمة) • [🚀 التشغيل المحلي](#-التشغيل-والتثبيت-المحلي) • [📂 هيكل المشروع](#-هيكل-المشروع)

</div>

---

## 📖 نبذة عن المشروع (Overview)

موقع **زهرة الورود** مبني بأحدث معايير الويب وتقنيات **Next.js 16 (App Router)** مع دعم كامل للغة العربية وتجربة مستخدم سلسة واستجابة تامة لكافة الشاشات (Mobile-First Responsive Design). يتميز الموقع بتهيئة قوية لمحركات البحث (SEO & Schema.org JSON-LD)، بالإضافة إلى مقالات تفاعلية، صفحات خدمات متكاملة، ونماذج تواصل مباشرة عبر واتساب والمكالمات الهاتفية.

---

## ✨ المميزات الرئيسية (Key Features)

- 🎨 **تصميم حديث وعصري (Modern & Luxury UI/UX):** هوية بصرية مريحة للعين مستوحاة من الطبيعة والخضرة مع لمسات ذهبية أنيقة.
- ⚡ **أداء فائق السرعة (Blazing Fast):** تجربة تصفح سريعة وخفيفة بالاعتماد على ميزات Next.js الحديثة وتقليل وقت التحميل.
- 🔍 **تهيئة متقدمة لمحركات البحث (Advanced SEO):**
  - بيانات منظمة متكاملة `Schema.org / JSON-LD` (LocalBusiness, Organization, WebSite, Service, Article, FAQPage, BreadcrumbList).
  - خريطة موقع ديناميكية `sitemap.xml` وملف `robots.txt`.
  - وسوم Open Graph و Twitter Cards لظهور احترافي عند مشاركة الروابط.
- 📱 **واجهة تفاعلية ومتجاوبة (Responsive & Interactive):** حركات انسيابية باستخدام Framer Motion و Lucide Icons وشاشة تحميل Preloader احترافية.
- 🛠️ **صفحات خدمات مفصلة:** تغطي العشب الصناعي، الثيل الطبيعي، شبكات الري الأوتوماتيكية، الشلالات والنوافير، والمظلات والبرجولات.
- 📚 **مركز مقالات ومدونة شاملة (Knowledge Base & Blog):** مقالات متخصصة في العناية بالحدائق وتنسيقها بالرياض لتعزيز الظهور العضوي.
- 💬 **قنوات تواصل سريعة ومباشرة:** تكامل بنقرة واحدة مع WhatsApp والاتصال الهاتفي ونماذج طلب المعاينة.

---

## 🛠️ التقنيات المستخدمة (Tech Stack)

| التقنية | الإصدار | الوصف |
| :--- | :--- | :--- |
| **Next.js** | `^16.3.1` | إطار العمل الأساسي للـ SSR والـ App Router |
| **React** | `^19.0.0` | مكتبة واجهات المستخدم |
| **TypeScript** | `^5.7.3` | كتابة كود آمن ومنظم بنظام الأنواع |
| **Tailwind CSS** | `^4.0.0` | بناء وتنسيق الواجهات بأنماط مرنة وحديثة |
| **Framer Motion** | `^12.4.7` | الحركات والتأثيرات البصرية التفاعلية |
| **Lucide React** | `^0.475.0` | حزمة أيقونات عصرية ومتكاملة |
| **Vercel** | - | الاستضافة السحابية والـ CI/CD |

---

## 📂 هيكل المشروع (Project Structure)

```text
zahret-al-wurood/
├── public/                  # الصور والأصول الثابتة والأيقونات
├── src/
│   ├── app/                 # بنية الصفحات ونظام التوجيه (App Router)
│   │   ├── about/           # صفحة من نحن
│   │   ├── articles/        # المدونة والمقالات المتخصصة
│   │   ├── contact/         # صفحة اتصل بنا ونماذج الاستفسار
│   │   ├── projects/        # معرض سابقة الأعمال والمشاريع
│   │   ├── services/        # صفحات الخدمات التفصيلية
│   │   ├── layout.tsx       # التخطيط العام، الخطوط، والـ Preloader
│   │   ├── page.tsx         # الصفحة الرئيسية (Landing Page)
│   │   ├── robots.ts        # إعدادات ملف robots.txt
│   │   └── sitemap.ts       # التوليد الديناميكي لـ sitemap.xml
│   ├── components/          # المكونات القابلة لإعادة الاستخدام
│   │   ├── home/            # أقسام الصفحة الرئيسية (Hero, Services, CTA, ...)
│   │   ├── layout/          # الهيدر، الفوتر، وشريط الاتصال العائم
│   │   ├── seo/             # مكونات الـ JSON-LD والبيانات المهيكلة
│   │   └── ui/              # المكونات التفاعلية (Preloader, Buttons, Cards, ...)
│   ├── data/                # البيانات الثابتة، معلومات الشركة، والمقالات
│   └── lib/                 # الدوال المساعدة والـ Utilities
├── package.json             # التبعيات وحزم المشروع
├── tsconfig.json            # إعدادات TypeScript
└── next.config.ts           # إعدادات Next.js
```

---

## 🚀 التشغيل والتثبيت المحلي (Getting Started)

### 1. استنساخ المشروع (Clone Repository)

```bash
git clone https://github.com/rabea-shaban/zahret-al-wurood.git
cd zahret-al-wurood
```

### 2. تثبيت الحزم (Install Dependencies)

```bash
npm install
# أو
yarn install
# أو
pnpm install
```

### 3. تشغيل بيئة التطوير (Run Development Server)

```bash
npm run dev
```

افتح المتصفح على [http://localhost:3000](http://localhost:3000) لمشاهدة الموقع مباشرة.

### 4. بناء المشروع للإنتاج (Build for Production)

```bash
npm run build
npm run start
```

---

## 🚢 النشر على Vercel (Deployment)

المشروع جاهز ومُهيأ بالكامل للنشر الفوري عبر **Vercel**:

1. اربط الـ Repository على حسابك في [Vercel](https://vercel.com).
2. سيقوم Vercel تلقائياً باكتشاف إعدادات Next.js والبناء المباشر.
3. كل `push` على فرع `main` سيقوم بعمل Deploy تلقائي ومستمر (Continuous Deployment).

---

## 📞 بيانات التواصل (Contact Info)

- **الشركة:** زهرة الورود لتنسيق الحدائق
- **الموقع:** الرياض، المملكة العربية السعودية
- **الهاتف / واتساب:** [+966560877272](https://wa.me/966560877272)
- **ساعات العمل:** السبت - الخميس: 8:00 صباحاً - 10:00 مساءً

---

## 📄 الترخيص (License)

هذا المشروع خاص بشركة **زهرة الورود لتنسيق الحدائق** © 2026. جميع الحقوق محفوظة.
