"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  ChevronDown,
  Gift,
  Trees,
  Sparkles,
  Waves,
  Droplets,
  ArrowLeft,
  Eye,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { company } from "@/data/company";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { InstallButton } from "@/components/pwa/InstallButton";

interface MegaMenuTab {
  id: string;
  label: string;
  icon: React.ReactNode;
  items: {
    title: string;
    englishTitle: string;
    image: string;
    route: string;
    message: string;
  }[];
}

const megaMenuTabs: MegaMenuTab[] = [
  {
    id: "landscaping",
    label: "تنسيق الحدائق",
    icon: <Trees className="w-4 h-4" />,
    items: [
      {
        title: "تنسيق حدائق بالرياض",
        englishTitle: "GARDEN LANDSCAPING",
        image: "/images/services/landscaping.jpg",
        route: "/services/landscaping/",
        message: "مرحبًا، أرغب في الاستفسار عن خدمة تنسيق الحدائق بالرياض.",
      },
      {
        title: "تصميم حدائق ثلاثي الأبعاد",
        englishTitle: "3D GARDEN DESIGN",
        image: "/images/services/design.jpg",
        route: "/services/garden-design/",
        message: "مرحبًا، أرغب في الاستفسار عن تصميم حدائق 3D بالرياض.",
      },
    ],
  },
  {
    id: "grass",
    label: "الثيل والعشب",
    icon: <Sparkles className="w-4 h-4" />,
    items: [
      {
        title: "تركيب العشب الصناعي",
        englishTitle: "ARTIFICIAL TURF",
        image: "/images/services/artificial-turf.jpg",
        route: "/services/artificial-turf/",
        message: "مرحبًا، أرغب في الاستفسار عن تركيب العشب الصناعي بالرياض.",
      },
      {
        title: "توريد الثيل الطبيعي",
        englishTitle: "NATURAL GRASS",
        image: "/images/services/natural-grass.jpg",
        route: "/services/natural-grass/",
        message: "مرحبًا، أرغب في الاستفسار عن توريد وتركيب الثيل الطبيعي.",
      },
    ],
  },
  {
    id: "waterfalls",
    label: "الشلالات والنوافير",
    icon: <Waves className="w-4 h-4" />,
    items: [
      {
        title: "شلالات جدارية مودرن",
        englishTitle: "WALL WATERFALLS",
        image: "/images/services/waterfalls.jpg",
        route: "/services/waterfalls/",
        message: "مرحبًا، أرغب في الاستفسار عن تصميم وتنفيذ الشلالات الجدارية.",
      },
      {
        title: "زراعة الأشجار والنخيل",
        englishTitle: "TREES & PALMS",
        image: "/images/services/planting.jpg",
        route: "/services/trees-planting/",
        message: "مرحبًا، أرغب في الاستفسار عن خدمات زراعة الأشجار والنخيل.",
      },
    ],
  },
  {
    id: "integrated",
    label: "خدمات متكاملة",
    icon: <Droplets className="w-4 h-4" />,
    items: [
      {
        title: "شبكات الري الأوتوماتيكية",
        englishTitle: "SMART IRRIGATION",
        image: "/images/services/irrigation.jpg",
        route: "/services/irrigation-systems/",
        message: "مرحبًا، أرغب في الاستفسار عن تركيب شبكات الري بالرياض.",
      },
      {
        title: "صيانة وتقليم الحدائق",
        englishTitle: "GARDEN MAINTENANCE",
        image: "/images/services/maintenance.jpg",
        route: "/services/garden-maintenance/",
        message: "مرحبًا، أرغب في الاستفسار عن خدمات صيانة الحدائق بالرياض.",
      },
    ],
  },
];

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [activeTab, setActiveTab] = useState("landscaping");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href.startsWith("/#")) {
      return false;
    }
    const cleanHref = href.replace(/\/$/, "");
    const cleanPath = pathname.replace(/\/$/, "");
    return cleanPath.startsWith(cleanHref);
  };

  const isServicesActive = pathname.startsWith("/services");
  const currentTab = megaMenuTabs.find((t) => t.id === activeTab) || megaMenuTabs[0];

  const mainNavLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "أعمالنا", href: "/projects/" },
    { name: "المقالات", href: "/articles/" },
    { name: "من نحن", href: "/about/" },
    { name: "آلية العمل", href: "/#process" },
    { name: "لماذا نحن", href: "/#why-us" },
    { name: "الأسئلة الشائعة", href: "/#faq" },
    { name: "تواصل معنا", href: "/contact/" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 text-gray-900 shadow-md backdrop-blur-md border-b border-gray-100 py-3"
            : "bg-emerald-950/75 text-white backdrop-blur-md border-b border-white/10 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo Right */}
            <Link href="/" className="focus:outline-none rounded-lg flex-shrink-0">
              <Logo variant={isScrolled ? "dark" : "light"} />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold" aria-label="التنقل الرئيسي">
              <Link
                href="/"
                className={`hover:text-amber-400 transition-colors py-1 relative ${
                  isLinkActive("/")
                    ? "text-amber-400 font-bold"
                    : isScrolled
                    ? "text-gray-800"
                    : "text-white"
                }`}
              >
                الرئيسية
                {isLinkActive("/") && (
                  <span className="absolute bottom-0 inset-x-0 h-0.5 bg-amber-400 rounded-full" />
                )}
              </Link>

              {/* Mega Menu Dropdown Item */}
              <div
                className="relative"
                onMouseEnter={() => setShowMegaMenu(true)}
                onMouseLeave={() => setShowMegaMenu(false)}
              >
                <Link
                  href="/services/"
                  className={`flex items-center gap-1 hover:text-amber-400 transition-colors py-2 relative ${
                    isServicesActive
                      ? "text-amber-400 font-bold"
                      : isScrolled
                      ? "text-gray-800"
                      : "text-white"
                  }`}
                  aria-expanded={showMegaMenu}
                >
                  <span>خدماتنا</span>
                  {isServicesActive && (
                    <span className="absolute bottom-0 inset-x-0 h-0.5 bg-amber-400 rounded-full" />
                  )}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      showMegaMenu ? "rotate-180 text-amber-400" : ""
                    }`}
                  />
                </Link>

                {/* Mega Menu Popup Card */}
                {showMegaMenu && (
                  <div className="absolute right-0 top-full pt-3 w-[660px] animate-fadeIn">
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-5 text-gray-900 overflow-hidden">
                      
                      {/* Top Mega Menu Tabs */}
                      <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-4">
                        {megaMenuTabs.map((tab) => (
                          <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            onMouseEnter={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                              activeTab === tab.id
                                ? "bg-emerald-900 text-white shadow-sm"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {tab.icon}
                            <span>{tab.label}</span>
                          </button>
                        ))}
                      </div>

                      {/* Active Tab Items Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        {currentTab.items.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.route}
                            onClick={() => setShowMegaMenu(false)}
                            className="group flex items-center gap-3 p-2.5 rounded-xl border border-gray-100 hover:border-emerald-500/40 hover:bg-emerald-50/50 transition-all"
                          >
                            <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 border border-gray-200">
                              <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                sizes="60px"
                                className="object-cover group-hover:scale-110 transition-transform"
                              />
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-emerald-950 group-hover:text-emerald-700 transition-colors">
                                {item.title}
                              </h4>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Mega Menu Footer Actions */}
                      <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <a
                            href={getWhatsAppUrl("مرحبًا، أرغب في الاستفسار عن جميع خدماتكم.")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] text-white text-xs font-bold shadow-xs hover:bg-[#20ba5a]"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span>واتساب</span>
                          </a>

                          {company.phone && (
                            <a
                              href={`tel:${company.phone}`}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-900 text-white text-xs font-bold hover:bg-emerald-800"
                            >
                              <Phone className="w-3.5 h-3.5" />
                              <span>اتصل بنا</span>
                            </a>
                          )}
                        </div>

                        <Link
                          href="/services/"
                          onClick={() => setShowMegaMenu(false)}
                          className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-900"
                        >
                          <span>عرض دليل جميع الخدمات</span>
                          <ArrowLeft className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                    </div>
                  </div>
                )}
              </div>

              {mainNavLinks.slice(1).map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`hover:text-amber-400 transition-colors py-1 relative ${
                      active
                        ? "text-amber-400 font-bold"
                        : isScrolled
                        ? "text-gray-800"
                        : "text-white"
                    }`}
                  >
                    {link.name}
                    {active && (
                      <span className="absolute bottom-0 inset-x-0 h-0.5 bg-amber-400 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Left Action Buttons & Promo Badges (Desktop) */}
            <div className="hidden lg:flex items-center gap-3">
              <InstallButton variant="header" className="hidden xl:inline-flex" />

              <a
                href={getWhatsAppUrl("مرحبًا، أرغب في طلب معاينة مجانية والحصول على خصم 10%.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500 text-emerald-950 text-xs font-black shadow-md hover:bg-amber-400 transition-colors cursor-pointer"
              >
                <Gift className="w-3.5 h-3.5 text-emerald-950" />
                <span>خصم 10%</span>
              </a>

              <a
                href={`tel:${company.phone || "0501460766"}`}
                aria-label="اتصل بنا"
                className="p-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-all active:scale-95"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Header Top Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${company.phone || "0501460766"}`}
                className="p-2.5 rounded-full bg-emerald-600/90 text-white border border-emerald-400/40 hover:bg-emerald-500 transition-colors"
                aria-label="اتصل بنا"
              >
                <Phone className="w-4.5 h-4.5" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className={`p-2.5 rounded-xl transition-colors ${
                  isScrolled
                    ? "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
                aria-label="فتح القائمة الرئيسية"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Full-Screen Portal Mobile Drawer Overlay */}
      {mounted && mobileMenuOpen && createPortal(
        <div
          className="fixed inset-0 w-screen h-screen z-[99999] text-white flex flex-col justify-between overflow-y-auto p-6"
          style={{ backgroundColor: "#0b2014" }}
        >
          {/* Leaf Background Pattern */}
          <div className="absolute inset-0 bg-leaf-pattern opacity-10 pointer-events-none" aria-hidden="true" />

          <div className="relative z-10">
            {/* Top Bar inside Drawer */}
            <div className="flex items-center justify-between border-b border-emerald-800/80 pb-5 mb-6">
              {/* Close Button Top Right */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-full bg-emerald-900/90 text-white hover:bg-emerald-800 border border-emerald-700/60 transition-colors"
                aria-label="إغلاق القائمة"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Brand Logo Top Left */}
              <Logo variant="light" showSubtitle={false} />
            </div>

            {/* Mobile Navigation Items List */}
            <nav className="flex flex-col gap-2.5" aria-label="قائمة التنقل للجوال">
              
              {/* 1. Home Link */}
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-900/50 border border-emerald-800/80 text-white hover:bg-emerald-900/80 transition-all"
              >
                <span className="font-extrabold text-base">الرئيسية</span>
                <span className="font-sans text-xs text-amber-300 uppercase font-bold">Home</span>
              </Link>

              {/* 2. Services Accordion Link to /services/ */}
              <div className="rounded-2xl bg-emerald-900/40 border border-emerald-800/80 overflow-hidden">
                <div className="flex items-center justify-between p-3.5 text-white font-extrabold text-base hover:bg-emerald-900/60 transition-colors">
                  <Link
                    href="/services/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 hover:text-amber-300"
                  >
                    <span>خدماتنا</span>
                    <span className="text-[10px] bg-amber-500 text-emerald-950 px-2 py-0.5 rounded-full font-extrabold">الكل</span>
                  </Link>

                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="p-1 hover:text-amber-300"
                  >
                    <ChevronDown
                      className={`w-5 h-5 text-amber-400 transition-transform ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {mobileServicesOpen && (
                  <div className="p-3 bg-emerald-950/80 border-t border-emerald-800/80 space-y-2">
                    {megaMenuTabs.flatMap((t) => t.items).map((svc, i) => (
                      <Link
                        key={i}
                        href={svc.route}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-emerald-900/80 text-emerald-100 text-xs font-bold transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                          <span>{svc.title}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* 3 to 8. Other Navigation Links */}
              {mainNavLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-900/40 border border-emerald-800/60 text-white hover:bg-emerald-900/80 transition-all"
                >
                  <span className="font-extrabold text-base">{link.name}</span>
                </Link>
              ))}

              {/* Install PWA Mobile App Button */}
              <div className="pt-2">
                <InstallButton variant="drawer" />
              </div>

            </nav>
          </div>

          {/* Bottom Drawer Actions */}
          <div className="relative z-10 pt-6 mt-6 border-t border-emerald-800/80 flex flex-col gap-3">
            {/* Gold Discount Button */}
            <a
              href={getWhatsAppUrl("مرحبًا، أرغب في طلب معاينة مجانية والحصول على خصم 10%.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-emerald-950 font-black text-sm shadow-xl transition-transform active:scale-[0.98]"
            >
              <Gift className="w-4 h-4 text-emerald-950" />
              <span>احصل على خصم 10%</span>
            </a>

            {/* Phone Call / WhatsApp Button */}
            <a
              href={getWhatsAppUrl("مرحبًا، أرغب في التواصل مع فريق زهرة الورود بالرياض.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-white hover:bg-gray-100 text-emerald-950 font-bold text-sm shadow-lg transition-transform active:scale-[0.98]"
            >
              <MessageCircle className="w-4.5 h-4.5 text-emerald-700" />
              <span>تواصل عبر واتساب</span>
            </a>
          </div>

        </div>,
        document.body
      )}
    </>
  );
};
