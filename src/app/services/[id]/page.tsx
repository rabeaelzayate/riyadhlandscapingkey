import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  ArrowLeft,
  Phone,
  MessageCircle,
  Sparkles,
  MapPin,
  ShieldCheck,
  Clock,
  Compass,
  Wrench,
  HelpCircle,
  Trees,
  Droplets,
  Waves,
  Calculator,
  BookOpen,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { serviceArticlesData } from "@/data/serviceArticles";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RelatedServicesSlider } from "@/components/services/RelatedServicesSlider";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WhatsAppFloating } from "@/components/ui/WhatsAppFloating";
import { PhoneFloating } from "@/components/ui/PhoneFloating";
import { company } from "@/data/company";

import type { Metadata } from "next";
import { ServiceBanner } from "@/components/services/ServiceBanner";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  const ids = Array.from(new Set([...servicesData.map((s) => s.id), "water-features", "waterfalls"]));
  return ids.map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const service = servicesData.find((s) => s.id === id || (id === "water-features" && s.id === "waterfalls"));

  if (!service) {
    return {
      title: "الخدمة غير موجودة",
    };
  }

  const title = `${service.title} بالرياض — تصميم وتنفيذ مع الضمان`;
  const description =
    service.description ||
    `خدمة ${service.title} بالرياض بأعلى معايير الجودة، تصاميم ثلاثية الأبعاد (3D) مجانية، مع استخدام أفضل المواد وضمان يصل إلى 5 سنوات.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://zahret-al-wurood.com/services/${service.id}/`,
    },
    openGraph: {
      title: `${title} | زهرة الورود`,
      description,
      url: `https://zahret-al-wurood.com/services/${service.id}/`,
      images: [
        {
          url: service.image,
          alt: `${service.title} بالرياض — زهرة الورود`,
        },
      ],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = servicesData.find((s) => s.id === id || (id === "water-features" && s.id === "waterfalls"));

  if (!service) {
    notFound();
  }

  const article = serviceArticlesData[id] || serviceArticlesData["landscaping"];
  const otherServices = servicesData.filter((s) => s.id !== id);

  const siteUrl = "https://zahret-al-wurood.com";
  const serviceUrl = `${siteUrl}/services/${service.id}/`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    "name": `${service.title} بالرياض`,
    "serviceType": service.title,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "زهرة الورود لتنسيق الحدائق بالرياض",
      "url": siteUrl,
      "telephone": company.phone,
      "image": `${siteUrl}/images/logo-transparent.png`
    },
    "areaServed": {
      "@type": "City",
      "name": "الرياض"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service.title,
      "itemListElement": service.features.map((feature, idx) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": feature
        }
      }))
    }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "الرئيسية",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "الخدمات",
        "item": `${siteUrl}/services/`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title,
        "item": serviceUrl
      }
    ]
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#fdfbf7] text-gray-900 selection:bg-emerald-200 selection:text-emerald-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />

      <main className="flex-grow pt-20 pb-20">
        
        {/* Full-width Service Hero Header Banner matching reference design */}
        <ServiceBanner
          title={`${service.title} بالرياض`}
          subtitle={service.description || "خدمات متكاملة لتصميم وتنسيق وصيانة حدائق الفلل والمنازل والاستراحات بالرياض."}
          image={service.image}
          breadcrumbs={[
            { label: "الرئيسية", href: "/" },
            { label: "الخدمات", href: "/services/" },
            { label: service.title },
          ]}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
          
          {/* ========================================================
              2. مقدمة تفصيلية ولماذا تختار الشركة + نموذج العرض
             ======================================================== */}
          <section id="why-choose" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Detailed Info */}
            <div className="lg:col-span-7 text-right space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100/80 border border-amber-300/60 text-amber-900 text-xs font-bold">
                <span>• لماذا زهرة الورود</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-emerald-950 leading-tight">
                تنسيق احترافي يناسب مناخ مدينة الرياض
              </h2>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                تتطلب المساحات الخارجية في مدينة الرياض دراسة دقيقة للمناخ ودرجات الحرارة. نحن في <strong>زهرة الورود</strong> نعتمد على اختيار أنواع الثيل والنباتات والأشجار الصحراوية والمحلية ذات التحمل العالي، مع تركيب شبكات ري أوتوماتيكية موفرة للمياه تضمن استدامة حديقتك طوال العام.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-xs flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-emerald-950 mb-1">تصميم ثلاثي الأبعاد 3D</h4>
                    <p className="text-[11px] text-gray-600 leading-relaxed">معاينة وتخيل حديقتك قبل البدء بالتنفيذ.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-xs flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-emerald-950 mb-1">ضمان حقيقي 5 سنوات</h4>
                    <p className="text-[11px] text-gray-600 leading-relaxed">ضمان شامل على التركيبات والخامات.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Interactive Quote Form Box */}
            <div id="quick-quote-form" className="lg:col-span-5 bg-emerald-950 text-white p-6 sm:p-8 rounded-3xl border border-emerald-800 shadow-2xl relative overflow-hidden">
              <div className="relative z-10 text-right">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block mb-1">
                  طلب عرض سعر مجاني
                </span>
                <h3 className="text-xl font-extrabold mb-4">احصل على معاينة لموقعك</h3>
                
                <form
                  action={`https://wa.me/${company.whatsapp || ""}`}
                  target="_blank"
                  className="space-y-3"
                >
                  <div>
                    <label className="text-[11px] font-bold text-emerald-200 block mb-1">الاسم الكريم</label>
                    <input
                      type="text"
                      placeholder="أدخل اسمك"
                      className="w-full bg-emerald-900/80 border border-emerald-700/80 rounded-xl px-3.5 py-2 text-xs text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-emerald-200 block mb-1">رقم الجوال</label>
                    <input
                      type="tel"
                      placeholder="05xxxxxxxx"
                      className="w-full bg-emerald-900/80 border border-emerald-700/80 rounded-xl px-3.5 py-2 text-xs text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-emerald-200 block mb-1">الحي السكني بالرياض</label>
                    <input
                      type="text"
                      placeholder="مثال: حي النرجس / الملقا"
                      className="w-full bg-emerald-900/80 border border-emerald-700/80 rounded-xl px-3.5 py-2 text-xs text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-emerald-200 block mb-1">تفاصيل المشروع والمساحة</label>
                    <textarea
                      rows={2}
                      placeholder="تفاصيل المساحة والتنسيق المطلوب..."
                      className="w-full bg-emerald-900/80 border border-emerald-700/80 rounded-xl px-3.5 py-2 text-xs text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>

                  <WhatsAppButton
                    variant="gold"
                    size="md"
                    message={`مرحبًا، أرغب في طلب معاينة وعرض سعر مجاني لخدمة ${service.title}.`}
                    className="w-full justify-center mt-3"
                  >
                    إرسال الطلب عبر واتساب
                  </WhatsAppButton>
                </form>
              </div>
            </div>

          </section>

          {/* ========================================================
              3. تفاصيل الخدمة والمقالة الشاملة (About & In-depth Article)
             ======================================================== */}
          <section id="about-service" className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-200/80 shadow-xs space-y-12 text-right">
            
            <div className="border-b border-gray-100 pb-6">
              <span className="text-xs font-bold text-amber-700 bg-amber-100/80 px-3 py-1 rounded-full">
                الدليل الشامل والمحتوى التفصيلي
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-emerald-950 mt-3 mb-2">
                دليل خدمة {service.title} الشامل بالرياض
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {article.introDetailed}
              </p>
            </div>

            {/* In-depth Article Content Sections */}
            <div className="space-y-10">
              {article.sections.map((sec, sIdx) => (
                <div key={sIdx} className="space-y-4 text-right">
                  <h3 className="text-xl sm:text-2xl font-bold text-emerald-950 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>{sec.heading}</span>
                  </h3>

                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {p}
                    </p>
                  ))}

                  {sec.bulletPoints && (
                    <ul className="space-y-2 pt-2 text-xs sm:text-sm text-gray-800">
                      {sec.bulletPoints.map((bp, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{bp}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {sec.table && (
                    <div className="overflow-x-auto pt-4">
                      <table className="w-full text-right border-collapse text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-emerald-950 text-white">
                            {sec.table.headers.map((h, hIdx) => (
                              <th key={hIdx} className="p-3 font-bold">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {sec.table.rows.map((r, rIdx) => (
                            <tr key={rIdx} className="hover:bg-slate-50">
                              {r.map((cell, cIdx) => (
                                <td key={cIdx} className="p-3 font-medium text-gray-800">{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* High-Converting Marketing Section */}
            {article.marketingSection && (
              <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 text-white p-8 sm:p-10 rounded-3xl border border-emerald-800 shadow-xl space-y-6 text-right">
                <div className="border-b border-emerald-800/80 pb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold mb-2 border border-amber-400/30">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>لماذا نحن الخيار الأفضل بالرياض؟</span>
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mb-1">
                    {article.marketingSection.heading}
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-200">
                    {article.marketingSection.subtitle}
                  </p>
                </div>

                {article.marketingSection.paragraphs.map((mp, mIdx) => (
                  <p key={mIdx} className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                    {mp}
                  </p>
                ))}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {article.marketingSection.featuresGrid.map((feat, fIdx) => (
                    <div key={fIdx} className="p-4 rounded-2xl bg-emerald-900/60 border border-emerald-700/60">
                      <h4 className="text-sm font-bold text-amber-300 mb-1">{feat.title}</h4>
                      <p className="text-xs text-emerald-100">{feat.description}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-emerald-800/80">
                  <p className="text-xs font-bold text-amber-200 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{article.marketingSection.guaranteeText}</span>
                  </p>
                  
                  <WhatsAppButton
                    variant="gold"
                    size="md"
                    message={`مرحبًا، أرغب في الاستفادة من العرض والتصميم المجاني لخدمة ${service.title}.`}
                  >
                    تواصل الآن واحصل على العرض
                  </WhatsAppButton>
                </div>
              </div>
            )}

            {/* Grid 1: أنواع الحدائق ومحتويات الخدمة */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {/* أنواع الحدائق */}
              <div className="p-6 rounded-2xl bg-[#fdfbf7] border border-amber-900/10 space-y-3">
                <h3 className="text-base font-bold text-emerald-950 flex items-center gap-2">
                  <Trees className="w-5 h-5 text-emerald-700" />
                  <span>أنواع الحدائق والمساحات التي ننفذها:</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>حدائق الفلل السكنية الكبيرة والقصور.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>حدائق المنازل والاستراحات والشاليهات.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>حدائق الأسطح (رووف جاردن Roof Garden).</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>الحدائق الأمامية والخلفية والأحواش المودرن.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>الجلسات الخارجية والمسطحات الخضراء.</span>
                  </li>
                </ul>
              </div>

              {/* محتويات الخدمة */}
              <div className="p-6 rounded-2xl bg-[#fdfbf7] border border-amber-900/10 space-y-3">
                <h3 className="text-base font-bold text-emerald-950 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-emerald-700" />
                  <span>محتويات ومكونات الخدمة:</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>مخططات وتصاميم ثلاثية الأبعاد (3D).</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>توريد وزراعة الأشجار والنخيل ونباتات الزينة.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>تركيب الثيل الطبيعي والعشب الصناعي بكثافات ممتازة.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>تركيب شبكات الري الأوتوماتيكية والإضاءات الديكورية.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>تنفيذ الشلالات والنوافير والبرجولات والمظلات.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Approximate Price Packages Table */}
            <div className="pt-4 space-y-4">
              <h3 className="text-lg font-bold text-emerald-950">
                باقات الأسعار والتكلفة التقديرية بالرياض:
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-right border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-emerald-950 text-white">
                      <th className="p-3 font-bold rounded-r-xl">نوع المشروع / المساحة</th>
                      <th className="p-3 font-bold">النطاق التقديري</th>
                      <th className="p-3 font-bold rounded-l-xl">يشمل</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200/80">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-emerald-950">حدائق المنازل والأحواش الصغيرة</td>
                      <td className="p-3 text-amber-800 font-bold">أسعار تنافسية مناسبة</td>
                      <td className="p-3 text-gray-600">تصميم 3D + عشب + شبكة ري + أحواض زراعية</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-emerald-950">حدائق الفلل السكنية المتوسطة والكبيرة</td>
                      <td className="p-3 text-amber-800 font-bold">حسب المساحة والتصاميم</td>
                      <td className="p-3 text-gray-600">شلال جداري + ثيل + جلسة خارجية + إضاءات LED</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-emerald-950">حدائق الأسطح (Roof Garden)</td>
                      <td className="p-3 text-amber-800 font-bold">عروض مخصصة للأسطح</td>
                      <td className="p-3 text-gray-600">عزل + عشب صناعي + جلسة مظللة + إضاءة دافئة</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </section>

          {/* ========================================================
              4. نطاق البحث والاهتمامات (Topical Coverage)
             ======================================================== */}
          <section id="topical-coverage" className="bg-emerald-50/60 p-8 rounded-3xl border border-emerald-200/50 text-right space-y-4">
            <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
              بحث واهتمامات العملاء
            </span>
            
            <h3 className="text-xl font-bold text-emerald-950">
              أبرز الكلمات والخدمات المطلوبة في أحياء الرياض:
            </h3>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "تنسيق حدائق شمال الرياض",
                "تنسيق حديقة منزلية صغيرة",
                "تركيب عشب صناعي بالرياض",
                "شركة ثيل طبيعي بالرياض",
                "شبكات ري أوتوماتيكية بالنرجس",
                "شلال جداري مودرن بالرياض",
                "تنسيق أسطح المنازل والفلل",
                "تصميم حدائق فلل حطين والملقا",
                "صيانة حدائق الياسمين والصحافة",
              ].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl bg-white border border-emerald-200 text-xs font-semibold text-emerald-950 shadow-2xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* ========================================================
              5. آلية العمل (Our Process - 4 Steps)
             ======================================================== */}
          <section id="process" className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-200/80 shadow-xs text-right space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold text-amber-700 bg-amber-100/80 px-3 py-1 rounded-full">
                مسار منظّم
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-emerald-950 mt-3 mb-2">
                آلية العمل في 4 خطوات أساسية
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  step: "01",
                  title: "المعاينة والقياس",
                  desc: "زيارة فنية مجانية لمعاينة المساحة ودراسة موقع الحديقة بالرياض.",
                  icon: <MapPin className="w-5 h-5 text-emerald-700" />,
                },
                {
                  step: "02",
                  title: "التصميم والمخططات",
                  desc: "وضع تصميم متكامل 3D يوضح كافة العناصر والألوان والتكلفة.",
                  icon: <Compass className="w-5 h-5 text-emerald-700" />,
                },
                {
                  step: "03",
                  title: "التنفيذ الاحترافي",
                  desc: "بدء العمل الفني بأجود المواد والتركيبات وفي الوقت المحدد.",
                  icon: <Wrench className="w-5 h-5 text-emerald-700" />,
                },
                {
                  step: "04",
                  title: "التسليم والصيانة",
                  desc: "تسليم الحديقة جاهزة مع تقديم ضمان 5 سنوات ومتابعة دورية.",
                  icon: <ShieldCheck className="w-5 h-5 text-emerald-700" />,
                },
              ].map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#fdfbf7] border border-amber-900/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black text-emerald-800/30">{item.step}</span>
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-emerald-950">{item.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ========================================================
              6. معرض الأعمال (Our Gallery)
             ======================================================== */}
          <section id="gallery" className="space-y-6 text-right">
            <div>
              <span className="text-xs font-bold text-amber-700 bg-amber-100/80 px-3 py-1 rounded-full">
                معرض النماذج
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-emerald-950 mt-3 mb-2">
                نماذج من مشاريع {service.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { title: `نموذج تنفيذ ${service.title} 1`, img: service.image },
                { title: `نموذج تنفيذ ${service.title} 2`, img: "/images/why-us-fountain.jpg" },
                { title: `نموذج تنفيذ ${service.title} 3`, img: "/images/hero/hero-landscaping.jpg" },
              ].map((item, idx) => (
                <div key={idx} className="relative h-64 rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-gray-900 group">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 right-3 text-xs font-bold text-white">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ========================================================
              7. الأسئلة الشائعة (FAQ)
             ======================================================== */}
          <section id="service-faq" className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-200/80 shadow-xs text-right space-y-6">
            <div>
              <span className="text-xs font-bold text-amber-700 bg-amber-100/80 px-3 py-1 rounded-full">
                إجابات وتساؤلات
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-emerald-950 mt-3 mb-2">
                الأسئلة الشائعة حول خدمة {service.title}
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  q: `كم تكلفة خدمة ${service.title} بالرياض؟`,
                  a: "تعتمد التكلفة على أبعاد المساحة، نوع الخامات المختارة (ثيل طبيعي، عشب صناعي، شلالات)، والتصاميم المطلوبة. نوفر معاينة فنية مجانية لحساب التكلفة بدقة.",
                },
                {
                  q: `ما هي مدة تنفيذ مشروع ${service.title}؟`,
                  a: "يتم استكمال معظم المشاريع السكنية خلال فترة زمنية قياسية تبدأ من يومين إلى أسبوع حسب حجم وأبعاد الحديقة.",
                },
                {
                  q: "هل توفرون ضماناً على التركيبات والنباتات؟",
                  a: "نعم، نقدم ضماناً شاملاً يصل إلى 5 سنوات على أعمال التركيب وشبكات الري والشلالات مع توفير خدمة صيانة دورية.",
                },
              ].map((faq, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-gray-200/80 space-y-1.5">
                  <h3 className="text-sm font-bold text-emerald-950 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pr-6">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ========================================================
              8. الخدمات ذات الصلة (Related Services Slider Carousel)
             ======================================================== */}
          <RelatedServicesSlider services={otherServices} />

        </div>

      </main>

      <Footer />
      <WhatsAppFloating />
      <PhoneFloating />
    </div>
  );
}
