"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ARTICLES_LIST } from "@/data/insightsData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Insights() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        ".insights-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );

      // Insight Rows Staggered Reveal Animation
      gsap.fromTo(
        ".insight-row",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".insights-list",
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-[#F4EFE6] text-[#1E1715] py-20 md:py-32 px-6 sm:px-10 md:px-14 border-t border-[#D9D2C9] font-sans relative overflow-hidden"
    >
      {/* Glow / Subtle ambient highlight ring behind header */}
      <div className="absolute top-12 right-1/4 w-[350px] h-[180px] bg-[#E2DACD] rounded-full blur-[80px] pointer-events-none opacity-60" />

      <div className="max-w-[1600px] mx-auto space-y-12 md:space-y-16 relative z-10">
        {/* Top Bar: Section Tag on Left, "Latest Insights" Title on Right */}
        <div className="insights-header flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#1E1715]/10">
          <div>
            <span className="text-sm sm:text-base font-bold tracking-[0.25em] text-[#6E6763] uppercase block">
              05 / UBIK INSIGHTS
            </span>
          </div>

          <div className="flex flex-col md:items-end">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#1E1715]">
              Real UBIK <span className="text-[#D94A26]">Thinking</span>
            </h2>
            <p className="text-sm sm:text-base text-[#6E6763] font-medium pt-2">
              7 content types: How we research, design, build, and automate.
            </p>
          </div>
        </div>

        {/* Insights Table List */}
        <div className="insights-list border-t border-b border-[#1E1715]/20 divide-y divide-[#1E1715]/20">
          {ARTICLES_LIST.map((item) => (
            <Link
              key={item.slug}
              href={`/insights/${item.slug}`}
              className="insight-row group flex flex-col md:flex-row md:items-center justify-between py-6 sm:py-8 px-2 sm:px-4 transition-colors duration-300 hover:bg-[#1E1715]/[0.04] cursor-pointer gap-4 md:gap-8"
            >
              {/* Meta: Number + Category */}
              <div className="flex items-center gap-3 shrink-0">
                <span className="px-2.5 py-1 rounded bg-[#141312] text-white text-xs font-mono font-bold">
                  {item.number}
                </span>
                <span className="text-xs font-mono font-bold tracking-widest text-[#D94A26] uppercase">
                  {item.category}
                </span>
              </div>

              {/* Title & Short Description */}
              <div className="flex-1 space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1E1715] group-hover:text-[#D94A26] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6E6763] line-clamp-1 font-medium hidden sm:block">
                  {item.shortDescription}
                </p>
              </div>

              {/* Arrow Up-Right Icon */}
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#1E1715]/70 group-hover:text-[#D94A26] transition-colors shrink-0">
                <span className="hidden md:inline uppercase tracking-wider">Read</span>
                <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#1E1715]/70 group-hover:text-[#D94A26] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom view all button */}
        <div className="pt-4 flex justify-end">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#141312] text-white font-mono text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#D94A26] transition-colors shadow-md"
          >
            Explore All 7 Pieces <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
