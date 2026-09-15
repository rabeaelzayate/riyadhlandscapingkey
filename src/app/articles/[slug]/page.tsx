import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Calendar, Clock, BookOpen, CheckCircle2, ArrowRight, ArrowLeft, ChevronLeft, ChevronRight, Send, LayoutGrid } from "lucide-react";
import { articlesData } from "@/data/articles";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceBanner } from "@/components/services/ServiceBanner";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WhatsAppFloating } from "@/components/ui/WhatsAppFloating";
import { PhoneFloating } from "@/components/ui/PhoneFloating";
import { RelatedArticlesSlider } from "@/components/articles/RelatedArticlesSlider";
import { company } from "@/data/company";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return articlesData.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "المقال غير موجود",
    };
  }

  const siteUrl = "https://riyadhlandscapingkey-sa.com";
  const imageUrl = article.image.startsWith("http")
    ? article.image
    : `${siteUrl}${article.image}`;
  const articleUrl = `${siteUrl}/articles/${article.slug}/`;

  return {
    title: article.title,
    description: article.excerpt,
    keywords: article.tags,
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      type: "article",
      title: `${article.title} | ${company.nameAr} ${company.subtitleAr}`,
      description: article.excerpt,
      url: articleUrl,
      siteName: `${company.nameAr} ${company.subtitleAr}`,
      locale: "ar_SA",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [imageUrl],
    },
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const currentIndex = articlesData.findIndex((a) => a.slug === slug);
  const prevArticle = currentIndex > 0 ? articlesData[currentIndex - 1] : articlesData[articlesData.length - 1];
  const nextArticle = currentIndex >= 0 && currentIndex < articlesData.length - 1 ? articlesData[currentIndex + 1] : articlesData[0];

  const siteUrl = "https://riyadhlandscapingkey-sa.com";
  const imageUrl = article.image.startsWith("http")
    ? article.image
    : `${siteUrl}${article.image}`;
  const articleUrl = `${siteUrl}/articles/${article.slug}/`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: [imageUrl],
    datePublished: "2026-08-16T12:00:00+03:00",
    author: {
      "@type": "Organization",
      name: `${company.nameAr} ${company.subtitleAr}`,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: `${company.nameAr} ${company.subtitleAr}`,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo-transparent.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "الرئيسية",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "المقالات",
        "item": `${siteUrl}/articles/`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.title,
        "item": articleUrl
      }
    ]
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#fdfbf7] text-gray-900 selection:bg-emerald-200 selection:text-emerald-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />

      <main className="flex-grow pt-20 pb-20">
        
        {/* Top Header Banner */}
        <ServiceBanner
          title={article.title}
          subtitle={article.excerpt}
          image={article.image}
          breadcrumbs={[
            { label: "الرئيسية", href: "/" },
            { label: "المقالات", href: "/articles/" },
            { label: article.category },
          ]}
        />

        {/* Article Body Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10 text-right">
          
          {/* Article Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-gray-200/80 shadow-xs">
            <div className="flex items-center gap-4 text-xs font-bold text-gray-600">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-amber-600" />
                <span>نُشر في: {article.date}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>وقت القراءة: {article.readTime}</span>
              </span>
            </div>

            <span className="text-xs font-extrabold text-emerald-900 bg-emerald-100/80 px-3 py-1 rounded-full">
              {article.author}
            </span>
          </div>

          {/* Intro Box */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-xs space-y-4">
            <p className="text-base sm:text-lg text-emerald-950 font-semibold leading-relaxed">
              {article.content.intro}
            </p>
          </div>

          {/* Main Content Sections */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-200/80 shadow-xs space-y-10">
            {article.content.sections.map((sec, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-black text-emerald-950 flex items-center gap-2 border-b border-gray-100 pb-3">
                  <BookOpen className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>{sec.heading}</span>
                </h2>

                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {p}
                  </p>
                ))}

                {sec.bulletPoints && (
                  <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-gray-800">
                    {sec.bulletPoints.map((bp, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 text-white p-8 sm:p-10 rounded-3xl border border-emerald-800 shadow-2xl text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              هل ترغب في الحصول على استشارة فنية لحديقتك بالرياض؟
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200">
              تواصل مع مهندسي {company.nameAr} لمعاينة موقعك مجانًا وتقديم أفضل الحلول المناسبة.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <WhatsAppButton
                variant="gold"
                size="md"
                message={`مرحبًا، قرأت مقال (${article.title}) وأرغب في الاستفسار والحصول على استشارة.`}
              >
                تواصل معنا الآن عبر واتساب
              </WhatsAppButton>

              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-emerald-950 font-bold text-xs sm:text-sm hover:bg-emerald-50 transition-colors shadow-md"
              >
                <Send className="w-4 h-4 text-emerald-700" />
                <span>حجز موعد معاينة</span>
              </Link>
            </div>
          </div>

          {/* Related Articles Slider */}
          <RelatedArticlesSlider
            currentArticleId={article.id}
            category={article.category}
          />

          {/* ========================================================
              روابط التنقل بين المقالات (Previous & Next Article Navigation)
             ======================================================== */}
          <nav aria-label="التنقل بين المقالات" className="pt-8 border-t border-gray-200/80">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
              {/* Previous Article */}
              <Link
                href={`/articles/${prevArticle.slug}/`}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-gray-200 hover:border-emerald-500/50 hover:shadow-md transition-all text-right group"
              >
                <ChevronRight className="w-5 h-5 text-emerald-700 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="text-[10px] text-gray-500 font-bold block">المقال السابق</span>
                  <span className="text-xs sm:text-sm font-extrabold text-emerald-950 group-hover:text-emerald-700 transition-colors line-clamp-1">
                    {prevArticle.title}
                  </span>
                </div>
              </Link>

              {/* All Articles Center Link */}
              <Link
                href="/articles/"
                className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-emerald-900 text-white hover:bg-emerald-800 transition-all font-bold text-xs sm:text-sm shadow-sm"
              >
                <LayoutGrid className="w-4 h-4 text-amber-400" />
                <span>كافة المقالات والأدلة</span>
              </Link>

              {/* Next Article */}
              <Link
                href={`/articles/${nextArticle.slug}/`}
                className="flex items-center justify-between p-4 rounded-2xl bg-white border border-gray-200 hover:border-emerald-500/50 hover:shadow-md transition-all text-right group"
              >
                <div>
                  <span className="text-[10px] text-gray-500 font-bold block">المقال التالي</span>
                  <span className="text-xs sm:text-sm font-extrabold text-emerald-950 group-hover:text-emerald-700 transition-colors line-clamp-1">
                    {nextArticle.title}
                  </span>
                </div>
                <ChevronLeft className="w-5 h-5 text-emerald-700 flex-shrink-0 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </nav>

        </article>

      </main>

      <Footer />
      <WhatsAppFloating />
      <PhoneFloating />
    </div>
  );
}
