"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Download, X, Sparkles, Smartphone } from "lucide-react";
import { usePwaInstall } from "@/hooks/usePwaInstall";
import { IosInstallModal } from "./IosInstallModal";

export const InstallBanner: React.FC = () => {
  const {
    isMounted,
    isInstalled,
    isStandalone,
    isIOS,
    showIosGuide,
    setShowIosGuide,
    isBannerDismissed,
    dismissBanner,
    triggerInstall,
  } = usePwaInstall();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Delay appearance slightly (2 seconds) so it doesn't disturb initial page load
    if (isMounted && !isInstalled && !isStandalone && !isBannerDismissed) {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setVisible(false);
    }
  }, [isMounted, isInstalled, isStandalone, isBannerDismissed]);

  if (!isMounted || !visible || isInstalled || isStandalone || isBannerDismissed) {
    return (
      <IosInstallModal
        isOpen={showIosGuide}
        onClose={() => setShowIosGuide(false)}
        isIOS={isIOS}
      />
    );
  }

  return (
    <>
      <div
        className="fixed bottom-20 md:bottom-6 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 animate-bounce-subtle"
        dir="rtl"
      >
        <div className="relative bg-emerald-950/95 backdrop-blur-xl border border-emerald-500/40 rounded-2xl p-4 shadow-2xl text-white flex items-center justify-between gap-3 overflow-hidden">
          {/* Subtle gold accent light */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Dismiss button */}
          <button
            onClick={dismissBanner}
            className="absolute top-2 left-2 p-1 text-gray-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="إغلاق الإشعار"
          >
            <X className="w-4 h-4" />
          </button>

          {/* App Icon + Info */}
          <div className="flex items-center gap-3 min-w-0 pr-1">
            <div className="relative w-12 h-12 rounded-xl bg-emerald-900 border border-emerald-400/40 p-1 flex-shrink-0 shadow-md">
              <Image
                src="/images/logo-transparent.png"
                alt="شعار زهرة الورود"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-1 text-[11px] font-bold text-amber-300">
                <Sparkles className="w-3 h-3 flex-shrink-0" />
                <span>تطبيق الجوال السريع</span>
              </div>
              <h4 className="font-extrabold text-sm text-white truncate">
                تطبيق زهرة الورود
              </h4>
              <p className="text-[11px] text-emerald-200/80 truncate">
                تثبيت على الهاتف لتصفح أسرع
              </p>
            </div>
          </div>

          {/* Install Button */}
          <button
            onClick={triggerInstall}
            className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-emerald-950 font-black text-xs shadow-lg transition-transform active:scale-95 cursor-pointer"
          >
            {isIOS ? (
              <Smartphone className="w-4 h-4" />
            ) : (
              <Download className="w-4 h-4" />
            )}
            <span>تنزيل كتطبيق</span>
          </button>
        </div>
      </div>

      <IosInstallModal
        isOpen={showIosGuide}
        onClose={() => setShowIosGuide(false)}
        isIOS={isIOS}
      />
    </>
  );
};
