import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Trees,
  CheckCircle2,
  Eye,
  ArrowRight,
  Calculator,
  ShieldCheck,
  Compass,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WhatsAppFloating } from "@/components/ui/WhatsAppFloating";
import { PhoneFloating } from "@/components/ui/PhoneFloating";

import { ServiceBanner } from "@/components/services/ServiceBanner";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "خدمات العشب الصناعي وتنسيق الحدائق بالسعودية | توريد وتركيب وجملة",
  description:
    "استعرض خدمات مؤسسة مفتاح التنسيق وحدائق الفرسان: توريد وتركيب عشب صناعي وجداري، جملة ومفرق، ثيل طبيعي، شبكات ري أوتوماتيكية، شلالات ونوافير، حصى وبحص الزينة بالرياض والدمام.",
  keywords: [
    "خدمات العشب الصناعي",
    "تركيب عشب صناعي بالرياض",
    "عشب جداري صناعي",
    "جملة العشب الصناعي",
    "تنسيق حدائق عشب صناعي",
    "اسعار العشب الصناعي بالرياض",
    "حدائق الفرسان التجارية للعشب الصناعي",
    "ثيل صناعي للحوش",
    "حصى الزينة للحدائق"
  ],
  alternates: {
    canonical: "https://riyadhlandscapingkey-sa.com/services/",
  },
  openGraph: {
    title: "خدمات العشب الصناعي وتنسيق الحدائق بالسعودية | مفتاح التنسيق",
    description:
      "توريد وتركيب عشب صناعي وجداري، شبكات ري، شلالات ونوافير، حصى الزينة وتنسيق حدائق الفلل بالرياض والدمام.",
    url: "https://riyadhlandscapingkey-sa.com/services/",
    images: ["/images/hero/hero-landscaping.jpg"],
  },
};

export default function ServicesIndexPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#fdfbf7] text-gray-900 selection:bg-emerald-200 selection:text-emerald-950">
      <Header />

      <main className="flex-grow pt-20 pb-20">
        
        {/* Hero Header Banner with Image & Green Overlay */}
        <ServiceBanner
          title={`خدمات مؤسسة ${company.nameAr} المتكاملة`}
          subtitle="من التصميم والمخططات حتى التنفيذ والصيانة - باقة شاملة لتنسيق الحدائق والشلالات والثيل في كافة مدن ومناطق المملكة."
          image="/images/hero/hero-landscaping.jpg"
          breadcrumbs={[
            { label: "الرئيسية", href: "/" },
            { label: "الخدمات" },
          ]}
        />

        {/* Services List Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold text-amber-700 bg-amber-100/80 px-3.5 py-1 rounded-full">
              دليل الخدمات الشامل
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-emerald-950 mt-3 mb-2">
              اختر الخدمة المناسبة لمساحة حديقتك
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              اضغط على "عرض الخدمة" لقراءة المقال والدليل التفصيلي، أو "طلب الخدمة" للتواصل المباشر عبر واتساب.
            </p>
          </div>

          {/* 8 Full Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-200/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Service Image with Brand Badge */}
                  <div className="relative h-60 bg-emerald-950 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.title} - ${company.nameAr}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-emerald-950 text-xs font-extrabold shadow-sm">
                      {company.nameAr}
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 text-right space-y-3">
                    <h3 className="text-xl font-bold text-emerald-950 group-hover:text-emerald-700 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>

                    {/* Features checklist */}
                    <ul className="space-y-1.5 pt-2 border-t border-gray-100 text-xs text-gray-700">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 flex items-center justify-between gap-2 border-t border-gray-100 mt-4">
                  {/* View Service Details */}
                  <Link
                    href={`/services/${service.id}/`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors whitespace-nowrap"
                  >
                    <Eye className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>عرض الخدمة</span>
                  </Link>

                  {/* Order via WhatsApp */}
                  <WhatsAppButton
                    variant="primary"
                    size="sm"
                    message={service.whatsappMessage}
                    className="px-4 py-2 text-xs font-bold"
                  >
                    طلب الخدمة
                  </WhatsAppButton>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Quote Form Banner */}
          <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 text-white p-8 sm:p-12 rounded-3xl border-2 border-emerald-800/80 shadow-2xl text-center space-y-6">
            <div className="max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold text-amber-300 bg-amber-400/10 border border-amber-400/20 px-3.5 py-1 rounded-full inline-block">
                معاينة مجانية بالرياض
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
                هل تحتاج إلى استشارة فنية لموقع حديقتك؟
              </h3>
              <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-medium">
                تواصل معنا الآن وسنقوم بتنسيق زيارة مهندس فني لموقعك في أي حي بالرياض مجاناً وبدون أي التزام.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <WhatsAppButton
                variant="gold"
                size="lg"
                message="مرحبًا، أرغب في الاستفسار عن خدمات تنسيق الحدائق وطلب معاينة لموقعي بالرياض."
              >
                تواصل معنا عبر واتساب الآن
              </WhatsAppButton>

              <Link
                href="/contact/"
                className="px-6 py-3.5 rounded-xl border-2 border-emerald-400 text-white font-bold text-sm bg-emerald-900/60 hover:bg-emerald-800 transition-colors shadow-md"
              >
                حجز موعد ومعلومات التواصل
              </Link>
            </div>
          </div>

          {/* Cross Page Navigation Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <Link
              href="/projects/"
              className="p-6 rounded-3xl bg-white border border-gray-200/80 hover:border-emerald-500/50 hover:shadow-lg transition-all flex items-center justify-between text-right group"
            >
              <div>
                <span className="text-[11px] text-amber-700 font-bold uppercase block mb-1">المعرض الحي</span>
                <h4 className="text-base font-extrabold text-emerald-950 group-hover:text-emerald-700 transition-colors">
                  معرض المشاريع المنفذة بالرياض
                </h4>
                <p className="text-xs text-gray-600 mt-1">تصفح صور الحدائق والشلالات والملاعب قبل وبعد التنفيذ.</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 group-hover:scale-110 transition-transform shrink-0 mr-3">
                <Eye className="w-5 h-5" />
              </div>
            </Link>

            <Link
              href="/articles/"
              className="p-6 rounded-3xl bg-white border border-gray-200/80 hover:border-emerald-500/50 hover:shadow-lg transition-all flex items-center justify-between text-right group"
            >
              <div>
                <span className="text-[11px] text-amber-700 font-bold uppercase block mb-1">الدليل والنصائح</span>
                <h4 className="text-base font-extrabold text-emerald-950 group-hover:text-emerald-700 transition-colors">
                  المقالات والنصائح الزراعية والتصميمية
                </h4>
                <p className="text-xs text-gray-600 mt-1">دليل شامل لاختيار العشب وشبكات الري والنباتات الصحراوية.</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 group-hover:scale-110 transition-transform shrink-0 mr-3">
                <Compass className="w-5 h-5" />
              </div>
            </Link>
          </div>

        </section>

      </main>

      <Footer />
      <WhatsAppFloating />
      <PhoneFloating />
    </div>
  );
}
