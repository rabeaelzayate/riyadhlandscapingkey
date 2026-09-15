import React from "react";
import Link from "next/link";
import { Trees, Layers, Flower2, Droplets, Waves, Scissors, ArrowLeft, Eye } from "lucide-react";
import { quickServicesData } from "@/data/services";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export const QuickServices: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Trees":
        return <Trees className="w-6 h-6 text-emerald-700" />;
      case "Layers":
        return <Layers className="w-6 h-6 text-emerald-700" />;
      case "Flower2":
        return <Flower2 className="w-6 h-6 text-emerald-700" />;
      case "Droplets":
        return <Droplets className="w-6 h-6 text-emerald-700" />;
      case "Waves":
        return <Waves className="w-6 h-6 text-emerald-700" />;
      case "Scissors":
        return <Scissors className="w-6 h-6 text-emerald-700" />;
      default:
        return <Trees className="w-6 h-6 text-emerald-700" />;
    }
  };

  return (
    <section id="quick-services" className="py-16 md:py-20 bg-emerald-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full">
            خدمات متكاملة
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-emerald-950 mt-3 mb-4">
            خدماتنا السريعة لتنسيق حدائق الرياض
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            نوفر حلولاً شاملة لتصميم وتنسيق كافة المساحات الخارجية والفلل بأعلى معايير الجودة.
          </p>
        </div>

        {/* 6 Grid Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickServicesData.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl p-6 shadow-sm border border-emerald-900/5 hover:border-emerald-500/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon Badge */}
                <div className="w-12 h-12 rounded-xl bg-emerald-100/80 group-hover:bg-emerald-700 group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-5">
                  {getIcon(item.iconName)}
                </div>

                {/* Service Name */}
                <h3 className="text-lg font-bold text-emerald-950 mb-2 group-hover:text-emerald-800 transition-colors">
                  <Link href={`/services/${item.id}/`} className="hover:underline">
                    {item.title}
                  </Link>
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-gray-100 flex items-center gap-2">
                <Link
                  href={`/services/${item.id}/`}
                  className="inline-flex items-center justify-center gap-1 py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 text-xs font-bold border border-emerald-200/60 transition-colors whitespace-nowrap"
                >
                  <Eye className="w-3.5 h-3.5 text-emerald-700" />
                  <span>التفاصيل</span>
                </Link>

                <WhatsAppButton
                  variant="outline"
                  size="sm"
                  message={item.whatsappMessage}
                  className="flex-1 justify-between border-gray-200 text-gray-700 hover:border-emerald-600 hover:text-emerald-800"
                >
                  <span>استفسر الآن</span>
                  <ArrowLeft className="w-4 h-4 text-emerald-600 group-hover:-translate-x-1 transition-transform" />
                </WhatsAppButton>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
