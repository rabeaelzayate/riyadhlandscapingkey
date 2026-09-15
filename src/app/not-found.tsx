"use client";

import React from "react";
import Link from "next/link";
import {
  Home,
  Trees,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  Headphones,
  Undo2,
  Image as ImageIcon,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloating } from "@/components/ui/WhatsAppFloating";
import { PhoneFloating } from "@/components/ui/PhoneFloating";
import { company } from "@/data/company";

export default function NotFound() {
  const handleGoBack = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };

  const quickLinks = [
    {
      title: "تنسيق الحدائق",
      desc: "تصميم وتنسيق المساحات الخارجية والفلل",
      cta: "استكشف الخدمات",
      href: "/services",
      icon: <Trees className="w-6 h-6 text-emerald-700" />,
    },
    {
      title: "معرض المشاريع",
      desc: `شاهد صور وفيديوهات أعمال ${company.nameAr}`,
      cta: "عرض المشاريع",
      href: "/projects",
      icon: <ImageIcon className="w-6 h-6 text-emerald-700" />,
    },
    {
      title: "تواصل معنا",
      desc: "اطلب معاينة واستشارة هندسية مجانية",
      cta: "تواصل الآن",
      href: "/contact",
      icon: <Headphones className="w-6 h-6 text-emerald-700" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfbf7] text-gray-900 selection:bg-emerald-200 selection:text-emerald-950">
      <Header />

      <main className="flex-1 pt-20 sm:pt-24 pb-20 relative overflow-hidden">
        {/* Subtle Ambient Background Orbs */}
        <div className="absolute top-1/3 -right-28 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -left-28 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* =========================================================================
            1. 100% FULL-WIDTH RESPONSIVE 404 COVER BANNER (PERFECT ON ALL DEVICES)
           ========================================================================= */}
        <div className="w-full relative overflow-hidden bg-[#fdfbf7] border-b border-gray-200/60 shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/404-garden-hero.jpg"
            alt={`404 ${company.nameAr} ${company.subtitleAr}`}
            className="w-full object-cover object-center block"
            style={{
              width: "100%",
              height: "clamp(260px, 32vw, 520px)",
              minHeight: "260px",
              maxHeight: "520px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>

        {/* =========================================================================
            2. CENTERED CONTENT CONTAINER BELOW THE IMAGE
           ========================================================================= */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full pt-8 sm:pt-10">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full border border-amber-400/80 shadow-xs mb-4">
            <HelpCircle className="w-4 h-4 text-emerald-700" />
            <span className="text-xs sm:text-sm font-bold text-emerald-950">
              الصفحة غير موجودة
            </span>
          </div>

          {/* =========================================================================
              3. MAIN HEADING
             ========================================================================= */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-emerald-950 leading-tight mb-3">
            عذرًا، يبدو أن هذه الصفحة غير موجودة!
          </h1>

          {/* =========================================================================
              4. DESCRIPTION
             ========================================================================= */}
          <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-xl mx-auto leading-relaxed mb-8 font-medium">
            لا تقلق، يمكنك العودة إلى الصفحة الرئيسية أو استكشاف خدماتنا والعثور على ما تبحث عنه بسهولة.
          </p>

          {/* =========================================================================
              5. ACTION BUTTONS: HOME + GO BACK + SERVICES
             ========================================================================= */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12 w-full max-w-xl mx-auto">
            
            {/* Primary Button - Home */}
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-emerald-900 hover:bg-emerald-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              <Home className="w-4.5 h-4.5 text-white" />
              <span>العودة للرئيسية</span>
            </Link>

            {/* Back to Previous Page Button */}
            <button
              onClick={handleGoBack}
              type="button"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              <Undo2 className="w-4.5 h-4.5 text-emerald-950" />
              <span>الرجوع للصفحة السابقة</span>
            </button>

            {/* Secondary Link - All Services */}
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-white hover:bg-emerald-50 text-emerald-950 border-2 border-emerald-900/30 hover:border-emerald-800 font-bold text-sm shadow-xs transition-all active:scale-95"
            >
              <Trees className="w-4.5 h-4.5 text-emerald-700" />
              <span>تصفح خدماتنا</span>
            </Link>
          </div>

          {/* =========================================================================
              6. SECTION DIVIDER
             ========================================================================= */}
          <div className="flex items-center justify-center gap-3 my-8 max-w-xs mx-auto">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-amber-400" />
            <h2 className="text-xs sm:text-sm font-bold text-gray-700 whitespace-nowrap">
              روابط قد تساعدك
            </h2>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-amber-400" />
          </div>

          {/* =========================================================================
              7. THREE DEDICATED PAGE NAVIGATION CARDS
             ========================================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-12">
            {quickLinks.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="group relative bg-white p-6 rounded-3xl border border-gray-200/80 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
              >
                {/* Green Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4 group-hover:bg-emerald-100 group-hover:scale-110 transition-all duration-300 shadow-xs">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-emerald-950 mb-1.5 group-hover:text-emerald-800 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-500 mb-4 leading-relaxed line-clamp-2">
                  {item.desc}
                </p>

                {/* Gold Action CTA */}
                <div className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 group-hover:text-amber-600 transition-colors">
                  <span>{item.cta}</span>
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          {/* =========================================================================
              8. BRAND STATEMENT
             ========================================================================= */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-extrabold text-emerald-950">
            <span className="text-amber-500">✦</span>
            <span>{company.nameAr} — نزرع الجمال في كل مساحة</span>
            <span className="text-amber-500">✦</span>
          </div>

        </div>
      </main>

      <Footer />
      <WhatsAppFloating />
      <PhoneFloating />
    </div>
  );
}
