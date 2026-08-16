import React from "react";
import Image from "next/image";
import { Trophy, CheckCircle2, MessageCircle } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export const SportsTurfBanner: React.FC = () => {
  return (
    <section id="sports-turf" className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-emerald-950 text-white">
          <div className="relative h-80 sm:h-96 w-full">
            {/* Visual Image */}
            <Image
              src="/images/services/artificial-turf.jpg"
              alt="توريد وتركيب عشب الملاعب والمساحات الرياضية بالرياض - زهرة الورود"
              fill
              sizes="100vw"
              className="object-cover opacity-40"
            />
            
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-transparent to-transparent" />

            {/* Content Container */}
            <div className="absolute inset-0 p-6 sm:p-12 flex flex-col justify-end text-right max-w-3xl">
              
              <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold mb-3 backdrop-blur-sm">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>ملاعب ومساحات رياضية</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight mb-3">
                توريد وتركيب عشب الملاعب والمساحات الرياضية بالرياض
              </h2>

              <p className="text-xs sm:text-base text-emerald-100/90 leading-relaxed mb-6">
                عشب صناعي مخصص للملاعب والمساحات الترفيهية للأطفال بمواصفات معتمدة، مقاوم للصدمات والاستخدام المكثف والأجواء المناخية.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <WhatsAppButton
                  variant="gold"
                  size="md"
                  message="مرحبًا، أرغب في الاستفسار عن توريد وتركيب عشب الملاعب بالمساحات الرياضية بالرياض."
                >
                  اطلب عرض سعر للملاعب
                </WhatsAppButton>

                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>معايير أمان وجودة ممتازة</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
