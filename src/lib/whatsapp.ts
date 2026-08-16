import { company } from "@/data/company";

/**
 * Builds a contextual WhatsApp link using the configured WhatsApp number.
 * Cleanly handles empty or placeholder numbers.
 */
export function getWhatsAppUrl(message?: string): string {
  const rawNumber = company.whatsapp ? company.whatsapp.replace(/[^0-9]/g, "") : "";
  const defaultText = "مرحبًا، أرغب في الاستفسار عن خدمات تنسيق الحدائق بالرياض لدى زهرة الورود.";
  const textToUse = message || defaultText;

  if (!rawNumber) {
    // If no number is specified in company.ts, fallback to tel prompt or placeholder parameter
    return `https://wa.me/?text=${encodeURIComponent(textToUse)}`;
  }

  return `https://wa.me/${rawNumber}?text=${encodeURIComponent(textToUse)}`;
}
