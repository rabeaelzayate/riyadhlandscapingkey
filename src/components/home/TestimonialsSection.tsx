import React from "react";
import { Quote, MessageCircle, Star } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full">
            آراء انطباعات العملاء
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 mt-4 mb-4">
            ماذا يقول عملاؤنا؟
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            نعتز برضا عملائنا في الرياض ونسعى دائماً لتقديم تجربة تليق بتطلعاتهم.
          </p>
        </div>

        {/* 3 Structured Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/80 flex flex-col justify-between relative"
            >
              <div>
                {/* Quote Icon */}
                <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-700 flex items-center justify-center mb-4">
                  <Quote className="w-5 h-5" />
                </div>

                {/* Rating Visual */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Testimonial Quote Text */}
                <p className="text-sm text-gray-700 leading-relaxed italic mb-6">
                  {item.quote}
                </p>
              </div>

              {/* Author Footer Info */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-emerald-950">
                    {item.authorName}
                  </div>
                  <div className="text-xs text-gray-500">
                    {item.neighborhood}
                  </div>
                </div>

                <span className="text-xs font-medium text-emerald-700 px-2.5 py-1 rounded-md bg-emerald-50">
                  {item.serviceType}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Notice for Dev / Client onboarding */}
        <div className="mt-8 text-center text-xs text-gray-500">
          * هذه الخانة مجهزة لاستيعاب تقييمات العملاء الموثقة فور تجميعها عبر جوجل بيزنس أو خدمة العملاء.
        </div>

      </div>
    </section>
  );
};
