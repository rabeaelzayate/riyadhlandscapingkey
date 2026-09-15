import React from "react";
import { company } from "@/data/company";
import { servicesData } from "@/data/services";
import { faqData } from "@/data/faq";

export const JsonLd: React.FC = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LandscapingBusiness",
    "@id": "https://riyadhlandscapingkey-sa.com/#organization",
    "name": "مؤسسة مفتاح التنسيق لتنسيق الحدائق والعشب الصناعي بالسعودية",
    "alternateName": [
      "Muftah Al Tanseeq Landscaping",
      "مفتاح التنسيق",
      "حدائق الفرسان",
      "مؤسسة حدائق الفرسان",
      "حدائق الفرسان التجارية للعشب الصناعي",
      "حدائق الفرسان الرياض",
      "حدائق الفرسان الدمام",
      "فرسان العشب الصناعي",
      "شركة العشب الصناعي بالرياض والدمام",
      "شركة تنسيق حدائق بالسعودية"
    ],
    "description": company.seoDescription,
    "url": "https://riyadhlandscapingkey-sa.com",
    "logo": "https://riyadhlandscapingkey-sa.com/images/logo-transparent.png",
    "image": "https://riyadhlandscapingkey-sa.com/images/hero/hero-landscaping.jpg",
    "telephone": company.phone,
    "email": company.email,
    "priceRange": "$$",
    "currenciesAccepted": "SAR",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer, Mada",
    "openingHours": "Sa-Th 08:00-22:00",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.7136,
      "longitude": 46.6753
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "طريق الملك فهد",
      "addressLocality": "الرياض",
      "addressRegion": "منطقة الرياض والمنطقة الشرقية",
      "postalCode": "11564",
      "addressCountry": "SA"
    },
    "areaServed": [
      { "@type": "City", "name": "الرياض" },
      { "@type": "City", "name": "الدمام" },
      { "@type": "City", "name": "الخبر" },
      { "@type": "City", "name": "الظهران" },
      { "@type": "AdministrativeArea", "name": "شمال الرياض" },
      { "@type": "AdministrativeArea", "name": "شرق الرياض" },
      { "@type": "AdministrativeArea", "name": "غرب الرياض" },
      { "@type": "AdministrativeArea", "name": "جنوب الرياض" }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "230",
      "bestRating": "5",
      "worstRating": "1"
    },
    "knowsAbout": [
      "عشب صناعي بالرياض والدمام",
      "توريد وتركيب العشب الجداري",
      "جملة العشب الصناعي والثيل الصناعي",
      "ديكورات عشب صناعي جداري",
      "تنسيق حدائق بالعشب الصناعي",
      "حصى الزينة وبحص الحدائق والكور المضيئة",
      "ملاعب عشب صناعي ونجيلة صناعية",
      "تصميم حدائق 3D بالرياض",
      "توريد وزراعة ثيل طبيعي c2000",
      "تركيب شبكات ري أوتوماتيكية وذكية",
      "تنفيذ شلالات ونوافير جدارية ومودرن",
      "زراعة أشجار ونخيل واشنطنيا"
    ]
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": servicesData.map((svc, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": svc.title,
        "description": svc.description,
        "provider": {
          "@type": "LocalBusiness",
          "name": company.nameAr
        }
      }
    }))
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
};
