import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, ArrowLeft, BookOpen, Sparkles } from "lucide-react";
import { articlesData } from "@/data/articles";

export const ArticlesSection: React.FC = () => {
  return (
    <section id="articles" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-right">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100/80 border border-emerald-300/60 text-emerald-900 text-xs font-bold mb-3">
              <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
              <span>مقالات ونصائح فنية</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 tracking-tight">
              أحدث المقالات والأدلة النصائحية
            </h2>

            <p className="text-sm text-gray-600 mt-2 max-w-2xl">
              إرشادات ودلائل معمارية وتصميمية لمساعدتك في اختيار أفضل التصاميم والعشب والنباتات لحديقتك بالرياض.
            </p>
          </div>

          <Link
            href="/articles/"
            className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100 px-5 py-2.5 rounded-xl border border-emerald-200/80 transition-all self-start md:self-auto"
          >
            <span>استعرض جميع المقالات</span>
            <ArrowLeft className="w-4 h-4 text-emerald-700" />
          </Link>
        </div>

        {/* 3-Column Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articlesData.map((article) => (
            <article
              key={article.id}
              className="group bg-[#fdfbf7] rounded-3xl overflow-hidden border border-gray-200/80 hover:border-emerald-500/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Article Image Container */}
                <div className="relative h-52 bg-emerald-950 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  {/* Category Badge */}
                  <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-emerald-900/90 text-amber-300 text-xs font-extrabold backdrop-blur-md shadow-sm border border-emerald-700/60">
                    {article.category}
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6 text-right space-y-3">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-[11px] font-semibold text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-amber-600" />
                      <span>{article.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-emerald-600" />
                      <span>قراءة {article.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-emerald-950 group-hover:text-emerald-700 transition-colors leading-snug line-clamp-2">
                    <Link href={`/articles/${article.slug}/`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="p-6 pt-0 border-t border-gray-100/80 mt-4 flex items-center justify-between">
                <span className="text-[11px] font-bold text-emerald-800">
                  بقلم: {article.author}
                </span>

                <Link
                  href={`/articles/${article.slug}/`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-emerald-900 group-hover:text-amber-600 transition-colors"
                >
                  <span>اقرأ المقال</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </Link>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
