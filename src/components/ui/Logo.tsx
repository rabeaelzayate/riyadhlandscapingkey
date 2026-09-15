import React from "react";
import Image from "next/image";
import { company } from "@/data/company";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  showText?: boolean;
  showSubtitle?: boolean;
  size?: number;
  width?: number;
  height?: number;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  variant = "dark",
  showText = false,
  showSubtitle = false,
  size = 76,
  width,
  height,
}) => {
  const isLight = variant === "light";
  const logoWidth = width || size;
  const logoHeight = height || size;

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Brand Logo Image Only - Enlarged Size */}
      <div
        style={{ width: `${logoWidth}px`, height: `${logoHeight}px` }}
        className="relative flex-shrink-0 flex items-center justify-center transition-transform hover:scale-105"
      >
        <Image
          src="/images/logo-transparent.png"
          alt={`${company.nameAr} - ${company.subtitleAr}`}
          width={logoWidth * 2}
          height={logoHeight * 2}
          className="w-full h-full object-contain drop-shadow-md"
          priority
        />
      </div>

      {/* Brand Text (rendered only if explicitly requested) */}
      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-bold text-xl md:text-2xl leading-tight tracking-tight ${
              isLight ? "text-white" : "text-emerald-950"
            }`}
          >
            {company.nameAr}
          </span>
          {showSubtitle && (
            <span
              className={`text-xs md:text-xs font-medium tracking-wide ${
                isLight ? "text-emerald-200/90" : "text-emerald-800"
              }`}
            >
              {company.subtitleAr}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
