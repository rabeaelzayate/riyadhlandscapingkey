import React from "react";
import { company } from "@/data/company";
import { servicesData } from "@/data/services";
import { faqData } from "@/data/faq";

export const JsonLd: React.FC = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LandscapingBusiness",
    "@id": "https://zahret-al-wurood.com/#organization",
    "name": "زهرة الورود لتنسيق الحدائق بالرياض",
    "alternateName": ["Zahret Al Wurood Landscaping", "شركة تنسيق حدائق بالرياض"],
    "description": company.seoDescription,
    "url": "https://zahret-al-wurood.com",
    "logo": "https://zahret-al-wurood.com/images/logo-transparent.png",
    "image": "https://zahret-al-wurood.com/images/hero/hero-landscaping.jpg",
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
      "addressRegion": "منطقة الرياض",
      "postalCode": "11564",
      "addressCountry": "SA"
    },
    "areaServed": [
      { "@type": "City", "name": "الرياض" },
      { "@type": "AdministrativeArea", "name": "شمال الرياض" },
      { "@type": "AdministrativeArea", "name": "شرق الرياض" },
      { "@type": "AdministrativeArea", "name": "غرب الرياض" },
      { "@type": "AdministrativeArea", "name": "جنوب الرياض" }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "194",
      "bestRating": "5",
      "worstRating": "1"
    },
    "knowsAbout": [
      "تنسيق حدائق بالرياض",
      "تصميم حدائق ثلاثية الأبعاد 3D",
      "تركيب عشب صناعي",
      "توريد وزراعة ثيل طبيعي",
      "تركيب شبكات ري أوتوماتيكية",
      "تنفيذ شلالات ونوافير جدارية",
      "زراعة أشجار ونخيل واشنطنيا",
      "صيانة وتقليم وتكريب حدائق"
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
