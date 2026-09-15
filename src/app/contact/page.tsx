"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Send,
  HelpCircle,
  ChevronDown,
  Trees,
  Layers,
  Droplets,
  Palmtree,
  Waves,
  ShieldCheck,
  Compass,
  ArrowLeft,
  Home,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceBanner } from "@/components/services/ServiceBanner";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WhatsAppFloating } from "@/components/ui/WhatsAppFloating";
import { PhoneFloating } from "@/components/ui/PhoneFloating";
import { company } from "@/data/company";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { contactFaqs } from "@/data/contactFaqs";

export default function ContactPage() {
  // Form State
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [district, setDistrict] = useState("");
  const [placeType, setPlaceType] = useState("منزل / فيلا");
  const [service, setService] = useState("تنسيق حدائق شامل");
  const [details, setDetails] = useState("");

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMessage = `مرحبًا ${company.nameAr}، أود طلب معاينة واستشارة لتنسيق الحديقة:
• الاسم: ${name || "غير محدد"}
• الجوال: ${phone || "غير محدد"}
• الحي بالرياض: ${district || "غير محدد"}
• نوع المكان: ${placeType}
• الخدمة المطلوبة: ${service}
• تفاصيل إضافية: ${details || "لا توجد تفاصيل إضافية"}`;

    const url = getWhatsAppUrl(formattedMessage);
    window.open(url, "_blank");
  };

  const faqItems = contactFaqs;

  const neighborhoodList = [
    "النرجس",
    "الياسمين",
    "الملقا",
    "حطين",
    "الصحافة",
    "العارض",
    "العقيق",
    "الرحمانية",
    "قرطبة",
    "غرناطة",
    "الروضة",
    "وغيرها من أحياء الرياض",
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-[#fdfbf7] text-gray-900 selection:bg-emerald-200 selection:text-emerald-950">
      <Header />

      <main className="flex-grow pt-20 pb-20">
        
        {/* 1. Hero Header Banner */}
        <ServiceBanner
          title={`تواصل مع ${company.nameAr} ${company.subtitleAr}`}
          subtitle="جاهز تبدأ في تنسيق حديقتك؟ فريقنا يسعد باستقبال استفساراتك وتحديد موعد المعاينة الميدانية"
          image="/images/services/landscaping.jpg"
          sideImage="/images/contact-person-phone-transparent.png"
          isAnimatedChat={true}
          breadcrumbs={[
            { label: "الرئيسية", href: "/" },
            { label: "تواصل معنا" },
          ]}
        />

        {/* Quick Intro CTA Card */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
          <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-10 border border-emerald-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-right">
              <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
                خدمة عملاء {company.nameAr}
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                جاهز تبدأ في تنسيق حديقتك؟
              </h1>
              <p className="text-xs sm:text-sm text-emerald-100/90 max-w-2xl leading-relaxed">
                سواء كنت تبحث عن تنسيق حدائق بالسعودية، تصميم حديقة منزلية، تركيب عشب طبيعي أو صناعي، تنفيذ شبكة ري، زراعة أشجار ونخيل، أو تركيب نافورة وشلال، فريق {company.nameAr} جاهز للاستماع إلى احتياجك ومساعدتك في اختيار الحل المناسب لمساحتك.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <WhatsAppButton variant="gold" size="md">
                تواصل معنا عبر واتساب
              </WhatsAppButton>

              {company.phone && (
                <a
                  href={`tel:${company.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-bold backdrop-blur-md transition-all active:scale-95"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>اتصل بنا الآن</span>
                </a>
              )}
            </div>
          </div>
        </section>

        {/* 2. لماذا تتواصل معنا؟ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-100/80 border border-emerald-300/60 text-emerald-900 text-xs font-bold mb-2">
              استشارات ومعاينات
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950">
              خلّنا نبدأ من فكرتك
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              كل حديقة مختلفة، ولذلك نحب أن نعرف احتياجك أولًا لنقدم لك الخيارات الأنسب.
            </p>
            <div className="w-12 h-0.5 bg-amber-500 mx-auto rounded-full mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-right">
            
            <div className="bg-white p-7 rounded-3xl border border-gray-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Trees className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-emerald-950">لديك حديقة وتريد إعادة تنسيقها؟</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                شاركنا صور المساحة وما تريد تغييره، وسنساعدك في تحديد الحل المناسب لتطويرها.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-gray-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Home className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-emerald-950">لديك منزل أو فيلا جديدة؟</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                يمكنك التواصل معنا لتنسيق وتصميم المساحة الخارجية والارتدادات من البداية.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-gray-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-emerald-950">تريد تركيب عشب؟</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                استفسر عن خيارات العشب الطبيعي والصناعي وااحتياجات التجهيز والتصريف لمساحتك.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-gray-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-emerald-950">تحتاج شبكة ري؟</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                تواصل معنا لمعرفة الحلول الأوتوماتيكية المناسبة لتوزيع المياه داخل الحديقة.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-gray-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Palmtree className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-emerald-950">تريد إضافة أشجار ونباتات؟</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                شاركنا المساحة والتصميم الذي تفضله ونحن نختار الأشجار المناسبة لمناخ الرياض.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-gray-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Waves className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-emerald-950">تريد إضافة نافورة أو شلال؟</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                يمكننا مناقشة إمكانية دمج العناصر المائية الجدارية والمودرن ضمن تصميم الحديقة.
              </p>
            </div>

          </div>
        </section>

        {/* 3. معلومات التواصل */}
        <section className="bg-emerald-950 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30 mb-2">
                وسائل الاتصال المباشرة
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                نحن بانتظارك
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-right">
              
              {/* Phone Card */}
              <div className="bg-emerald-900/60 p-6 rounded-3xl border border-emerald-800 space-y-4 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">الهاتف</h3>
                  <p className="text-xs text-emerald-200/80 leading-relaxed">
                    للاستفسارات والحصول على معلومات حول خدماتنا.
                  </p>
                </div>
                {company.phone ? (
                  <a
                    href={`tel:${company.phone}`}
                    className="inline-flex items-center justify-center gap-2 p-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold text-xs shadow-md transition-all"
                  >
                    <span>اتصل الآن ({company.phone})</span>
                  </a>
                ) : (
                  <div className="p-3 rounded-xl bg-emerald-950/80 text-emerald-300 text-xs font-bold text-center border border-emerald-800">
                    متاح عبر الواتساب والموقع
                  </div>
                )}
              </div>

              {/* WhatsApp Card */}
              <div className="bg-emerald-900/60 p-6 rounded-3xl border border-emerald-800 space-y-4 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mb-3">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">واتساب</h3>
                  <p className="text-xs text-emerald-200/80 leading-relaxed">
                    أرسل لنا تفاصيل المساحة أو صور الحديقة وسنتواصل معك فوراً.
                  </p>
                </div>
                <a
                  href={getWhatsAppUrl("مرحبًا، أود التواصل لمعرفة تفاصيل خدمات تنسيق الحدائق بالرياض.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 p-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>تواصل عبر واتساب</span>
                </a>
              </div>

              {/* Email Card */}
              <div className="bg-emerald-900/60 p-6 rounded-3xl border border-emerald-800 space-y-4 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">البريد الإلكتروني</h3>
                  <p className="text-xs text-emerald-200/80 leading-relaxed">
                    للاستفسارات والمراسلات الرسمية.
                  </p>
                </div>
                {company.email ? (
                  <a
                    href={`mailto:${company.email}`}
                    className="inline-flex items-center justify-center gap-2 p-3 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs transition-all"
                  >
                    <span>راسلنا عبر البريد</span>
                  </a>
                ) : (
                  <div className="p-3 rounded-xl bg-emerald-950/80 text-emerald-300 text-xs font-bold text-center border border-emerald-800">
                    متاح عبر نموذج الواتساب
                  </div>
                )}
              </div>

              {/* Location Card */}
              <div className="bg-emerald-900/60 p-6 rounded-3xl border border-emerald-800 space-y-4 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">الموقع</h3>
                  <p className="text-xs text-emerald-200/80 leading-relaxed">
                    الرياض، المملكة العربية السعودية. نقدم خدماتنا في مختلف أحياء ومناطق الرياض.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-emerald-950/80 text-amber-300 text-xs font-bold text-center border border-emerald-800 flex items-center justify-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>معاينات ميدانية بكافة الأحياء</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4 & 5. أرسل لنا تفاصيل مشروعك + تواصل سريع عبر واتساب */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Form Side */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-gray-200/80 shadow-md text-right space-y-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold mb-2">
                  نموذج الطلب المباشر
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-emerald-950">
                  أرسل لنا تفاصيل مشروعك
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  أدخل بياناتك وسيتم توجيه طلبك مباشرة عبر الواتساب دون تعقيد.
                </p>
              </div>

              <form onSubmit={handleSubmitForm} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-800 block">الاسم</label>
                    <input
                      type="text"
                      placeholder="اكتب اسمك الكريـم"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-800 block">رقم الجوال</label>
                    <input
                      type="tel"
                      placeholder="05xxxxxxxx"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white text-left dir-ltr"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* District */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-800 block">الحي بالرياض</label>
                    <input
                      type="text"
                      placeholder="مثال: النرجس، الملقا، حطين..."
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                    />
                  </div>

                  {/* Place Type */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-800 block">نوع المكان</label>
                    <select
                      value={placeType}
                      onChange={(e) => setPlaceType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                    >
                      <option value="منزل / فيلا">منزل / فيلا</option>
                      <option value="استراحة">استراحة</option>
                      <option value="سطح">سطح منزل</option>
                      <option value="مساحة تجارية / شركة">مساحة تجارية / شركة</option>
                    </select>
                  </div>
                </div>

                {/* Service Requested */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-800 block">الخدمة المطلوبة</label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  >
                    <option value="تنسيق حدائق شامل">تنسيق حدائق شامل وتصميم</option>
                    <option value="عشب صناعي">تركيب عشب صناعي</option>
                    <option value="عشب طبيعي">توريد وتركيب ثيل طبيعي</option>
                    <option value="شبكات ري">تركيب شبكة ري أوتوماتيكية</option>
                    <option value="زراعة أشجار ونخيل">زراعة أشجار ونخيل</option>
                    <option value="شلالات ونوافير">تنفيذ شلالات ونوافير جدارية</option>
                    <option value="صيانة حدائق">صيانة وتقليم حدائق</option>
                  </select>
                </div>

                {/* Details */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-800 block">تفاصيل إضافية</label>
                  <textarea
                    rows={4}
                    placeholder="اكتب المساحة التقريبية أو أي أفكار تفضلها..."
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 p-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-sm shadow-lg transition-all active:scale-98 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>إرسال الطلب عبر واتساب</span>
                </button>

              </form>
            </div>

            {/* 5. Direct Quick WhatsApp Card Side */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 text-white p-8 rounded-3xl border border-emerald-800 shadow-2xl text-right space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
                  أسهل طريقة للبدء
                </span>
                <h3 className="text-2xl font-extrabold text-white">
                  تواصل سريع عبر واتساب
                </h3>
                <p className="text-xs sm:text-sm text-emerald-200 leading-relaxed">
                  إذا كنت لا تريد تعبئة النموذج، يمكنك التحدث مباشرة مع مهندس المعاينة عبر واتساب وإرسال الصور والموقع بنقرة واحدة.
                </p>

                <div className="p-4 rounded-2xl bg-emerald-900/80 border border-emerald-700/80 text-xs text-emerald-100 font-mono text-right dir-rtl leading-relaxed">
                  "السلام عليكم، أرغب في الاستفسار عن خدمة تنسيق الحدائق بالرياض، وأرغب في معرفة الخيارات المناسبة لمساحتي."
                </div>

                <a
                  href={getWhatsAppUrl("السلام عليكم، أرغب في الاستفسار عن خدمة تنسيق الحدائق بالرياض، وأرغب في معرفة الخيارات المناسبة لمساحتي.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 p-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-sm shadow-xl transition-all active:scale-95"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>ابدأ المحادثة على واتساب الآن</span>
                </a>
              </div>

              {/* Service Areas Box */}
              <div className="bg-white p-6 rounded-3xl border border-gray-200/80 shadow-xs text-right space-y-3">
                <div className="flex items-center gap-2 text-emerald-950 font-bold text-base">
                  <MapPin className="w-4 h-4 text-amber-500" />
                  <h3>نغطي أرقى أحياء الرياض</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {neighborhoodList.map((districtName, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-900 text-xs font-semibold"
                    >
                      {districtName}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 6. خدماتنا (سريعة) */}
        <section className="bg-[#f4f2ea] py-16 border-y border-gray-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 mb-10">
              ماذا يمكننا أن نقدم لك؟
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-right mb-8">
              
              <Link
                href="/services/landscaping/"
                className="bg-white p-5 rounded-2xl border border-gray-200 hover:border-emerald-500 hover:shadow-md transition-all space-y-2 block group"
              >
                <Trees className="w-5 h-5 text-emerald-700 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-bold text-emerald-950">تنسيق الحدائق</h3>
                <p className="text-[11px] text-gray-600 line-clamp-1">تصميم وتنظيم المساحات الخارجية.</p>
              </Link>

              <Link
                href="/services/garden-design/"
                className="bg-white p-5 rounded-2xl border border-gray-200 hover:border-emerald-500 hover:shadow-md transition-all space-y-2 block group"
              >
                <Compass className="w-5 h-5 text-emerald-700 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-bold text-emerald-950">تصميم الحدائق</h3>
                <p className="text-[11px] text-gray-600 line-clamp-1">تخطيط متناسق وعملي 3D.</p>
              </Link>

              <Link
                href="/services/artificial-turf/"
                className="bg-white p-5 rounded-2xl border border-gray-200 hover:border-emerald-500 hover:shadow-md transition-all space-y-2 block group"
              >
                <Layers className="w-5 h-5 text-emerald-700 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-bold text-emerald-950">العشب الصناعي</h3>
                <p className="text-[11px] text-gray-600 line-clamp-1">حلول العشب المستمر للمساحات.</p>
              </Link>

              <Link
                href="/services/natural-grass/"
                className="bg-white p-5 rounded-2xl border border-gray-200 hover:border-emerald-500 hover:shadow-md transition-all space-y-2 block group"
              >
                <Trees className="w-5 h-5 text-emerald-700 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-bold text-emerald-950">العشب الطبيعي</h3>
                <p className="text-[11px] text-gray-600 line-clamp-1">مسطحات خضراء حية ونضرة.</p>
              </Link>

              <Link
                href="/services/irrigation-systems/"
                className="bg-white p-5 rounded-2xl border border-gray-200 hover:border-emerald-500 hover:shadow-md transition-all space-y-2 block group"
              >
                <Droplets className="w-5 h-5 text-emerald-700 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-bold text-emerald-950">شبكات الري</h3>
                <p className="text-[11px] text-gray-600 line-clamp-1">أنظمة أوتوماتيكية موفرة للمياه.</p>
              </Link>

              <Link
                href="/services/trees-planting/"
                className="bg-white p-5 rounded-2xl border border-gray-200 hover:border-emerald-500 hover:shadow-md transition-all space-y-2 block group"
              >
                <Palmtree className="w-5 h-5 text-emerald-700 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-bold text-emerald-950">الأشجار والنخيل</h3>
                <p className="text-[11px] text-gray-600 line-clamp-1">زراعة وتوزيع النخيل والأشجار.</p>
              </Link>

              <Link
                href="/services/waterfalls/"
                className="bg-white p-5 rounded-2xl border border-gray-200 hover:border-emerald-500 hover:shadow-md transition-all space-y-2 block group"
              >
                <Waves className="w-5 h-5 text-emerald-700 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-bold text-emerald-950">النوافير والشلالات</h3>
                <p className="text-[11px] text-gray-600 line-clamp-1">عناصر مائية جدارية مميزة.</p>
              </Link>

              <Link
                href="/services/garden-maintenance/"
                className="bg-white p-5 rounded-2xl border border-gray-200 hover:border-emerald-500 hover:shadow-md transition-all space-y-2 block group"
              >
                <ShieldCheck className="w-5 h-5 text-emerald-700 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-bold text-emerald-950">صيانة الحدائق</h3>
                <p className="text-[11px] text-gray-600 line-clamp-1">العناية والقص المستمر.</p>
              </Link>

            </div>

            <Link
              href="/services/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold transition-all"
            >
              <span>شاهد دليل جميع خدماتنا كاملاً</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>

          </div>
        </section>

        {/* 8. الأسئلة الشائعة */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-100/80 border border-emerald-300/60 text-emerald-900 text-xs font-bold mb-2">
              الأسئلة الشائعة
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950">
              أسئلة قد تهمك قبل التواصل
            </h2>
            <div className="w-12 h-0.5 bg-amber-500 mx-auto rounded-full mt-3" />
          </div>

          <div className="space-y-4 text-right">
            {faqItems.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-right font-bold text-base text-emerald-950 hover:bg-emerald-50/50 transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-amber-500 shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-emerald-700" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-5 pt-0 text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 9. CTA النهائي */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 text-white p-8 sm:p-12 rounded-3xl border border-emerald-800 shadow-2xl text-center space-y-6">
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              خلّنا نبدأ مشروع حديقتك اليوم!
            </h2>
            <p className="text-xs sm:text-base text-emerald-200 leading-relaxed max-w-2xl mx-auto">
              لديك فكرة؟ مساحة تحتاج إلى تنسيق؟ حديقة تحتاج إلى تجديد؟ شاركنا التفاصيل ودعنا نساعدك في اختيار الحل المناسب.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
              <WhatsAppButton variant="gold" size="md">
                تواصل عبر واتساب
              </WhatsAppButton>

              {company.phone && (
                <a
                  href={`tel:${company.phone}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-bold backdrop-blur-md transition-all"
                >
                  <Phone className="w-4 h-4 text-emerald-300" />
                  <span>اتصل بنا ({company.phone})</span>
                </a>
              )}
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppFloating />
      <PhoneFloating />
    </div>
  );
}
