"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const insights = [
  {
    id: 1,
    title: "Why most startups build before they research.",
    href: "/insights/startups-build-before-research",
  },
  {
    id: 2,
    title: "5 business processes you should automate right now.",
    href: "/insights/5-business-processes-to-automate",
  },
  {
    id: 3,
    title: "Branding isn't just a logo. It's perception.",
    href: "/insights/branding-perception-not-just-logo",
  },
];

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
          stagger: 0.15,
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
              05 / INSIGHTS
            </span>
          </div>

          <div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#1E1715]">
              Latest Insights
            </h2>
          </div>
        </div>

        {/* Insights Table List */}
        <div className="insights-list border-t border-b border-[#1E1715]/20 divide-y divide-[#1E1715]/20">
          {insights.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="insight-row group flex items-center justify-between py-8 sm:py-10 md:py-12 px-2 sm:px-4 transition-colors duration-300 hover:bg-[#1E1715]/[0.03] cursor-pointer"
            >
              {/* Insight Title */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-[#1E1715] group-hover:text-black transition-colors duration-300 pr-6 max-w-4xl leading-snug">
                {item.title}
              </h3>

              {/* Arrow Up-Right Icon */}
              <div className="flex-shrink-0">
                <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 text-[#1E1715]/70 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
