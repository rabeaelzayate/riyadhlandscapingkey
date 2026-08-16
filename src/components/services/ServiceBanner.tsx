import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, MessageCircle, CheckCheck } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ServiceBannerProps {
  title: string;
  subtitle: string;
  image?: string;
  sideImage?: string; // Optional: Rendered on left side ONLY if explicitly passed
  isAnimatedChat?: boolean; // Optional: Add floating animated chat bubbles around person
  breadcrumbs: BreadcrumbItem[];
}

export const ServiceBanner: React.FC<ServiceBannerProps> = ({
  title,
  subtitle,
  image = "/images/hero/hero-landscaping.jpg",
  sideImage,
  isAnimatedChat = false,
  breadcrumbs,
}) => {
  return (
    <section className="relative w-full min-h-[320px] sm:min-h-[380px] md:min-h-[440px] flex items-center overflow-hidden py-14 sm:py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Green Overlay Backdrop matching brand theme */}
        <div className="absolute inset-0 bg-emerald-950/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-l from-emerald-950/95 via-emerald-900/80 to-emerald-950/70" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Right Text Column */}
          <div className={`w-full text-right space-y-4 ${sideImage ? "md:w-3/5 lg:w-2/3" : "w-full max-w-4xl"}`}>
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-2">
              <ol className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-200/90">
                {breadcrumbs.map((crumb, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    {idx > 0 && <ChevronLeft className="w-3.5 h-3.5 text-amber-400 rotate-180" />}
                    {crumb.href ? (
                      <Link href={crumb.href} className="hover:text-amber-300 transition-colors">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-white font-bold">{crumb.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            {/* Large White Bold Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              {title}
            </h1>

            {/* Description directly under Heading */}
            <p className="text-sm sm:text-base md:text-lg text-emerald-100/95 max-w-2xl leading-relaxed font-medium">
              {subtitle}
            </p>
          </div>

          {/* Left Side: Optional Transparent PNG Cutout Graphic */}
          {sideImage && (
            <div className="relative w-full md:w-2/5 lg:w-1/3 h-64 sm:h-80 md:h-96 flex items-center justify-center md:justify-start shrink-0">
              <div className="relative w-full h-full max-w-[340px] flex items-center justify-center">
                
                {/* Person Cutout Photo */}
                <Image
                  src={sideImage}
                  alt={title}
                  fill
                  priority
                  sizes="(max-width: 768px) 280px, 340px"
                  className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.65)] hover:scale-105 transition-transform duration-500 z-10"
                />

                {/* Animated Floating Live Chat Bubbles */}
                {isAnimatedChat && (
                  <>
                    {/* Top Right Floating Message */}
                    <div className="absolute -top-2 -right-4 sm:-right-8 z-20 animate-bounce transition-all duration-1000" style={{ animationDuration: "3s" }}>
                      <div className="bg-white/95 backdrop-blur-md text-emerald-950 px-3.5 py-2.5 rounded-2xl rounded-bl-none shadow-2xl border border-emerald-100 flex items-center gap-2 max-w-[210px]">
                        <span className="relative flex h-2.5 w-2.5 shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]"></span>
                        </span>
                        <div className="text-[11px] font-bold leading-tight">
                          مرحبًا، كيف أساعدك في حديقتك؟
                        </div>
                      </div>
                    </div>

                    {/* Bottom Left Floating Reply */}
                    <div className="absolute bottom-6 -left-4 sm:-left-8 z-20 animate-pulse transition-all duration-1000">
                      <div className="bg-[#25D366] text-white px-3.5 py-2.5 rounded-2xl rounded-br-none shadow-2xl flex items-center gap-2 max-w-[220px]">
                        <MessageCircle className="w-4 h-4 text-white shrink-0" />
                        <div className="text-[11px] font-bold leading-tight flex-1">
                          أود طلب معاينة بالرياض
                        </div>
                        <CheckCheck className="w-3.5 h-3.5 text-emerald-100 shrink-0" />
                      </div>
                    </div>
                  </>
                )}

              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
