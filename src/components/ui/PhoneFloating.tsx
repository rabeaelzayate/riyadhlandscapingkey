"use client";

import React from "react";
import { Phone } from "lucide-react";
import { company } from "@/data/company";

export const PhoneFloating: React.FC = () => {
  const phoneNumber = company.phone || "+966505661392";
  const telHref = `tel:${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex items-center">
      <a
        href={telHref}
        aria-label="اتصل بنا مباشرة"
        className="group relative inline-flex items-center gap-2.5 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full bg-gradient-to-r from-emerald-800 via-emerald-900 to-emerald-950 text-white shadow-2xl border border-emerald-500/40 hover:border-amber-400/80 transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-500/50 backdrop-blur-md"
      >
        {/* Animated Pulse Outer Ring */}
        <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-emerald-500 to-amber-400 opacity-40 blur-xs group-hover:opacity-80 transition-opacity animate-pulse" />

        {/* Circular Phone Icon Badge */}
        <div className="relative z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-600 group-hover:bg-amber-500 text-white group-hover:text-emerald-950 flex items-center justify-center shadow-md transition-colors duration-300 flex-shrink-0">
          <Phone className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
        </div>

        {/* Text Label */}
        <div className="relative z-10 text-right pr-0.5">
          <span className="text-[10px] text-amber-300 font-bold uppercase block tracking-wider leading-none mb-0.5">
            اتصال مباشر
          </span>
          <span className="text-xs sm:text-sm font-extrabold text-white group-hover:text-amber-300 transition-colors">
            {phoneNumber}
          </span>
        </div>
      </a>
    </div>
  );
};
