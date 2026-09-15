"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, Share, PlusSquare, Smartphone, CheckCircle2 } from "lucide-react";
import { company } from "@/data/company";

interface IosInstallModalProps {
  isOpen: boolean;
  onClose: () => void;
  isIOS?: boolean;
}

export const IosInstallModal: React.FC<IosInstallModalProps> = ({
  isOpen,
  onClose,
  isIOS = true,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[999999] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-gradient-to-b from-emerald-950 to-[#062c19] border border-emerald-500/30 rounded-3xl p-6 text-white shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        dir="rtl"
      >
        {/* Background decorative glow */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-200 hover:text-white transition-colors"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with App Logo */}
        <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-white/10">
          <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-emerald-900 border border-emerald-400/40 p-1 flex-shrink-0 shadow-lg">
            <Image
              src="/images/logo-transparent.png"
              alt={`تطبيق ${company.nameAr}`}
              width={56}
              height={56}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-bold mb-1 border border-amber-500/30">
              <CheckCircle2 className="w-3 h-3" />
              <span>تطبيق الجوال الرسمي</span>
            </div>
            <h3 className="text-lg font-black text-white">
              تثبيت تطبيق {company.nameAr}
            </h3>
          </div>
        </div>

        {/* Instructions */}
        <div className="space-y-3.5 mb-6 text-sm">
          <p className="text-emerald-100/90 text-xs leading-relaxed">
            {isIOS
              ? "لتثبيت التطبيق على جهازك بنظام iOS (آيفون أو آيباد) والتمتع بتصفح سريع بدون شريط المتصفح:"
              : "لتثبيت التطبيق على هاتفك والوصول إليه بضغطة زر من الشاشة الرئيسية:"}
          </p>

          {/* Step 1 */}
          <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/30 transition-colors">
            <div className="w-8 h-8 rounded-xl bg-emerald-600/60 text-white flex items-center justify-center flex-shrink-0 font-black text-sm">
              1
            </div>
            <div className="flex-1">
              <p className="font-bold text-white text-xs mb-0.5">
                اضغط على زر المشاركة
              </p>
              <p className="text-emerald-200/80 text-[11px] flex items-center gap-1.5">
                انقر على أيقونة المشاركة{" "}
                <span className="inline-flex items-center justify-center p-1 rounded bg-white/20 text-white">
                  <Share className="w-3.5 h-3.5" />
                </span>{" "}
                في شريط المتصفح (أسفل أو أعلى الشاشة).
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/30 transition-colors">
            <div className="w-8 h-8 rounded-xl bg-emerald-600/60 text-white flex items-center justify-center flex-shrink-0 font-black text-sm">
              2
            </div>
            <div className="flex-1">
              <p className="font-bold text-white text-xs mb-0.5">
                اختر &quot;إضافة إلى الشاشة الرئيسية&quot;
              </p>
              <p className="text-emerald-200/80 text-[11px] flex items-center gap-1.5">
                مرر القائمة لأسفل ثم اضغط على{" "}
                <span className="inline-flex items-center justify-center p-1 rounded bg-white/20 text-white">
                  <PlusSquare className="w-3.5 h-3.5" />
                </span>{" "}
                <strong>إضافة إلى الشاشة الرئيسية</strong>.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/30 transition-colors">
            <div className="w-8 h-8 rounded-xl bg-amber-500 text-emerald-950 flex items-center justify-center flex-shrink-0 font-black text-sm">
              3
            </div>
            <div className="flex-1">
              <p className="font-bold text-white text-xs mb-0.5">
                تأكيد الإضافة
              </p>
              <p className="text-emerald-200/80 text-[11px]">
                انقر على زر <strong>&quot;إضافة&quot; (Add)</strong> في أعلى يمين الشاشة ليظهر التطبيق مباشرة على شاشتك الرئيسية!
              </p>
            </div>
          </div>
        </div>

        {/* Benefits list */}
        <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-emerald-900/40 border border-emerald-700/40 mb-5 text-[11px] text-emerald-200">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
            <span>تصفح فوري وسريع</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
            <span>يعمل بدون إنترنت</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
            <span>حجم خفيف جداً</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
            <span>تواصل بلمسة واحدة</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={onClose}
          className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-emerald-950 font-black text-sm shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <Smartphone className="w-4 h-4" />
          <span>فهمت، شكراً لك</span>
        </button>
      </div>
    </div>
  );
};
