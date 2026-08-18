"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, Trees } from "lucide-react";

export const Preloader: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(true);
  const [fadeOut, setFadeOut] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(10);

  useEffect(() => {
    // Increment progress smoothly
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 25) + 15;
      });
    }, 150);

    // Fade out after completion
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setMounted(false);
      }, 700);
    }, 1400);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-gradient-to-br from-[#041d13] via-[#06281b] to-[#02140d] text-white transition-all duration-700 ease-out select-none ${
        fadeOut ? "opacity-0 pointer-events-none scale-105 blur-xs" : "opacity-100 scale-100"
      }`}
    >
      {/* Ambient Glowing Orbs in Background */}
      <div className="absolute top-1/3 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/3 w-64 h-64 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-sm w-full">
        
        {/* Animated Brand Logo Container */}
        <div className="relative mb-6">
          {/* Pulsing Outer Gold Glow Ring */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-amber-400/30 to-emerald-400/30 blur-md animate-pulse" />
          
          {/* Logo Emblem Box */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-emerald-900/90 to-emerald-950/90 p-4 border border-amber-400/40 shadow-2xl flex items-center justify-center backdrop-blur-md">
            <Image
              src="/images/logo-transparent.png"
              alt="زهرة الورود لتنسيق الحدائق بالرياض"
              width={100}
              height={100}
              priority
              className="w-full h-full object-contain drop-shadow-md animate-bounce duration-1000"
            />
          </div>

          {/* Sparkle Badge */}
          <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-amber-500 text-emerald-950 flex items-center justify-center shadow-lg border-2 border-emerald-950">
            <Sparkles className="w-4 h-4 text-emerald-950 animate-spin" style={{ animationDuration: "6s" }} />
          </div>
        </div>

        {/* Brand Name Typography */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-1">
          زهرة الورود
        </h2>

        {/* Subtitle */}
        <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-300/90 mb-8">
          <Trees className="w-3.5 h-3.5 text-amber-400" />
          <span>لتنسيق الحدائق بالرياض</span>
          <Trees className="w-3.5 h-3.5 text-amber-400" />
        </div>

        {/* Luxury Linear Progress Bar */}
        <div className="w-full max-w-[220px] mb-3">
          <div className="w-full h-1.5 bg-emerald-950/80 rounded-full overflow-hidden border border-emerald-800/60 p-0.5">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 via-amber-400 to-amber-300 rounded-full transition-all duration-300 ease-out shadow-sm"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>

        {/* Slogan */}
        <p className="text-[11px] font-medium text-emerald-200/60 tracking-wider">
          نزرع الجمال في كل مساحة...
        </p>

      </div>
    </div>
  );
};
