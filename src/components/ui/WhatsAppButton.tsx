import React from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "gold";
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  hideDefaultIcon?: boolean;
  icon?: React.ReactNode;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message,
  className = "",
  variant = "primary",
  children,
  size = "md",
  hideDefaultIcon = false,
  icon,
}) => {
  const href = getWhatsAppUrl(message);

  const sizeStyles = {
    sm: "px-3.5 py-2 text-xs font-bold gap-1.5",
    md: "px-5 py-2.5 text-sm font-semibold gap-2",
    lg: "px-6 py-3.5 text-base font-bold gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow-md focus:ring-emerald-500",
    secondary:
      "bg-emerald-950 hover:bg-emerald-900 text-emerald-100 shadow-md focus:ring-emerald-800",
    outline:
      "border-2 border-emerald-600 text-emerald-800 hover:bg-emerald-50 focus:ring-emerald-500",
    gold:
      "bg-amber-500 hover:bg-amber-400 text-emerald-950 shadow-md focus:ring-amber-400 font-black",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل معنا عبر واتساب"
      className={`inline-flex items-center justify-center rounded-xl transition-all duration-200 active:scale-[0.98] whitespace-nowrap flex-nowrap ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {icon ? (
        icon
      ) : !hideDefaultIcon ? (
        <MessageCircle className="w-4 h-4 flex-shrink-0" />
      ) : null}
      <span className="whitespace-nowrap">{children || "تواصل عبر واتساب"}</span>
    </a>
  );
};
