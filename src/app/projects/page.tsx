"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowLeft } from "lucide-react";
import { projectsData, projectCategories, ProjectItem } from "@/data/projects";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LightboxModal } from "@/components/ui/LightboxModal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WhatsAppFloating } from "@/components/ui/WhatsAppFloating";
import { PhoneFloating } from "@/components/ui/PhoneFloating";

import { ServiceBanner } from "@/components/services/ServiceBanner";

export default function ProjectsIndexPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((item) => item.categoryKey === activeCategory);

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const selectedProject = selectedIndex !== null ? filteredProjects[selectedIndex] : null;

  return (
    <div className="relative min-h-screen flex flex-col bg-[#fdfbf7] text-gray-900 selection:bg-emerald-200 selection:text-emerald-950">
      <Header />

      <main className="flex-grow pt-20 pb-20">
        
        {/* Top Hero Banner matching Services Banner Design */}
        <ServiceBanner
          title="معرض أعمالنا بالرياض"
          subtitle="مجموعة ممتازة من أحدث مشاريعنا المنفذة لحدائق الفلل والمنازل والشاليهات بتصاميم مودرن وجودة تنفيذ عالية."
          image="/images/why-us-fountain.jpg"
          breadcrumbs={[
            { label: "الرئيسية", href: "/" },
            { label: "أعمالنا" },
          ]}
        />

        {/* Portfolio Gallery Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
          
          {/* Main Section Header */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100/80 border border-amber-300/60 text-amber-900 text-xs font-bold mb-3">
              <span>• معرض الأعمال</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 tracking-tight mb-1">
              إبداعاتنا في الرياض
            </h2>

            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-700/90 mb-2">
              LANDSCAPE ARTWORKS
            </p>
            <div className="w-12 h-0.5 bg-amber-500 mx-auto rounded-full" />
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {projectCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 active:scale-95 ${
                  activeCategory === cat.key
                    ? "bg-emerald-900 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Rich 3-Column Image Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => setSelectedIndex(idx)}
                className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-200/80 cursor-pointer bg-black"
              >
                {/* Image with Smooth Hover Zoom */}
                <Image
                  src={project.image}
                  alt={`${project.title} - زهرة الورود لتنسيق الحدائق بالرياض`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                
                {/* Guaranteed 75% Dark Black Overlay Fading In ONLY On Hover */}
                <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out z-10 pointer-events-none" />

                {/* Text Content Overlay Sliding Up ONLY On Hover */}
                <div className="absolute bottom-0 inset-x-0 z-20 p-4 sm:p-5 text-right transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out pointer-events-none">
                  <span className="text-[10px] text-amber-300 font-bold uppercase block mb-1">
                    زهرة الورود • {project.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-0.5 line-clamp-1">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-200 font-medium">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Dark Green Callout Banner */}
          <div className="bg-[#0e271a] text-white p-8 sm:p-12 rounded-3xl border border-emerald-800 shadow-2xl text-center space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              هل ترغب في تحويل حديقتك؟
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200 leading-relaxed max-w-xl mx-auto">
              تواصل معنا للحصول على معاينة مجانية وتصميم 3D لموقعك بكافة أحياء الرياض.
            </p>
            <div className="pt-2">
              <WhatsAppButton
                variant="gold"
                size="md"
                message="مرحبًا، شاهدت معرض أعمالكم وأرغب في طلب معاينة مجانية وتصميم 3D لموقعي بالرياض."
              >
                تواصل معنا الآن
              </WhatsAppButton>
            </div>
          </div>

        </section>

      </main>

      {/* Lightbox Preview Modal */}
      <LightboxModal
        project={selectedProject}
        onClose={() => setSelectedIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        currentIndex={selectedIndex ?? 0}
        totalProjects={filteredProjects.length}
      />

      <Footer />
      <WhatsAppFloating />
      <PhoneFloating />
    </div>
  );
}
