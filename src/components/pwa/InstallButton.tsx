"use client";

import React from "react";
import { Download, Smartphone, Check } from "lucide-react";
import { usePwaInstall } from "@/hooks/usePwaInstall";
import { IosInstallModal } from "./IosInstallModal";

interface InstallButtonProps {
  className?: string;
  variant?: "drawer" | "header" | "footer" | "banner";
  showIcon?: boolean;
}

export const InstallButton: React.FC<InstallButtonProps> = ({
  className = "",
  variant = "drawer",
  showIcon = true,
}) => {
  const {
    isMounted,
    isInstalled,
    isStandalone,
    isIOS,
    showIosGuide,
    setShowIosGuide,
    triggerInstall,
  } = usePwaInstall();

  if (!isMounted) return null;

  if (isInstalled || isStandalone) {
    if (variant === "drawer") {
      return (
        <div className="w-full flex items-center justify-between p-3 rounded-2xl bg-emerald-900/30 border border-emerald-700/40 text-emerald-300 text-xs font-bold">
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>التطبيق مثبت على جهازك</span>
          </span>
          <span className="text-[10px] bg-emerald-800 text-emerald-200 px-2 py-0.5 rounded-full">
            مثبت
          </span>
        </div>
      );
    }
    return null;
  }

  const renderContent = () => {
    switch (variant) {
      case "drawer":
        return (
          <button
            onClick={triggerInstall}
            className={`w-full flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-emerald-800/90 to-emerald-900/90 border border-emerald-500/40 hover:border-amber-400/80 text-white hover:bg-emerald-800 transition-all shadow-md active:scale-[0.98] ${className}`}
            dir="rtl"
          >
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-amber-500 text-emerald-950 flex-shrink-0">
                {isIOS ? (
                  <Smartphone className="w-4 h-4" />
                ) : (
                  <Download className="w-4 h-4" />
                )}
              </div>
              <div className="text-right">
                <span className="font-extrabold text-sm block text-amber-300">
                  تثبيت التطبيق على الجوال
                </span>
                <span className="text-[11px] text-emerald-200/80 block">
                  تصفح فوري وتواصل مباشر
                </span>
              </div>
            </div>
            <span className="text-[11px] font-bold bg-amber-500/20 text-amber-300 px-2.5 py-1 rounded-full border border-amber-500/30">
              تنزيل
            </span>
          </button>
        );

      case "footer":
        return (
          <button
            onClick={triggerInstall}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-900/80 hover:bg-emerald-800 border border-emerald-700/60 text-amber-300 text-xs font-bold transition-all ${className}`}
          >
            {showIcon && (
              <Download className="w-3.5 h-3.5 text-amber-400" />
            )}
            <span>📱 تنزيل التطبيق على الهاتف</span>
          </button>
        );

      case "header":
        return (
          <button
            onClick={triggerInstall}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-800/80 hover:bg-emerald-700 text-emerald-100 hover:text-white text-xs font-bold border border-emerald-600/40 transition-colors ${className}`}
          >
            {showIcon && <Smartphone className="w-3.5 h-3.5 text-amber-400" />}
            <span>تثبيت التطبيق</span>
          </button>
        );

      default:
        return (
          <button
            onClick={triggerInstall}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-emerald-950 font-black text-xs shadow-md transition-all ${className}`}
          >
            {showIcon && <Download className="w-4 h-4" />}
            <span>تثبيت التطبيق</span>
          </button>
        );
    }
  };

  return (
    <>
      {renderContent()}
      <IosInstallModal
        isOpen={showIosGuide}
        onClose={() => setShowIosGuide(false)}
        isIOS={isIOS}
      />
    </>
  );
};
