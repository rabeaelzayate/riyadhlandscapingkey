import React from "react";
import { Phone, MessageCircle, ArrowLeft } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { company } from "@/data/company";

export const FinalCta: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 text-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 bg-leaf-pattern opacity-10 pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <span className="text-xs font-extrabold uppercase tracking-wider text-amber-300 bg-amber-400/10 border border-amber-400/20 px-3.5 py-1 rounded-full inline-block mb-6">
          تواصل ميكانيكي سريع
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
          جاهز تخلي حديقتك <span className="text-amber-300">أجمل؟</span>
        </h2>

        <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl mx-auto mb-10">
          تواصل مع زهرة الورود اليوم واحصل على الحل المناسب والمعاينة لمساحة فيلتك أو حديقتك بالرياض.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <WhatsAppButton
            size="lg"
            variant="gold"
            message="مرحبًا، أرغب في طلب معاينة مجانية لموقعي بالرياض لدى زهرة الورود."
          >
            اطلب معاينة مجانية
          </WhatsAppButton>

          <WhatsAppButton
            size="lg"
            variant="primary"
            message="مرحبًا، أرغب في الاستفسار عن خدمات تنسيق الحدائق بالرياض."
          >
            تواصل عبر واتساب
          </WhatsAppButton>

          {company.phone && (
            <a
              href={`tel:${company.phone}`}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border-2 border-emerald-400 text-emerald-100 font-bold hover:bg-emerald-800/60 transition-colors"
            >
              <Phone className="w-5 h-5 text-amber-400" />
              <span>اتصل بنا</span>
            </a>
          )}
        </div>

      </div>
    </section>
  );
};
