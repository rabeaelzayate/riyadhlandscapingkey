import React from "react";
import { MapPin, Navigation } from "lucide-react";
import { riyadhAreas, areasSummaryText } from "@/data/areas";

export const ServiceAreas: React.FC = () => {
  return (
    <section id="service-areas" className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
            التغطية الجغرافية
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 mt-4 mb-4">
            نخدم أحياء الرياض
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            {areasSummaryText}
          </p>
        </div>

        {/* Areas Badges Grid */}
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto mb-8">
          {riyadhAreas.map((area, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-emerald-950 text-sm font-semibold hover:border-emerald-500/40 hover:bg-emerald-50/50 transition-colors"
            >
              <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>حي {area.name}</span>
            </div>
          ))}
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-800 text-white text-sm font-bold shadow-sm">
            <Navigation className="w-4 h-4 text-amber-400" />
            <span>وغيرها من أحياء الرياض</span>
          </div>
        </div>

        {/* SEO Note Container */}
        <div className="max-w-2xl mx-auto text-center p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/50 text-xs text-emerald-900 flex items-center justify-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
          <span>يسعدنا استقبال طلبات المعاينة الفنية المباشرة في كافة المخططات والأحياء السكنية بمدينة الرياض.</span>
        </div>

      </div>
    </section>
  );
};
