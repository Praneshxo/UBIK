"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { ARTICLES_LIST } from "@/data/insightsData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function InsightsContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        ".insights-header-content",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
      );

      // Article Cards Animation
      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#F4EFE6] text-[#141312] min-h-screen font-sans">
      {/* Header Section */}
      <section className="pt-28 pb-20 px-6 sm:px-10 md:px-14 border-b border-[#D9D2C9] relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto insights-header-content space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-[0.25em] text-[#D94A26] uppercase">
            <Sparkles className="w-4 h-4" />
            <span>RESEARCH → BRAND → BUILD → REAL IMPACT</span>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-[#141312] max-w-5xl leading-[0.95]">
            UBIK <span className="text-[#D94A26]">Insights</span>.
          </h1>
          <p className="text-base sm:text-xl text-[#6E6763] max-w-3xl font-medium leading-relaxed pt-2">
            7 distinct content formats demonstrating how UBIK thinks, researches, designs, and builds autonomous enterprise systems.
          </p>
        </div>
      </section>

      {/* Editorial Content Grid */}
      <section className="py-20 md:py-28 px-6 sm:px-10 md:px-14">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES_LIST.map((article, index) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group flex flex-col bg-[#141312] text-white rounded-3xl p-8 border border-white/10 shadow-xl hover:border-[#D94A26]/80 transition-all duration-300 h-full justify-between relative overflow-hidden"
            >
              {/* Card Header Top Info */}
              <div className="space-y-5 relative z-10">
                <div className="flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-[#D94A26] text-white">
                      {article.number}
                    </span>
                    <span className="text-[#D94A26] tracking-widest">{article.category}</span>
                  </div>
                  <span className="text-white/40">{article.readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-[#D94A26] transition-colors leading-snug pt-1">
                  {article.title}
                </h2>

                <p className="text-sm sm:text-base text-white/70 font-normal leading-relaxed line-clamp-3">
                  {article.shortDescription}
                </p>

                {article.badgeNote && (
                  <span className="inline-block text-[11px] font-mono text-[#D94A26] bg-[#D94A26]/10 px-3 py-1 rounded-full border border-[#D94A26]/20">
                    {article.badgeNote}
                  </span>
                )}
              </div>

              {/* Card Footer */}
              <div className="pt-8 mt-6 border-t border-white/15 flex items-center justify-between text-xs font-mono text-white/50 relative z-10">
                <span>{article.date}</span>
                <span className="flex items-center gap-1.5 text-white/80 group-hover:text-[#D94A26] transition-colors font-bold uppercase tracking-wider">
                  Read Piece
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
