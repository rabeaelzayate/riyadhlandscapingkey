"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Eye } from "lucide-react";
import { ServiceItem } from "@/data/services";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

interface RelatedServicesSliderProps {
  services: ServiceItem[];
}

export const RelatedServicesSlider: React.FC<RelatedServicesSliderProps> = ({
  services,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="related-services-slider" className="space-y-6 text-right relative">
      
      {/* Section Header with Navigation Arrows */}
      <div className="flex items-end justify-between border-b border-gray-200/80 pb-4">
        <div>
          <span className="text-xs font-bold text-amber-700 bg-amber-100/80 px-3 py-1 rounded-full">
            خدمات إضافية
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-emerald-950 mt-2">
            خدمات ذات صلة قد تهمك بالرياض
          </h2>
        </div>

        {/* Prev / Next Slider Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleScrollRight}
            aria-label="الخدمة السابقة"
            className="w-10 h-10 rounded-xl bg-white border border-gray-300 text-emerald-950 hover:bg-emerald-50 hover:border-emerald-600 flex items-center justify-center shadow-xs transition-all active:scale-95"
          >
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={handleScrollLeft}
            aria-label="الخدمة التالية"
            className="w-10 h-10 rounded-xl bg-white border border-gray-300 text-emerald-950 hover:bg-emerald-50 hover:border-emerald-600 flex items-center justify-center shadow-xs transition-all active:scale-95"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Carousel Slider */}
      <div
        ref={scrollContainerRef}
        className="flex items-stretch gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-2 scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {services.map((item) => (
          <div
            key={item.id}
            className="snap-start flex-shrink-0 w-80 sm:w-96 bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Image Container */}
              <div className="relative h-48 bg-emerald-950 overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.title} بالرياض - زهرة الورود`}
                  fill
                  sizes="384px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-emerald-950 text-[11px] font-extrabold shadow-sm">
                  زهرة الورود
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 text-right">
                <h3 className="text-lg font-bold text-emerald-950 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Card Footer Actions */}
            <div className="p-5 pt-0 flex items-center justify-between gap-2 border-t border-gray-100 mt-4">
              <Link
                href={`/services/${item.id}/`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors whitespace-nowrap"
              >
                <Eye className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>عرض الخدمة</span>
              </Link>

              <WhatsAppButton
                variant="primary"
                size="sm"
                message={item.whatsappMessage}
                className="px-3.5 py-2 text-xs font-bold"
              >
                طلب الخدمة
              </WhatsAppButton>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
