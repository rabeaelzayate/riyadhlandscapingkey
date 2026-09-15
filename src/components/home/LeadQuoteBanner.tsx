"use client";

import React, { useState } from "react";
import { MessageCircle, Calculator, Send } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const LeadQuoteBanner: React.FC = () => {
  const [service, setService] = useState("تنسيق حدائق");
  const [areaSize, setAreaSize] = useState("50 - 100 م²");
  const [district, setDistrict] = useState("حي النرجس");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `مرحبًا مفتاح التنسيق، أرغب في الحصول على عرض سعر تقديري:
- الخدمة: ${service}
- المساحة التقريبية: ${areaSize}
- الحي / المنطقة: ${district}`;
    window.open(getWhatsAppUrl(msg), "_blank");
  };

  return (
    <div className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 md:-mt-24 mb-16">
      <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-emerald-500/30 backdrop-blur-xl relative overflow-hidden">
        
        {/* Decorative Leaf Background & Glow */}
        <div className="absolute inset-0 bg-leaf-pattern opacity-10 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Text Title Side */}
          <div className="lg:col-span-5 text-right">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold mb-3 border border-amber-400/30">
              <Calculator className="w-3.5 h-3.5" />
              <span>حساب تكلفة سريع</span>
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug mb-3">
              احصل على سعر تقديري فوراً لمعاينة حديقتك
            </h3>

            <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
              اختر تفاصيل المساحة والخدمة المطلوبة ليصلك عرض سعر مبدئي واستشارة فنية عبر واتساب خلال دقائق.
            </p>
          </div>

          {/* Form Side */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
            
            {/* Service Select */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-emerald-200">نوع الخدمة</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="bg-emerald-900/80 text-white border border-emerald-700/80 rounded-xl px-3 py-2.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <option value="تنسيق حدائق بالرياض">تنسيق حدائق بالرياض</option>
                <option value="تركيب عشب صناعي">تركيب عشب صناعي</option>
                <option value="توريد ثيل طبيعي">توريد ثيل طبيعي</option>
                <option value="تركيب شبكات ري">تركيب شبكات ري</option>
                <option value="شلالات ونوافير">شلالات ونوافير</option>
                <option value="زراعة أشجار ونخيل">زراعة أشجار ونخيل</option>
              </select>
            </div>

            {/* Area Size Select */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-emerald-200">المساحة بالتقريب</label>
              <select
                value={areaSize}
                onChange={(e) => setAreaSize(e.target.value)}
                className="bg-emerald-900/80 text-white border border-emerald-700/80 rounded-xl px-3 py-2.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <option value="أقل من 50 م²">أقل من 50 م²</option>
                <option value="50 - 100 م²">50 - 100 م²</option>
                <option value="100 - 250 م²">100 - 250 م²</option>
                <option value="أكثر من 250 م²">أكثر من 250 م²</option>
              </select>
            </div>

            {/* District Input/Select */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-emerald-200">الحي في الرياض</label>
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="bg-emerald-900/80 text-white border border-emerald-700/80 rounded-xl px-3 py-2.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <option value="حي النرجس">حي النرجس</option>
                <option value="حي الياسمين">حي الياسمين</option>
                <option value="حي الملقا">حي الملقا</option>
                <option value="حي حطين">حي حطين</option>
                <option value="حي الصحافة">حي الصحافة</option>
                <option value="حي العارض">حي العارض</option>
                <option value="حي العقيق">حي العقيق</option>
                <option value="حي الرحمانية">حي الرحمانية</option>
                <option value="حي قرطبة وغرناطة">حي قرطبة وغرناطة</option>
                <option value="حي آخر بالرياض">حي آخر بالرياض</option>
              </select>
            </div>

            {/* Submit Button spanning full width on bottom */}
            <div className="sm:col-span-3 mt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-black py-3 px-6 rounded-xl text-sm shadow-xl transition-all active:scale-[0.98]"
              >
                <MessageCircle className="w-4.5 h-4.5 text-emerald-950" />
                <span>احصل على السعر التقديري الآن عبر واتساب</span>
              </button>
            </div>

          </form>

        </div>

      </div>
    </div>
  );
};
