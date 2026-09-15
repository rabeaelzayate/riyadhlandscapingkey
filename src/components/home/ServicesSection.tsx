import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Eye, MessageCircle } from "lucide-react";
import { servicesData } from "@/data/services";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-[#fdfbf7] border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100/80 border border-amber-300/60 text-amber-900 text-xs font-bold mb-3">
            <span>• خدماتنا</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 tracking-tight mb-1">
            خدمات تنسيق الحدائق التي نقدمها
          </h2>

          <div className="w-12 h-0.5 bg-amber-500 mx-auto rounded-full mt-3" />
        </div>

        {/* 8 Detailed Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-200/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Brand Watermark Badge */}
                <div className="relative h-60 bg-emerald-950 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} - مفتاح التنسيق`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Brand Tag on top-left of image */}
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-emerald-950 text-xs font-extrabold shadow-sm">
                    مفتاح التنسيق
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 text-right">
                  {/* Service Title (Arabic Only) */}
                  <h3 className="text-xl font-bold text-emerald-950 mb-3 group-hover:text-emerald-700 transition-colors">
                    <Link href={`/services/${service.id}/`} className="hover:underline">
                      {service.title}
                    </Link>
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Card Footer with BOTH "عرض الخدمة" & "طلب الخدمة" Buttons */}
              <div className="p-6 pt-0 flex items-center justify-between gap-2 border-t border-gray-100 mt-4">
                {/* 1. عرض الخدمة Button (View Service Page) */}
                <Link
                  href={`/services/${service.id}/`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors whitespace-nowrap"
                >
                  <Eye className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>عرض تفاصيل الخدمة</span>
                </Link>

                {/* 2. طلب الخدمة Button (Clean Single WhatsApp Icon Inline) */}
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

        {/* Bottom Action Button */}
        <div className="text-center">
          <Link
            href="/services/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all"
          >
            <span>استعراض دليل كافة الخدمات (8 خدمات متخصصة)</span>
            <ArrowLeft className="w-4 h-4 text-amber-400" />
          </Link>
        </div>

      </div>
    </section>
  );
};
