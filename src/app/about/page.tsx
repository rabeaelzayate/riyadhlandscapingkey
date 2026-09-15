import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Compass,
  Eye,
  Target,
  CheckCircle2,
  MapPin,
  Trees,
  Waves,
  Droplets,
  Layers,
  ShieldCheck,
  Phone,
  MessageCircle,
  ArrowLeft,
  Home,
  Building,
  Palmtree,
  Sun,
  LayoutGrid,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceBanner } from "@/components/services/ServiceBanner";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WhatsAppFloating } from "@/components/ui/WhatsAppFloating";
import { PhoneFloating } from "@/components/ui/PhoneFloating";
import { company } from "@/data/company";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "من نحن | مفتاح التنسيق وحدائق الفرسان للعشب الصناعي وتنسيق الحدائق بالسعودية",
  description:
    "تعرف على مؤسسة مفتاح التنسيق وحدائق الفرسان: رواد تنسيق وتصميم الحدائق، توريد وتركيب العشب الصناعي والجداري، الثيل الطبيعي، شبكات الري وحصى الزينة بالرياض والدمام وكافة مناطق المملكة.",
  keywords: [
    "مفتاح التنسيق",
    "حدائق الفرسان",
    "مؤسسة حدائق الفرسان",
    "حدائق الفرسان التجارية للعشب الصناعي",
    "شركة تنسيق حدائق بالسعودية",
    "شركة عشب صناعي بالرياض",
    "توريد وتركيب عشب صناعي"
  ],
  alternates: {
    canonical: "https://riyadhlandscapingkey-sa.com/about/",
  },
  openGraph: {
    title: "من نحن | مؤسسة مفتاح التنسيق وحدائق الفرسان للعشب الصناعي",
    description:
      "رواد تصميم وتنسيق الحدائق وتوريد وتركيب العشب الصناعي والجداري وشبكات الري بالسعودية.",
    url: "https://riyadhlandscapingkey-sa.com/about/",
    siteName: "مفتاح التنسيق للعشب الصناعي والحدائق",
    locale: "ar_SA",
    images: [
      {
        url: "https://riyadhlandscapingkey-sa.com/images/hero/hero-landscaping.jpg",
        width: 1200,
        height: 630,
        alt: "مفتاح التنسيق وحدائق الفرسان لتنسيق الحدائق بالسعودية",
      },
    ],
  },
};

export default function AboutPage() {
  const neighborhoodList = [
    "النرجس",
    "الياسمين",
    "الملقا",
    "حطين",
    "الصحافة",
    "العارض",
    "العقيق",
    "الرحمانية",
    "قرطبة",
    "غرناطة",
    "الروضة",
    "وغيرها من أحياء الرياض",
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-[#fdfbf7] text-gray-900 selection:bg-emerald-200 selection:text-emerald-950">
      <Header />

      <main className="flex-grow pt-20 pb-20">
        
        {/* 1. Hero Header Banner */}
        <ServiceBanner
          title="من نحن؟"
          subtitle="نحول المساحات الخارجية إلى حدائق تنبض بالجمال والراحة والوظيفة في الرياض"
          image="/images/hero/hero-landscaping.jpg"
          sideImage="/images/gardener-mower-transparent.png"
          breadcrumbs={[
            { label: "الرئيسية", href: "/" },
            { label: "من نحن" },
          ]}
        />

        {/* Hero Quick Intro CTA Bar */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
          <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-10 border border-emerald-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-right">
              <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
                {company.nameAr} {company.subtitleAr}
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                نحول المساحات الخارجية إلى حدائق تنبض بالجمال
              </h1>
              <p className="text-xs sm:text-sm text-emerald-100/90 max-w-2xl leading-relaxed">
                في مؤسسة {company.nameAr} لتنسيق الحدائق بالسعودية نؤمن أن الحديقة ليست مجرد مساحة خضراء، بل جزء من جمال المكان وتجربة الحياة اليومية. لذلك نهتم بتصميم وتنفيذ المساحات الخارجية بطريقة تجمع بين الجمال، والراحة، والتنظيم، وسهولة العناية.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <WhatsAppButton variant="gold" size="md">
                اطلب معاينة مجانية
              </WhatsAppButton>
              <a
                href={getWhatsAppUrl(`مرحبًا، أود التواصل لمعرفة المزيد عن خدمات ${company.nameAr}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-bold backdrop-blur-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>تواصل عبر واتساب</span>
              </a>
            </div>
          </div>
        </section>

        {/* 2. Story / About Us Detailed Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6 text-right">
              <div>
                <span className="text-xs font-bold text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
                  قصتنا ورؤيتنا
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 mt-3 mb-4">
                  نصنع بيئة خضراء تلهمك كل يوم
                </h2>
                <div className="w-12 h-1 bg-amber-500 rounded-full mb-6" />
              </div>

              <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                <p>
                  بدأت فكرة <strong className="text-emerald-900">{company.nameAr}</strong> من رؤية بسيطة: أن تتحول كل مساحة خارجية إلى مكان جميل وعملي يعكس ذوق صاحبه واحتياجاته.
                </p>
                <p>
                  نعمل على تقديم حلول متكاملة لتنسيق وتصميم الحدائق في الرياض وكافة مناطق المملكة، بدءًا من فهم طبيعة الموقع واحتياجات العميل، مرورًا بالتخطيط وااختيار العناصر المناسبة، وصولًا إلى التنفيذ والتنسيق والصيانة.
                </p>
                <p>
                  نحن لا ننظر إلى الحديقة كعناصر منفصلة، بل نتعامل معها كمساحة متكاملة يجب أن تتناغم فيها النباتات والعشب والممرات والإضاءة والجلسات والعناصر المائية.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                <Image
                  src="/images/why-us-fountain.jpg"
                  alt={`قصة ${company.nameAr} لتنسيق الحدائق بالسعودية`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 right-6 left-6 text-white text-right">
                  <span className="text-xs font-bold text-amber-300 block mb-1">هوية {company.nameAr}</span>
                  <h3 className="text-lg font-bold">رؤية معمارية شاملة لكل مساحة خارجية</h3>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* User Requested Section - About Us Feature Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side (RTL text & cards): Text content + 2x2 Feature Grid */}
            <div className="lg:col-span-6 space-y-6 text-right order-2 lg:order-1">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100/80 border border-amber-300/60 text-amber-900 text-xs font-bold mb-3">
                  <span>• About Us</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 tracking-tight mb-2">
                  مؤسسة {company.nameAr} {company.subtitleAr}
                </h2>
                <div className="w-12 h-1 bg-amber-500 rounded-full mb-6" />

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  نُعد مؤسسة {company.nameAr} من المؤسسات الرائدة في مجال تنسيق الحدائق وتصميم المساحات الخارجية في السعودية. نحن نجمع بين الخبرة الطويلة واللمسة الفنية المبدعة لنقدم لعملائنا أفضل الحلول لتجميل منازلهم وفللهم.
                </p>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-8">
                  فريقنا مكون من مهندسين وفنيين متخصصين في تركيب الثيل الطبيعي والصناعي، وتصميم الشلالات والنوافير المنزلية، وتركيب شبكات الري الحديثة، مما يضمن لكم جودة استثنائية تدوم طويلاً.
                </p>
              </div>

              {/* 2x2 Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-xs space-y-2 text-right">
                  <div className="flex items-center justify-between text-emerald-950 font-bold text-sm">
                    <h3>الجودة العالية</h3>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    نستخدم أفضل الخامات والنباتات التي تناسب مناخ الرياض.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-xs space-y-2 text-right">
                  <div className="flex items-center justify-between text-emerald-950 font-bold text-sm">
                    <h3>الإبداع في التصميم</h3>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    نقدم حلولاً مبتكرة وتصاميم عصرية تناسب احتياجات كل عميل.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-xs space-y-2 text-right">
                  <div className="flex items-center justify-between text-emerald-950 font-bold text-sm">
                    <h3>رضا العملاء</h3>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    نسعى دائماً لبناء علاقة طويلة الأمد مع عملائنا من خلال التميز.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-xs space-y-2 text-right">
                  <div className="flex items-center justify-between text-emerald-950 font-bold text-sm">
                    <h3>الالتزام بالمواعيد</h3>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    نحترم وقت العميل ونسلم المشاريع في الموعد المتفق عليه.
                  </p>
                </div>

              </div>
            </div>

            {/* Right Side: Large Rounded Villa Fountain Showcase Image */}
            <div className="lg:col-span-6 relative order-1 lg:order-2">
              <div className="relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200/90">
                <Image
                  src="/images/why-us-fountain.jpg"
                  alt={`مؤسسة ${company.nameAr} ${company.subtitleAr}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </section>

        {/* 3 & 4. رؤيتنا ورسالتنا */}
        <section className="bg-[#1b4332] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* 3. رؤيتنا */}
              <div className="bg-emerald-900/60 border border-emerald-700/80 rounded-3xl p-8 space-y-4 text-right backdrop-blur-md">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-400/30">
                  <Eye className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-black text-white">رؤيتنا</h2>
                <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
                  أن نكون من الأسماء الموثوقة في مجال تنسيق وتصميم الحدائق بالرياض، من خلال تقديم حلول خارجية تجمع بين التصميم الجميل والتنفيذ المتقن والاهتمام بالتفاصيل.
                </p>
              </div>

              {/* 4. رسالتنا */}
              <div className="bg-emerald-900/60 border border-emerald-700/80 rounded-3xl p-8 space-y-4 text-right backdrop-blur-md">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-400/30">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-black text-white">رسالتنا</h2>
                <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
                  تقديم خدمات متكاملة في تنسيق الحدائق تساعد عملاءنا على الاستفادة من مساحاتهم الخارجية وتحويلها إلى بيئات جميلة ومريحة وعملية، مع الاهتمام بجودة التنفيذ واحتياجات كل موقع.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 5. ماذا نقدم؟ (خدماتنا) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100/80 border border-emerald-300/60 text-emerald-900 text-xs font-bold mb-3">
              <Compass className="w-3.5 h-3.5 text-emerald-700" />
              <span>ماذا نقدم؟</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950">
              خدماتنا الشاملة لتنسيق وتصميم الحدائق
            </h2>
            <div className="w-12 h-0.5 bg-amber-500 mx-auto rounded-full mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white p-7 rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl transition-all space-y-3 text-right">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Trees className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-emerald-950">تنسيق الحدائق</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                تصميم وتنسيق المساحات الخارجية بما يتناسب مع طبيعة المكان واحتياجات العميل.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl transition-all space-y-3 text-right">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-emerald-950">العشب الطبيعي والصناعي</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                حلول متنوعة للمسطحات الخضراء تناسب الاستخدام والتصميم المطلوب.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl transition-all space-y-3 text-right">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-emerald-950">شبكات الري</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                تصميم وتنفيذ حلول ري مناسبة لتوزيع المياه على مناطق الحديقة المختلفة.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl transition-all space-y-3 text-right">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Palmtree className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-emerald-950">الأشجار والنخيل</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                اختيار وتوزيع الأشجار والنخيل بما يحقق التوازن والجمال والخصوصية.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl transition-all space-y-3 text-right">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Waves className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-emerald-950">النوافير والشلالات</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                إضافة عناصر مائية تمنح الحديقة نقطة جمالية مميزة وأجواء أكثر راحة.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl transition-all space-y-3 text-right">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-emerald-950">صيانة الحدائق</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                المحافظة على جمال المساحات الخضراء من خلال أعمال العناية والصيانة حسب احتياجات الحديقة.
              </p>
            </div>

          </div>
        </section>

        {/* 6. فلسفتنا في العمل */}
        <section className="bg-emerald-950 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30 mb-2">
                فلسفتنا في العمل
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
                لا توجد حديقة واحدة تناسب الجميع
              </h2>
              <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed">
                كل مساحة لها طبيعتها، وكل عميل لديه احتياجات مختلفة. لذلك لا نعتمد على تصميم واحد يتم تكراره في كل المشاريع، بل نبدأ بفهم المساحة وطريقة استخدامها، ثم نختار العناصر التي تحقق أفضل توازن بين الجمال والوظيفة.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-right">
              
              <div className="bg-emerald-900/60 p-6 rounded-2xl border border-emerald-800 space-y-3">
                <span className="text-amber-400 font-extrabold text-lg block">01</span>
                <h3 className="text-base font-bold text-white">نفهم المساحة</h3>
                <p className="text-xs text-emerald-200/80 leading-relaxed">
                  ندرس طبيعة الموقع ومساحته واستخدامه.
                </p>
              </div>

              <div className="bg-emerald-900/60 p-6 rounded-2xl border border-emerald-800 space-y-3">
                <span className="text-amber-400 font-extrabold text-lg block">02</span>
                <h3 className="text-base font-bold text-white">نخطط بعناية</h3>
                <p className="text-xs text-emerald-200/80 leading-relaxed">
                  نوزع عناصر الحديقة بطريقة تحقق التوازن وسهولة الاستخدام.
                </p>
              </div>

              <div className="bg-emerald-900/60 p-6 rounded-2xl border border-emerald-800 space-y-3">
                <span className="text-amber-400 font-extrabold text-lg block">03</span>
                <h3 className="text-base font-bold text-white">ننفذ باهتمام</h3>
                <p className="text-xs text-emerald-200/80 leading-relaxed">
                  نهتم بالتفاصيل أثناء تنفيذ عناصر المشروع.
                </p>
              </div>

              <div className="bg-emerald-900/60 p-6 rounded-2xl border border-emerald-800 space-y-3">
                <span className="text-amber-400 font-extrabold text-lg block">04</span>
                <h3 className="text-base font-bold text-white">نهتم بالنتيجة</h3>
                <p className="text-xs text-emerald-200/80 leading-relaxed">
                  الهدف هو الوصول إلى مساحة جميلة وعملية يمكن الاستمتاع بها.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* 7. لماذا مفتاح التنسيق؟ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950">
              لماذا تختار {company.nameAr}؟
            </h2>
            <div className="w-12 h-0.5 bg-amber-500 mx-auto rounded-full mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-right">
            
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-emerald-900 font-extrabold text-base">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                <h3>تصميم يناسب مساحتك</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                لا نتعامل مع جميع الحدائق بنفس الطريقة، بل نراعي طبيعة كل مساحة.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-emerald-900 font-extrabold text-base">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                <h3>حلول متكاملة</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                من العشب والري إلى الأشجار والعناصر المائية والصيانة.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-emerald-900 font-extrabold text-base">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                <h3>اهتمام بالتفاصيل</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                التفاصيل الصغيرة تصنع الفرق في الشكل النهائي للحديقة.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-emerald-900 font-extrabold text-base">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                <h3>حلول عملية</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                نركز على الجمع بين الشكل الجميل والاستخدام العملي.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-emerald-900 font-extrabold text-base">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                <h3>خيارات متعددة</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                نوفر حلولًا متنوعة يمكن اختيارها حسب احتياجات المشروع.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-emerald-900 font-extrabold text-base">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                <h3>خدمة داخل الرياض</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                نقدم خدمات تنسيق الحدائق للمساحات المختلفة داخل الرياض.
              </p>
            </div>

          </div>
        </section>

        {/* 8. كيف نعمل؟ */}
        <section className="bg-emerald-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-12">
              من الفكرة إلى الحديقة (كيف نعمل؟)
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-right">
              
              <div className="bg-emerald-950/80 p-5 rounded-2xl border border-emerald-700/70 space-y-2">
                <span className="text-amber-400 font-bold text-sm block">01</span>
                <h3 className="text-sm font-bold text-white">تواصل معنا</h3>
                <p className="text-xs text-emerald-200/80">شاركنا فكرتك واحتياجاتك.</p>
              </div>

              <div className="bg-emerald-950/80 p-5 rounded-2xl border border-emerald-700/70 space-y-2">
                <span className="text-amber-400 font-bold text-sm block">02</span>
                <h3 className="text-sm font-bold text-white">معاينة الموقع</h3>
                <p className="text-xs text-emerald-200/80">نتعرف على المساحة وطبيعتها.</p>
              </div>

              <div className="bg-emerald-950/80 p-5 rounded-2xl border border-emerald-700/70 space-y-2">
                <span className="text-amber-400 font-bold text-sm block">03</span>
                <h3 className="text-sm font-bold text-white">التخطيط</h3>
                <p className="text-xs text-emerald-200/80">نحدد العناصر والحلول المناسبة.</p>
              </div>

              <div className="bg-emerald-950/80 p-5 rounded-2xl border border-emerald-700/70 space-y-2">
                <span className="text-amber-400 font-bold text-sm block">04</span>
                <h3 className="text-sm font-bold text-white">التنفيذ</h3>
                <p className="text-xs text-emerald-200/80">نبدأ تنفيذ الأعمال وفق الخطة.</p>
              </div>

              <div className="bg-emerald-950/80 p-5 rounded-2xl border border-emerald-700/70 space-y-2">
                <span className="text-amber-400 font-bold text-sm block">05</span>
                <h3 className="text-sm font-bold text-white">التسليم</h3>
                <p className="text-xs text-emerald-200/80">مراجعة التفاصيل وتسليم المساحة.</p>
              </div>

            </div>

          </div>
        </section>

        {/* 9. ماذا يميز تصميمنا؟ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950">
              نصمم الحديقة لتكون جميلة وعملية
            </h2>
            <div className="w-12 h-0.5 bg-amber-500 mx-auto rounded-full mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-right">
            
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs space-y-2">
              <h3 className="text-base font-bold text-emerald-950">الجمال</h3>
              <p className="text-xs text-gray-600">تصميم بصري متناسق ومريح للعين.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs space-y-2">
              <h3 className="text-base font-bold text-emerald-950">الراحة</h3>
              <p className="text-xs text-gray-600">مساحات مناسبة للاستخدام اليومي.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs space-y-2">
              <h3 className="text-base font-bold text-emerald-950">الخصوصية</h3>
              <p className="text-xs text-gray-600">حلول تساعد على خلق مساحات أكثر خصوصية.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs space-y-2">
              <h3 className="text-base font-bold text-emerald-950">الوظيفة</h3>
              <p className="text-xs text-gray-600">كل عنصر له دور محدد داخل التصميم.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs space-y-2">
              <h3 className="text-base font-bold text-emerald-950">سهولة العناية</h3>
              <p className="text-xs text-gray-600">التفكير في الصيانة منذ مرحلة التصميم.</p>
            </div>

          </div>
        </section>

        {/* 10. نخدم مختلف المساحات */}
        <section className="bg-[#f4f2ea] py-16 border-y border-gray-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 mb-12">
              حلول للحدائق بمختلف المساحات
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-right">
              
              <div className="bg-white p-6 rounded-2xl border border-gray-200 space-y-2">
                <Home className="w-6 h-6 text-emerald-700 mb-2" />
                <h3 className="text-base font-bold text-emerald-950">الحدائق المنزلية</h3>
                <p className="text-xs text-gray-600">مساحات خارجية مريحة للعائلة والاستخدام اليومي.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 space-y-2">
                <Building className="w-6 h-6 text-emerald-700 mb-2" />
                <h3 className="text-base font-bold text-emerald-950">حدائق الفلل</h3>
                <p className="text-xs text-gray-600">تصميم متكامل ينسجم مع واجهة الفيلا والمساحة المحيطة بها.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 space-y-2">
                <Palmtree className="w-6 h-6 text-emerald-700 mb-2" />
                <h3 className="text-base font-bold text-emerald-950">الاستراحات</h3>
                <p className="text-xs text-gray-600">مساحات خارجية مناسبة للجلسات والتجمعات.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 space-y-2">
                <LayoutGrid className="w-6 h-6 text-emerald-700 mb-2" />
                <h3 className="text-base font-bold text-emerald-950">المساحات التجارية</h3>
                <p className="text-xs text-gray-600">تنسيق خارجي يعكس هوية المكان ويمنح الزوار تجربة أفضل.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 space-y-2">
                <Sun className="w-6 h-6 text-emerald-700 mb-2" />
                <h3 className="text-base font-bold text-emerald-950">الأسطح</h3>
                <p className="text-xs text-gray-600">استغلال الأسطح وتحويلها إلى مساحات خارجية جذابة.</p>
              </div>

            </div>

          </div>
        </section>

        {/* 11 & 12. اهتمامنا بالرياض ومناطق الخدمة */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-right">
              <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-100/80 border border-emerald-300/60 text-emerald-900 text-xs font-bold">
                خبرتنا الميدانية
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 leading-tight">
                نعرف طبيعة المساحات الخارجية في الرياض
              </h2>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                تختلف احتياجات الحدائق من موقع إلى آخر، ولذلك نهتم عند تصميم المساحات الخارجية في الرياض بعوامل مثل طبيعة الموقع، والتعرض للشمس، واختيار النباتات المناسبة، وطريقة توزيع الري، وطبيعة استخدام الحديقة.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                هدفنا هو تقديم حلول تناسب المكان بدلًا من الاعتماد على تصميمات جاهزة لا تراعي اختلاف المساحات.
              </p>
            </div>

            {/* 12. مناطق الخدمة */}
            <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-gray-200/80 shadow-md text-right space-y-4">
              <div className="flex items-center gap-2 text-emerald-950 font-black text-xl">
                <MapPin className="w-5 h-5 text-amber-500" />
                <h2>مناطق الخدمة في الرياض</h2>
              </div>
              <p className="text-xs text-gray-600">
                نغطي أرقى أحياء ومناطق الرياض بخدمات التنسيق والصيانة المعاينة الفنية:
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {neighborhoodList.map((district, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200/60 text-xs font-bold"
                  >
                    {district}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 13. CTA Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 text-white p-8 sm:p-12 rounded-3xl border border-emerald-800 shadow-2xl text-center space-y-6">
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              لديك مساحة وتريد تحويلها إلى حديقة؟
            </h2>
            <p className="text-xs sm:text-base text-emerald-200 leading-relaxed max-w-2xl mx-auto">
              شاركنا فكرتك ومساحتك، ودعنا نساعدك في اختيار الحل المناسب لتنسيق حديقتك في الرياض.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
              <WhatsAppButton variant="gold" size="md">
                اطلب معاينة مجانية
              </WhatsAppButton>

              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-emerald-950 text-xs sm:text-sm font-bold shadow-lg hover:bg-emerald-50 transition-all"
              >
                <span>حجز موعد واستشارة ميدانية</span>
              </Link>

              <Link
                href="/services/"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-bold backdrop-blur-md transition-all"
              >
                <span>استعراض كافة الخدمات</span>
                <ArrowLeft className="w-4 h-4 text-amber-400" />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppFloating />
      <PhoneFloating />
    </div>
  );
}
