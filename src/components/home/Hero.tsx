"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ChevronLeft, ChevronRight, Sparkles, MapPin } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface SlideData {
  id: number;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  whatsappMessage: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    badge: "أفضل شركة تنسيق حدائق بالرياض",
    title: "أفضل خدمات تنسيق الحدائق في الرياض",
    subtitle: "BEST LANDSCAPING SERVICES IN RIYADH",
    description: "نحوّل مساحتك الخارجية إلى واحة خضراء تنبض بالحياة والفخامة، مع تصاميم مخصصة للفلل والمنازل بالرياض.",
    image: "/images/hero/hero-landscaping.jpg",
    whatsappMessage: "مرحبًا، أرغب في طلب معاينة مجانية لتنسيق حدائق بالرياض.",
  },
  {
    id: 2,
    badge: "توريد وتركيب بأعلى جودة",
    title: "توريد وتركيب الثيل الطبيعي والصناعي",
    subtitle: "NATURAL & ARTIFICIAL GRASS",
    description: "عشب طبيعي وصناعي بكثافة عالية ومقاومة ممتازة لأجواء الرياض لضمان لون أخضر زاهٍ ومظهر طبيعي يدوم طويلاً.",
    image: "/images/services/artificial-turf.jpg",
    whatsappMessage: "مرحبًا، أرغب في الاستفسار عن خدمة تركيب الثيل الطبيعي والصناعي.",
  },
  {
    id: 3,
    badge: "عناصر مائية ومودرن",
    title: "تصميم وتنفيذ الشلالات والنوافير الجدارية",
    subtitle: "MODERN WATERFALLS & FOUNTAINS",
    description: "شلالات وتصاميم مائية أنيقة بلمسات حجرية وإضاءات دافئة تضيف لمسة راقية وصوت ماء مهدئ للمنازل والحدائق.",
    image: "/images/services/waterfalls.jpg",
    whatsappMessage: "مرحبًا، أرغب في الاستفسار عن تنفيذ الشلالات والنوافير المنزلية بالرياض.",
  },
  {
    id: 4,
    badge: "حلول موفرة للمياه",
    title: "تركيب شبكات الري الأوتوماتيكية الحديثة",
    subtitle: "SMART IRRIGATION SYSTEMS",
    description: "شبكات ري بالتنقيط والرشاشات مزودة بمؤقتات ذكية تضمن التغذية المتوازنة للنباتات وترشيد استهلاك المياه.",
    image: "/images/services/irrigation.jpg",
    whatsappMessage: "مرحبًا، أرغب في الاستفسار عن تركيب شبكات الري بالرياض.",
  },
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play slider like a smooth video slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <section
      id="hero"
      className="relative h-[100svh] min-h-[650px] w-full overflow-hidden bg-emerald-950 text-white select-none"
    >
      {/* Dynamic Background Image Slider with Smooth Motion Fade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={currentSlide === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Premium Multi-layer Vignette Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/65 to-emerald-950/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-950/50 to-transparent" />
      <div className="bg-leaf-pattern absolute inset-0 opacity-[0.08] pointer-events-none" aria-hidden="true" />

      {/* Main Content Overlay */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-4 md:px-6 pt-20">
        <div className="max-w-2xl text-right">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Badge Tag */}
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-black/40 px-4 py-1.5 text-xs sm:text-sm font-medium text-amber-300 backdrop-blur-md shadow-lg">
                <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                {slide.badge}
              </span>

              {/* H1 Title */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-[1.2] text-white drop-shadow-md tracking-tight mb-3">
                {slide.title}
              </h1>

              {/* English Subtitle */}
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-300/90 mb-4">
                {slide.subtitle}
              </p>

              {/* Description */}
              <p className="max-w-xl text-base sm:text-lg leading-relaxed text-white/90 drop-shadow-sm mb-8">
                {slide.description}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 items-center">
                {/* Primary Button */}
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-3.5 text-base shadow-xl hover:-translate-y-0.5 transition-all duration-300 focus:ring-2 focus:ring-emerald-400"
                >
                  تصفح خدماتنا
                </a>

                {/* Secondary WhatsApp Button */}
                <a
                  href={getWhatsAppUrl(slide.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-7 py-3.5 text-base shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>احصل على عرض مجاني</span>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Navigation Controls & Progress Dots */}
      <div className="absolute bottom-8 right-6 left-6 z-20 mx-auto max-w-7xl flex items-center justify-between pointer-events-none">
        {/* Slide Indicators / Dots */}
        <div className="flex items-center gap-2 pointer-events-auto">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`انتقل إلى الشريحة ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                currentSlide === index
                  ? "w-8 bg-amber-400"
                  : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Previous / Next Navigation Arrows */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <button
            onClick={prevSlide}
            aria-label="الشريحة السابقة"
            className="p-3 rounded-full bg-black/40 hover:bg-emerald-700 text-white backdrop-blur-md border border-white/20 transition-all active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="الشريحة التالية"
            className="p-3 rounded-full bg-black/40 hover:bg-emerald-700 text-white backdrop-blur-md border border-white/20 transition-all active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
