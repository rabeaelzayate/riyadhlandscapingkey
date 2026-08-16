import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  showSubtitle?: boolean;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  variant = "dark",
  showSubtitle = true,
  size = 48,
}) => {
  const isLight = variant === "light";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Brand Icon Emblem with New Generated Logo */}
      <div
        style={{ width: `${size}px`, height: `${size}px` }}
        className="relative flex-shrink-0 flex items-center justify-center overflow-hidden"
      >
        <Image
          src="/images/logo-transparent.png"
          alt="زهرة الورود - شعار احترافي"
          width={size}
          height={size}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <span
          className={`font-bold text-xl md:text-2xl leading-tight tracking-tight ${
            isLight ? "text-white" : "text-emerald-950"
          }`}
        >
          زهرة الورود
        </span>
        {showSubtitle && (
          <span
            className={`text-xs md:text-xs font-medium tracking-wide ${
              isLight ? "text-emerald-200/90" : "text-emerald-800"
            }`}
          >
            لتنسيق الحدائق بالرياض
          </span>
        )}
      </div>
    </div>
  );
};
