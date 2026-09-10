"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const pillars = [
  {
    num: "01",
    shortTitle: "Think Before We Build",
    title: "Discovery & Strategy",
    description:
      "We deep dive into your business, aligning technical solutions with core business goals and research.",
  },
  {
    num: "02",
    shortTitle: "One Team, End To End",
    title: "End-to-End Execution",
    description:
      "Brand, research, software and artificial intelligence working together seamlessly under one roof.",
  },
  {
    num: "03",
    shortTitle: "Systems Over Deliverables",
    title: "Scalable Architecture",
    description:
      "We build long-term scalable systems and digital platforms, not just one-time superficial deliverables.",
  },
  {
    num: "04",
    shortTitle: "Curious By Nature",
    title: "Continuous Innovation",
    description:
      "We constantly explore emerging tech, market signals, and AI workflows to keep you ahead of competitors.",
  },
  {
    num: "05",
    shortTitle: "Impact That Matters",
    title: "Measurable Outcomes",
    description:
      "We focus relentlessly on real business outcomes that drive revenue, operational efficiency, and scale.",
  },
];

export function StickyWhyBuild() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        ".why-build-header",
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

      // Timeline Items Entrance Animation
      gsap.fromTo(
        ".timeline-item",
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 75%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-[#F4EFE6] text-[#141312] py-20 md:py-32 px-6 sm:px-10 md:px-14 border-t border-[#D9D2C9] font-sans relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto space-y-16 md:space-y-20 relative">
        {/* Section Header */}
        <div className="why-build-header space-y-3 border-b border-[#D9D2C9] pb-6">
          <span className="text-sm sm:text-base md:text-lg font-bold tracking-[0.25em] text-[#D94A26] uppercase block">
            04 — WHY BUILD WITH US
          </span>
          <p className="text-base sm:text-lg md:text-xl text-[#6E6763] max-w-xl font-medium">
            Because building something meaningful deserves more than just
            standard execution.
          </p>
        </div>

        {/* Central Vertical Line Timeline (Orange / Red Theme - No Purple) */}
        <div className="timeline-container relative py-6">
          {/* Central Vertical Line (Desktop center / Mobile left) */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#D94A26]/30 via-[#D94A26] to-[#D94A26]/30 shadow-[0_0_8px_rgba(217,74,38,0.4)]" />

          <div className="space-y-12 md:space-y-20 relative z-10">
            {pillars.map((pillar, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={pillar.num}
                  className="timeline-item flex flex-col md:flex-row items-start md:items-center justify-between w-full relative pl-14 md:pl-0"
                >
                  {/* Left Side Container (Desktop) */}
                  <div className="w-full md:w-[44%] flex justify-end">
                    {isLeft ? (
                      <div className="bg-[#141312] text-white p-7 sm:p-9 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/10 w-full max-w-lg transform transition-all duration-300 hover:border-[#D94A26]/60 hover:shadow-[0_10px_30px_rgba(217,74,38,0.15)] group">
                        <span className="text-xs font-mono font-bold tracking-widest text-[#D94A26] uppercase block mb-2">
                          {pillar.shortTitle}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight">
                          {pillar.title}
                        </h3>
                        <p className="text-sm sm:text-base font-medium text-white/75 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    ) : (
                      <div className="hidden md:block w-full" />
                    )}
                  </div>

                  {/* Center Node Circle with Orange/Red Glow */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#141312] text-white font-mono font-bold text-sm border-2 border-[#D94A26] shadow-[0_0_15px_rgba(217,74,38,0.6)] z-20">
                    {pillar.num}
                  </div>

                  {/* Right Side Container (Desktop & Mobile) */}
                  <div className="w-full md:w-[44%] flex justify-start">
                    {!isLeft ? (
                      <div className="bg-[#141312] text-white p-7 sm:p-9 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/10 w-full max-w-lg transform transition-all duration-300 hover:border-[#D94A26]/60 hover:shadow-[0_10px_30px_rgba(217,74,38,0.15)] group">
                        <span className="text-xs font-mono font-bold tracking-widest text-[#D94A26] uppercase block mb-2">
                          {pillar.shortTitle}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight">
                          {pillar.title}
                        </h3>
                        <p className="text-sm sm:text-base font-medium text-white/75 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    ) : (
                      /* Mobile fallback for left items so they display nicely under node */
                      <div className="block md:hidden bg-[#141312] text-white p-7 sm:p-9 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/10 w-full max-w-lg">
                        <span className="text-xs font-mono font-bold tracking-widest text-[#D94A26] uppercase block mb-2">
                          {pillar.shortTitle}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight">
                          {pillar.title}
                        </h3>
                        <p className="text-sm sm:text-base font-medium text-white/75 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
