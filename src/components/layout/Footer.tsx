import React from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock, Navigation } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { company } from "@/data/company";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { InstallButton } from "@/components/pwa/InstallButton";

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: "الرئيسية", href: "#hero" },
    { name: "خدماتنا", href: "#services" },
    { name: "أعمالنا", href: "#projects" },
    { name: "آلية العمل", href: "#process" },
    { name: "لماذا نحن", href: "#why-us" },
    { name: "من نحن", href: "#about" },
    { name: "الأسئلة الشائعة", href: "#faq" },
    { name: "تواصل معنا", href: "#contact" },
  ];

  const serviceLinks = [
    { name: "تنسيق الحدائق بالرياض", href: "#services" },
    { name: "العشب الصناعي عالي الجودة", href: "#services" },
    { name: "توريد الثيل الطبيعي", href: "#services" },
    { name: "شبكات الري الأوتوماتيكية", href: "#services" },
    { name: "النوافير والشلالات الجدارية", href: "#services" },
    { name: "زراعة الأشجار والنخيل", href: "#services" },
    { name: "صيانة وتقليم الحدائق", href: "#services" },
  ];

  return (
    <footer className="bg-emerald-950 text-white pt-16 pb-8 border-t border-emerald-900 relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 bg-leaf-pattern opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/80">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-4 flex flex-col">
            <Logo variant="light" className="mb-4" />
            <p className="text-sm text-emerald-200/80 leading-relaxed mb-6">
              شركة <strong className="text-white">زهرة الورود لتنسيق وصيانة الحدائق بالرياض</strong>. نقدم حلولاً متكاملة لتصميم وتنسيق الأحواش، الفلل، الاستراحات، شبكات الري، والعشب الطبيعي والصناعي.
            </p>
            
            <div className="space-y-2 text-xs text-amber-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{company.workingHours}</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-200">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{company.address}</span>
              </div>
            </div>

            <div className="mt-5">
              <InstallButton variant="footer" />
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-emerald-800/80 pb-2">
              روابط الموقع
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-emerald-200/70 hover:text-amber-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-emerald-800/80 pb-2">
              خدماتنا الرئيسية
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-emerald-200/70 hover:text-amber-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Google Maps Location Preview Column */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-emerald-800/80 pb-2">
              موقعنا في الرياض
            </h3>
            
            {/* Map Card Placeholder matching reference screenshot */}
            <div className="relative rounded-2xl overflow-hidden border border-emerald-700/60 bg-emerald-900/60 p-3 flex flex-col justify-between h-40">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>الرياض — تغطية كافة الأحياء</span>
              </div>
              <p className="text-[11px] text-emerald-200/80 leading-relaxed">
                نستقبل طلبات المعاينة المباشرة في كافة المخططات والأحياء السكنية بشمال وشرق وغرب الرياض.
              </p>

              <a
                href={getWhatsAppUrl("مرحبًا، أرغب في تحديد موعد معاينة لموقعي بالرياض.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold shadow-md transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>اطلب معاينة لموقعك</span>
              </a>
            </div>
          </div>

        </div>

        {/* Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300/60">
          <div>
            © 2026 زهرة الورود لتنسيق الحدائق بالرياض. جميع الحقوق محفوظة.
          </div>

          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-white transition-colors">
              سياسة الخصوصية
            </a>
            <a href="#hero" className="hover:text-white transition-colors">
              الشروط والأحكام
            </a>
          </div>
        </div>

        {/* Developer Credit */}
        <div className="mt-6 pt-5 border-t border-emerald-900/60 text-center" dir="ltr">
          <p className="text-[11px] sm:text-xs text-emerald-300/60 tracking-wide font-medium">
            Designed &amp; Developed by <span className="text-emerald-200/80 font-semibold">Rabea Shaban</span>
          </p>
          <div className="mt-1">
            <a
              href="https://wa.me/201156807072"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تواصل مع ربيع شعبان عبر واتساب"
              className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-mono font-bold text-amber-400/80 hover:text-amber-300 transition-colors tracking-wider group"
            >
              <MessageCircle className="w-3 h-3 text-[#25D366] group-hover:scale-110 transition-transform" />
              <span>01156807072</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
