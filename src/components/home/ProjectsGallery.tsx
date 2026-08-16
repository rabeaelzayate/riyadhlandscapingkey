"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Eye, ArrowLeft } from "lucide-react";
import { LightboxModal } from "@/components/ui/LightboxModal";
import { ProjectItem } from "@/data/projects";

const recentProjects: ProjectItem[] = [
  {
    id: "gallery-1",
    title: "تنسيق حديقة فيلا سكنية فاخرة",
    category: "تنسيق حدائق",
    categoryKey: "landscaping",
    image: "/images/why-us-fountain.jpg",
    location: "حي حطين، الرياض",
    description: "مشروع متكامل لتصميم وتنفيذ مدخل فيلا فاخرة يجمع بين الأحواض المائية والنخيل والزهور.",
  },
  {
    id: "gallery-2",
    title: "تنسيق جلسة خارجية ممر مضاء",
    category: "تنسيق حدائق",
    categoryKey: "landscaping",
    image: "/images/hero/hero-landscaping.jpg",
    location: "حي النرجس، الرياض",
    description: "نموذج جلسة خارجية ليلية مع ممر حجري وإضاءات دافئة خفية بين النباتات.",
  },
  {
    id: "gallery-3",
    title: "شلال صخري طبيعي للحديقة",
    category: "نوافير وشلالات",
    categoryKey: "waterfalls",
    image: "/images/services/waterfalls.jpg",
    location: "حي الياسمين، الرياض",
    description: "تنفيذ شلال صخري متدرج بتدفق مائي سلس وإحاطة بالنباتات الخضراء.",
  },
  {
    id: "gallery-4",
    title: "تكسية جدارية عشب وزينة",
    category: "عشب",
    categoryKey: "grass",
    image: "/images/services/landscaping.jpg",
    location: "حي الملقا، الرياض",
    description: "تنسيق جداري أخضر يضيف لمسة حيوية للمساحات الخارجية الضيقة.",
  },
  {
    id: "gallery-5",
    title: "توريد وتركيب الثيل الطبيعي",
    category: "عشب",
    categoryKey: "grass",
    image: "/images/services/natural-grass.jpg",
    location: "حي الصحافة، الرياض",
    description: "تجهيز التربة وزراعة الثيل الطبيعي النضير بمساحة واسعة في حوش فيلا.",
  },
  {
    id: "gallery-6",
    title: "شلال مودرن في الأحواش الخارجية",
    category: "نوافير وشلالات",
    categoryKey: "waterfalls",
    image: "/images/services/artificial-turf.jpg",
    location: "حي العقيق، الرياض",
    description: "تصميم شلال جداري مودرن مع وعاء مائي سفلي وتأطير بالحصى الزخرفي.",
  },
];

export const ProjectsGallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % recentProjects.length);
  };

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! - 1 + recentProjects.length) % recentProjects.length);
  };

  const selectedProject = selectedIndex !== null ? recentProjects[selectedIndex] : null;

  return (
    <section id="projects" className="py-20 bg-[#fdfbf7] border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100/80 border border-amber-300/60 text-amber-900 text-xs font-bold mb-3">
            <span>• أعمالنا</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 tracking-tight mb-1">
            لمحة من مشاريعنا في الرياض
          </h2>

          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-700/90 mb-2">
            OUR RECENT PROJECTS
          </p>
          <div className="w-12 h-0.5 bg-amber-500 mx-auto rounded-full" />
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-10">
          
          {/* Left Block: 2 Stacked Medium Cards */}
          <div className="md:col-span-5 flex flex-col gap-5">
            {/* Card 2: Top Left */}
            <div
              onClick={() => setSelectedIndex(1)}
              className="group relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-sm border border-gray-200/80 cursor-pointer bg-black"
            >
              <Image
                src={recentProjects[1].image}
                alt={recentProjects[1].title}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              
              {/* Guaranteed Black Overlay On Hover */}
              <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out z-10 pointer-events-none" />

              {/* Text Sliding Up On Hover */}
              <div className="absolute bottom-0 inset-x-0 z-20 p-4 text-right transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out pointer-events-none">
                <span className="text-[10px] text-amber-300 font-bold uppercase block mb-0.5">زهرة الورود</span>
                <h3 className="text-sm font-bold text-white mb-0.5">{recentProjects[1].title}</h3>
                <span className="text-[11px] text-emerald-200 font-medium">{recentProjects[1].location}</span>
              </div>
            </div>

            {/* Card 3: Bottom Left */}
            <div
              onClick={() => setSelectedIndex(2)}
              className="group relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-sm border border-gray-200/80 cursor-pointer bg-black"
            >
              <Image
                src={recentProjects[2].image}
                alt={recentProjects[2].title}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out z-10 pointer-events-none" />

              <div className="absolute bottom-0 inset-x-0 z-20 p-4 text-right transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out pointer-events-none">
                <span className="text-[10px] text-amber-300 font-bold uppercase block mb-0.5">زهرة الورود</span>
                <h3 className="text-sm font-bold text-white mb-0.5">{recentProjects[2].title}</h3>
                <span className="text-[11px] text-emerald-200 font-medium">{recentProjects[2].location}</span>
              </div>
            </div>
          </div>

          {/* Right Block: Large Featured Card */}
          <div
            onClick={() => setSelectedIndex(0)}
            className="md:col-span-7 group relative h-96 md:h-full min-h-[380px] rounded-3xl overflow-hidden shadow-md border border-gray-200/80 cursor-pointer bg-black"
          >
            <Image
              src={recentProjects[0].image}
              alt={recentProjects[0].title}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            
            <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out z-10 pointer-events-none" />

            <div className="absolute bottom-0 inset-x-0 z-20 p-6 text-right transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out pointer-events-none">
              <span className="inline-block px-3 py-1 rounded-full bg-amber-500 text-emerald-950 text-xs font-black mb-2">
                زهرة الورود • مشروع مميز
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{recentProjects[0].title}</h3>
              <p className="text-xs text-emerald-100/90">{recentProjects[0].description}</p>
            </div>
          </div>

          {/* Bottom Row: 3 Equal Width Cards */}
          <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-5 pt-1">
            {recentProjects.slice(3, 6).map((item, idx) => {
              const realIdx = idx + 3;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedIndex(realIdx)}
                  className="group relative h-48 rounded-2xl overflow-hidden shadow-sm border border-gray-200/80 cursor-pointer bg-black"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out z-10 pointer-events-none" />

                  <div className="absolute bottom-0 inset-x-0 z-20 p-4 text-right transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out pointer-events-none">
                    <span className="text-[10px] text-amber-300 font-bold uppercase block mb-0.5">زهرة الورود</span>
                    <h3 className="text-xs sm:text-sm font-bold text-white mb-0.5">{item.title}</h3>
                    <span className="text-[10px] text-emerald-200 font-medium">{item.location}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Action Button */}
        <div className="text-center">
          <button
            onClick={() => setSelectedIndex(0)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-emerald-50 text-emerald-800 border-2 border-emerald-600/40 text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all active:scale-98 cursor-pointer"
          >
            <span>تصفح الصور بالشاشة الكاملة</span>
            <ArrowLeft className="w-4 h-4 text-emerald-600" />
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        project={selectedProject}
        onClose={() => setSelectedIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        currentIndex={selectedIndex ?? 0}
        totalProjects={recentProjects.length}
      />
    </section>
  );
};
