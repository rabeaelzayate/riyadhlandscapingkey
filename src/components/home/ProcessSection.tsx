import React from "react";
import { MessageSquare, MapPin, FileText, Wrench, CheckCircle2 } from "lucide-react";
import { processData } from "@/data/process";
import { company } from "@/data/company";

export const ProcessSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "MessageSquare":
        return <MessageSquare className="w-5 h-5 text-emerald-700" />;
      case "MapPin":
        return <MapPin className="w-5 h-5 text-emerald-700" />;
      case "FileText":
        return <FileText className="w-5 h-5 text-emerald-700" />;
      case "Wrench":
        return <Wrench className="w-5 h-5 text-emerald-700" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-5 h-5 text-emerald-700" />;
      default:
        return <MessageSquare className="w-5 h-5 text-emerald-700" />;
    }
  };

  return (
    <section id="process" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
            خطوات التنفيذ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 mt-4 mb-4">
            كيف نعمل في مؤسسة {company.nameAr}؟
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            مسار عمل منظم وواضح يضمن تحويل رؤيتك إلى واقع ملموس في 5 خطوات رئيسية.
          </p>
        </div>

        {/* 5 Steps Responsive Timeline */}
        <div className="relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-emerald-200 -translate-y-6 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {processData.map((step, idx) => (
              <div
                key={step.stepNumber}
                className="relative bg-slate-50 border border-slate-200/80 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-emerald-800/30 group-hover:text-emerald-700 transition-colors">
                      {step.stepNumber}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                      {getIcon(step.iconName)}
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-base font-bold text-emerald-950 mb-2">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="mt-4 pt-3 border-t border-gray-200/60 text-xs font-semibold text-emerald-700 flex items-center gap-1">
                  <span>الخطوة {idx + 1} من 5</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
