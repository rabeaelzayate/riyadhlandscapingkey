import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, Clock, ArrowLeft, BookOpen } from "lucide-react";
import { articlesData } from "@/data/articles";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceBanner } from "@/components/services/ServiceBanner";
import { WhatsAppFloating } from "@/components/ui/WhatsAppFloating";
import { PhoneFloating } from "@/components/ui/PhoneFloating";

export const metadata: Metadata = {
  title: "المقالات والأدلة الفنية | دليل العشب الصناعي وتنسيق الحدائق بالسعودية",
  description:
    "أدلة ومقالات شاملة حول أسعار ومواصفات العشب الصناعي والجداري، الثيل الطبيعي، شبكات الري الذكية، حصى الزينة، وتنسيق حدائق الفلل بالرياض والدمام.",
  keywords: [
    "مواصفات العشب الصناعي",
    "اسعار العشب الصناعي بالرياض",
    "انواع العشب الصناعي",
    "طريقة فرش العشب الصناعي",
    "الفرق بين العشب الطبيعي والصناعي",
    "تزيين الجدران بالعشب الصناعي"
  ],
  alternates: {
    canonical: "https://riyadhlandscapingkey-sa.com/articles/",
  },
  openGraph: {
    title: "المقالات والأدلة الفنية | دليل العشب الصناعي وتنسيق الحدائق بالسعودية",
    description:
      "مقالات فنية وإرشادات معمارية لتصميم حدائق الفلل والعناية بالعشب الصناعي والجداري بالسعودية.",
    url: "https://riyadhlandscapingkey-sa.com/articles/",
    images: ["/images/hero/hero-landscaping.jpg"],
  },
};

export default function ArticlesIndexPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#fdfbf7] text-gray-900 selection:bg-emerald-200 selection:text-emerald-950">
      <Header />

      <main className="flex-grow pt-20 pb-20">
        
        {/* Top Hero Banner */}
        <ServiceBanner
          title="مقالات ونصائح تنسيق الحدائق بالرياض"
          subtitle="أدلة معمارية وإرشادات تفصيلية لمساعدتك في تصميم وتنفيذ وصيانة حديقتك بأحدث الطرق والمواصفات القياسية."
          image="/images/services/landscaping.jpg"
          breadcrumbs={[
            { label: "الرئيسية", href: "/" },
            { label: "المقالات" },
          ]}
        />

        {/* Articles List */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100/80 border border-emerald-300/60 text-emerald-900 text-xs font-bold mb-3">
              <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
              <span>المكتبة والمعرفة</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 tracking-tight">
              جميع المقالات والدلائل الفنية
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articlesData.map((article) => (
              <article
                key={article.id}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-200/80 hover:border-emerald-500/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 bg-emerald-950 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                    <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-emerald-900/90 text-amber-300 text-xs font-extrabold backdrop-blur-md shadow-sm border border-emerald-700/60">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-6 text-right space-y-3">
                    <div className="flex items-center gap-4 text-[11px] font-semibold text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-amber-600" />
                        <span>{article.date}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-emerald-600" />
                        <span>قراءة {article.readTime}</span>
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-emerald-950 group-hover:text-emerald-700 transition-colors leading-snug">
                      <Link href={`/articles/${article.slug}/`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-gray-100/80 mt-4 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-emerald-800">
                    بقلم: {article.author}
                  </span>

                  <Link
                    href={`/articles/${article.slug}/`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-emerald-900 group-hover:text-amber-600 transition-colors"
                  >
                    <span>اقرأ المقال</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Cross Navigation Banner & Links */}
          <div className="pt-8 border-t border-gray-200/80 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Link
                href="/services/"
                className="p-6 rounded-3xl bg-white border border-gray-200/80 hover:border-emerald-500/50 hover:shadow-lg transition-all flex items-center justify-between text-right group"
              >
                <div>
                  <span className="text-[11px] text-emerald-700 font-bold uppercase block mb-1">خدماتنا الميدانية</span>
                  <h4 className="text-sm sm:text-base font-extrabold text-emerald-950 group-hover:text-emerald-700 transition-colors">
                    دليل كافة الخدمات (8)
                  </h4>
                  <p className="text-xs text-gray-600 mt-1">تنسيق حدائق، عشب طبيعي وصناعي، شلالات وشبكات ري.</p>
                </div>
                <ArrowLeft className="w-4 h-4 text-emerald-700 group-hover:-translate-x-1 transition-transform shrink-0 mr-3" />
              </Link>

              <Link
                href="/projects/"
                className="p-6 rounded-3xl bg-white border border-gray-200/80 hover:border-emerald-500/50 hover:shadow-lg transition-all flex items-center justify-between text-right group"
              >
                <div>
                  <span className="text-[11px] text-emerald-700 font-bold uppercase block mb-1">النماذج والصور</span>
                  <h4 className="text-sm sm:text-base font-extrabold text-emerald-950 group-hover:text-emerald-700 transition-colors">
                    معرض الأعمال المنفذة
                  </h4>
                  <p className="text-xs text-gray-600 mt-1">شاهد صور الحدائق والشلالات التي نفذناها في الرياض.</p>
                </div>
                <ArrowLeft className="w-4 h-4 text-emerald-700 group-hover:-translate-x-1 transition-transform shrink-0 mr-3" />
              </Link>

              <Link
                href="/contact/"
                className="p-6 rounded-3xl bg-white border border-gray-200/80 hover:border-emerald-500/50 hover:shadow-lg transition-all flex items-center justify-between text-right group"
              >
                <div>
                  <span className="text-[11px] text-amber-700 font-bold uppercase block mb-1">استشارة مجانية</span>
                  <h4 className="text-sm sm:text-base font-extrabold text-emerald-950 group-hover:text-emerald-700 transition-colors">
                    تواصل واحجز معاينة
                  </h4>
                  <p className="text-xs text-gray-600 mt-1">حدد موعد زيارة ميدانية لموقعك في أي حي بالرياض.</p>
                </div>
                <ArrowLeft className="w-4 h-4 text-emerald-700 group-hover:-translate-x-1 transition-transform shrink-0 mr-3" />
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
