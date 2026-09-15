import React from "react";
import Image from "next/image";
import {
  Clock,
  Award,
  PenTool,
  Wallet,
  Cpu,
  Gem,
  Headphones,
} from "lucide-react";
import { company } from "@/data/company";

interface FeatureCardProps {
  title: string;
  englishTitle: string;
  icon: React.ReactNode;
  fullWidth?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  englishTitle,
  icon,
  fullWidth = false,
}) => {
  return (
    <div
      className={`group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#fdfbf7] hover:bg-white border border-amber-900/10 shadow-xs hover:shadow-md transition-all duration-300 ${
        fullWidth ? "sm:col-span-2" : ""
      }`}
    >
      <div className="text-right">
        <h3 className="text-sm font-bold text-emerald-950 group-hover:text-emerald-700 transition-colors">
          {title}
        </h3>
        <span className="text-[10px] font-semibold text-amber-700/80 block uppercase tracking-wider mt-0.5">
          {englishTitle}
        </span>
      </div>

      <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center shadow-xs flex-shrink-0 group-hover:bg-emerald-700 group-hover:scale-105 transition-all">
        {icon}
      </div>
    </div>
  );
};

export const WhyUs: React.FC = () => {
  const features = [
    {
      title: "التسليم في الوقت المحدد",
      englishTitle: "Timely Delivery",
      icon: <Clock className="w-5 h-5" />,
    },
    {
      title: "فريق ذو خبرة عالية",
      englishTitle: "Well Experienced Team",
      icon: <Award className="w-5 h-5" />,
    },
    {
      title: "تصاميم مخصصة لك",
      englishTitle: "Tailor-made Design",
      icon: <PenTool className="w-5 h-5" />,
    },
    {
      title: "أسعار تنافسية",
      englishTitle: "Competitive Price",
      icon: <Wallet className="w-5 h-5" />,
    },
    {
      title: "تقنيات حديثة",
      englishTitle: "Modern Technics",
      icon: <Cpu className="w-5 h-5" />,
    },
    {
      title: "جودة فائقة",
      englishTitle: "Superior Quality",
      icon: <Gem className="w-5 h-5" />,
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white border-b border-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Title & Feature Grid */}
          <div className="lg:col-span-7 flex flex-col text-right">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-1.5 self-start px-3.5 py-1 rounded-full bg-amber-100/80 border border-amber-300/60 text-amber-900 text-xs font-bold mb-3">
              <span>• لماذا نحن</span>
            </div>

            {/* H2 Title */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 tracking-tight mb-1">
              لماذا تختار مؤسسة {company.nameAr}؟
            </h2>

            {/* English Subtitle */}
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-700/90 mb-8 border-b border-amber-200/50 pb-3 inline-block self-start">
              WHY CHOOSE US
            </p>

            {/* 7 Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3">
              {features.map((item, idx) => (
                <FeatureCard
                  key={idx}
                  title={item.title}
                  englishTitle={item.englishTitle}
                  icon={item.icon}
                />
              ))}

              {/* Card 7: Support 24/7 Full Width */}
              <FeatureCard
                title={`دعم 24/7 على ${company.phone || "الواتساب المباشر"}`}
                englishTitle="Support 24/7"
                icon={<Headphones className="w-5 h-5" />}
                fullWidth
              />
            </div>

          </div>

          {/* Right Column: Large Luxury Villa Fountain Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-emerald-900/10 group">
              <div className="relative aspect-[4/5] bg-emerald-950">
                <Image
                  src="/images/why-us-fountain.jpg"
                  alt={`تنفيذ وتصميم حدائق وشلالات الفلل - ${company.nameAr}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent" />
              </div>

              {/* Floating Green Badge Bottom Left */}
              <div className="absolute bottom-5 right-5 p-4 rounded-2xl bg-emerald-900/95 backdrop-blur-md border border-emerald-700/80 text-white shadow-xl flex items-center gap-3">
                <div className="text-2xl sm:text-3xl font-black text-amber-400">
                  500+
                </div>
                <div className="text-xs font-bold leading-snug border-r border-emerald-700 pr-3 text-emerald-100">
                  مشروع منجز <br /> بالرياض
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
