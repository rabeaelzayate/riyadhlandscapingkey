import React from "react";
import { ShieldCheck, Compass, Award, MapPin, Sparkles } from "lucide-react";

export const AboutTrust: React.FC = () => {
  const trustPillars = [
    {
      icon: <Compass className="w-6 h-6 text-emerald-700" />,
      title: "تصميم يناسب مساحتك",
      description: "نبتكر أفكار تنسيق مخصصة تتماشى مع شكل المبنى واستخدامات العائلة.",
    },
    {
      icon: <Award className="w-6 h-6 text-emerald-700" />,
      title: "تنفيذ باهتمام بالتفاصيل",
      description: "نحرص على دقة العمل من أساسات شبكات الري وحتى توزيع الإضاءات والنباتات.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-700" />,
      title: "جودة في الخامات المستخدمة",
      description: "نختار ثيل عالي الجودة وعشب صناعي متين يتحمل الأجواء المناخية في الرياض.",
    },
    {
      icon: <MapPin className="w-6 h-6 text-emerald-700" />,
      title: "خدمة متخصصة داخل الرياض",
      description: "فريق فني متواجد بالرياض يضمن سرعة المعاينة وسهولة التنسيق والمتابعة.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Column */}
          <div className="lg:col-span-6 flex flex-col text-right">
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-emerald-100/70 text-emerald-900 text-xs font-bold mb-4">
              <Sparkles className="w-4 h-4 text-emerald-700" />
              <span>من نحن — زهرة الورود</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 leading-tight mb-6">
              نحوّل المساحات إلى حدائق <span className="text-emerald-700">تنبض بالحياة</span>
            </h2>

            <p className="text-base text-gray-700 leading-relaxed mb-4">
              شركة <strong className="text-emerald-900">زهرة الورود لتنسيق الحدائق بالرياض</strong> هي وجهتك المعتمدة لتحويل الأحواش والمساحات الخارجية لفلل ومنازل واستراحات الرياض إلى حدائق خضراء مميزة تجمع بين الجمال والوظيفة العملية.
            </p>

            <p className="text-base text-gray-600 leading-relaxed mb-8">
              نحن نؤمن بأن الحديقة ليست مجرد ثيل ونباتات، بل هي متنفس يعكس أسلوب حياتك ويوفر لك ولأسرتك جلسة مريحة. لذا نقدم خدمات متكاملة تشمل التخطيط، تركيب العشب الطبيعي والصناعي، شبكات الري المتطورة، والنوافير والشلالات بأسلوب مدروس وشفاف.
            </p>

            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200/60 text-emerald-900 text-sm font-medium flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-700 shrink-0" />
              <span><strong>رؤيتنا:</strong> تقديم خدمات تنسيق وتصميم حدائق بجودة عالية وأسعار واضحة تلبي تطلعات عملائنا في مختلف أحياء الرياض.</span>
            </div>
          </div>

          {/* Pillars Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {trustPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100/80 flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-emerald-950 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
