"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Clock, Calendar, ArrowLeft, BookOpen } from "lucide-react";
import { ArticleItem, articlesData } from "@/data/articles";

interface RelatedArticlesSliderProps {
  currentArticleId: string;
  category?: string;
}

export const RelatedArticlesSlider: React.FC<RelatedArticlesSliderProps> = ({
  currentArticleId,
  category,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Filter related articles
  const otherArticles = articlesData.filter((a) => a.id !== currentArticleId);
  const sameCategory = otherArticles.filter((a) => a.category === category);
  const relatedArticles =
    sameCategory.length >= 2
      ? [...sameCategory, ...otherArticles.filter((a) => a.category !== category)]
      : otherArticles;

  const finalArticles = relatedArticles.slice(0, 6);

  if (finalArticles.length === 0) return null;

  const handleScroll = (direction: "next" | "prev") => {
    if (scrollContainerRef.current) {
      const cardWidth = 320;
      const scrollAmount = direction === "next" ? -cardWidth : cardWidth;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="mt-16 pt-12 border-t border-gray-200/80">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-900 text-xs font-bold mb-2">
            <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
            <span>مقالات مقترحة ذات صلة</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-emerald-950">
            مقالات قد تهمك أيضاً
          </h3>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleScroll("prev")}
            aria-label="المقالات السابقة"
            className="p-2.5 rounded-full bg-white border border-gray-200 text-emerald-950 hover:bg-emerald-900 hover:text-white shadow-xs transition-all active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => handleScroll("next")}
            aria-label="المقالات التالية"
            className="p-2.5 rounded-full bg-white border border-gray-200 text-emerald-950 hover:bg-emerald-900 hover:text-white shadow-xs transition-all active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Carousel Container */}
      <div
        ref={scrollContainerRef}
        className="flex items-stretch gap-6 overflow-x-auto scrollbar-none pb-4 snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {finalArticles.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[290px] sm:w-[320px] snap-start group bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Card Image */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="320px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-3 py-1 rounded-full bg-emerald-950/80 text-white text-[11px] font-bold backdrop-blur-md">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-3 text-right">
                <div className="flex items-center gap-3 text-[11px] font-bold text-gray-600">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-600" />
                    <span>{item.date}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{item.readTime}</span>
                  </span>
                </div>

                <h4 className="text-base font-bold text-emerald-950 group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug">
                  {item.title}
                </h4>

                <p className="text-xs text-gray-700 line-clamp-2 leading-relaxed">
                  {item.excerpt}
                </p>
              </div>
            </div>

            {/* Card Footer Link */}
            <div className="p-5 pt-0 mt-auto">
              <Link
                href={`/articles/${item.slug}/`}
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-amber-800 hover:text-amber-900 group-hover:translate-x-[-4px] transition-all"
              >
                <span>اقرأ المقال بالكامل</span>
                <ArrowLeft className="w-3.5 h-3.5 text-amber-800" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
