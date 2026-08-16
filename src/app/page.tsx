import React from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";
import { LeadQuoteBanner } from "@/components/home/LeadQuoteBanner";
import { QuickServices } from "@/components/home/QuickServices";
import { AboutTrust } from "@/components/home/AboutTrust";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyUs } from "@/components/home/WhyUs";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ProjectsGallery } from "@/components/home/ProjectsGallery";
import { SportsTurfBanner } from "@/components/home/SportsTurfBanner";
import { ServiceAreas } from "@/components/home/ServiceAreas";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ArticlesSection } from "@/components/home/ArticlesSection";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCta } from "@/components/home/FinalCta";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloating } from "@/components/ui/WhatsAppFloating";
import { PhoneFloating } from "@/components/ui/PhoneFloating";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col selection:bg-emerald-200 selection:text-emerald-950">
      {/* 01 — Header */}
      <Header />

      <main className="flex-grow">
        {/* 02 — Hero Section */}
        <Hero />

        {/* 02.5 — Interactive Lead Quote Calculator Banner */}
        <LeadQuoteBanner />

        {/* 03 — Quick Services */}
        <QuickServices />

        {/* 04 — About / Trust */}
        <AboutTrust />

        {/* 05 — Services */}
        <ServicesSection />

        {/* 06 — Why Us */}
        <WhyUs />

        {/* 07 — Process */}
        <ProcessSection />

        {/* 08 — Projects / Gallery */}
        <ProjectsGallery />

        {/* 08.5 — Sports Turf Feature Banner */}
        <SportsTurfBanner />

        {/* 09 — Service Areas */}
        <ServiceAreas />

        {/* 10 — Testimonials */}
        <TestimonialsSection />

        {/* 10.5 — Articles Section */}
        <ArticlesSection />

        {/* 11 — FAQ */}
        <FaqSection />

        {/* 12 — Final CTA */}
        <FinalCta />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Button (Left) */}
      <WhatsAppFloating />

      {/* Persistent Floating Phone Button (Right) */}
      <PhoneFloating />
    </div>
  );
}
