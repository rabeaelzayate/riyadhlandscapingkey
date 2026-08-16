"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const WhatsAppFloating: React.FC = () => {
  const href = getWhatsAppUrl("مرحبًا، أرغب في الاستفسار عن خدمات تنسيق الحدائق بالرياض.");

  return (
    <div className="fixed bottom-5 left-5 z-40">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل مباشر عبر الواتساب"
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white/20"
      >
        {/* Subtle pulsing outer ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7" />

        {/* Hover Tooltip */}
        <span className="absolute left-16 top-1/2 -translate-y-1/2 hidden group-hover:block bg-emerald-950 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap shadow-md transition-opacity">
          تحدث معنا الآن عبر واتساب
        </span>
      </a>
    </div>
  );
};
