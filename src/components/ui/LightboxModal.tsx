"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { ProjectItem } from "@/data/projects";

interface LightboxModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  currentIndex?: number;
  totalProjects?: number;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  project,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalProjects,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" || e.key === "ArrowUp") {
        if (onNext) onNext();
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
        if (onPrev) onPrev();
      }
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose, onNext, onPrev]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-6 bg-black/95 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Top Controls Bar */}
      <div className="absolute top-4 inset-x-4 sm:inset-x-8 z-[10000] flex items-center justify-between text-white pointer-events-none">
        {/* Project Counter Badge */}
        {totalProjects && totalProjects > 1 ? (
          <div className="pointer-events-auto px-4 py-1.5 rounded-full bg-black/70 border border-white/20 text-amber-300 text-xs font-black backdrop-blur-md shadow-xl">
            مشروع {typeof currentIndex === "number" ? currentIndex + 1 : 1} من {totalProjects}
          </div>
        ) : (
          <div />
        )}

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="إغلاق المعاينة"
          className="pointer-events-auto p-2.5 rounded-full bg-black/70 text-white hover:bg-emerald-600 border border-white/20 shadow-2xl transition-transform active:scale-95 cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Showcase Modal Container */}
      <div
        className="relative w-full max-w-6xl h-[80vh] sm:h-[88vh] bg-black/80 rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Next Navigation Button (Right) */}
        {onNext && (
          <button
            onClick={onNext}
            aria-label="المشروع التالي"
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-4 rounded-full bg-black/70 text-white hover:bg-amber-500 hover:text-emerald-950 border border-white/20 backdrop-blur-md shadow-2xl transition-all active:scale-90 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
        )}

        {/* Previous Navigation Button (Left) */}
        {onPrev && (
          <button
            onClick={onPrev}
            aria-label="المشروع السابق"
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-4 rounded-full bg-black/70 text-white hover:bg-amber-500 hover:text-emerald-950 border border-white/20 backdrop-blur-md shadow-2xl transition-all active:scale-90 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
        )}

        {/* High Resolution Image */}
        <div className="relative w-full h-full flex items-center justify-center p-2">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-contain select-none"
          />
        </div>

        {/* Bottom Floating Title Overlay */}
        <div className="absolute bottom-0 inset-x-0 z-20 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white text-right flex items-center justify-between gap-4 pointer-events-none">
          <div>
            <h3 className="text-base sm:text-xl font-extrabold text-white">
              {project.title}
            </h3>
            {project.location && (
              <p className="text-xs text-amber-300 font-medium flex items-center gap-1 mt-0.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{project.location}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
