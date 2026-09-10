"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<number>(3); // Default to 04 / REAL IMPACT

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-chapter",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.6 }
      )
        .fromTo(
          ".hero-title-line",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.15 },
          "-=0.4"
        )
        .fromTo(
          sidebarRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          tabsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const navItems = [
    { id: 0, label: "01 / RESEARCH", href: "#research" },
    { id: 1, label: "02 / BRAND", href: "#brand" },
    { id: 2, label: "03 / BUILD", href: "#build" },
    { id: 3, label: "04 / REAL IMPACT", href: "#impact" },
  ];

  return (
    <section
      ref={containerRef}
      className="bg-[#F4EFE6] text-[#141312] border-b border-[#D8D1C5] font-sans selection:bg-[#D94A26] selection:text-white relative overflow-hidden flex flex-col justify-between min-h-[90vh] lg:min-h-screen"
    >
      {/* Main Grid Content */}
      <div className="w-full flex-1 grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column: Chapter, Headline & Sub-tagline */}
        <div className="lg:col-span-8 p-6 sm:p-10 md:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#D8D1C5] min-h-[500px] lg:min-h-[600px]">
          {/* Chapter Bar */}
          <div className="hero-chapter flex items-center justify-between mb-8 sm:mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#6E6A64] uppercase">
              CHAPTER 01 — THE IDEA AS A SYSTEM
            </span>
            <div className="w-12 sm:w-16 h-[5px] bg-[#D94A26]" />
          </div>

          {/* Main Typography */}
          <div ref={headlineRef} className="my-auto py-6">
            <h1 className="font-black uppercase tracking-tight text-5xl sm:text-7xl md:text-8xl lg:text-[90px] xl:text-[104px] leading-[0.92] text-[#141312]">
              <span className="hero-title-line block">
                From the first question{" "}
                <span className="hero-title-line inline-block text-[#D94A26] font-[family-name:var(--font-caveat)] font-normal normal-case text-6xl sm:text-8xl lg:text-[104px] tracking-normal ml-3">
                  to
                </span>
              </span>

              <span className="hero-title-line block mt-1">the final product.</span>
            </h1>
          </div>

          {/* Tagline Footer */}
          <div className="pt-8 mt-auto">
            <span className="text-xs font-bold tracking-[0.25em] text-[#858077] uppercase">
              MOVE / NOTICE / CONNECT
            </span>
          </div>
        </div>

        {/* Right Column: Watermark, Paragraph, & Action Links */}
        <div
          ref={sidebarRef}
          className="lg:col-span-4 p-6 sm:p-10 md:p-14 flex flex-col justify-between bg-[#F4EFE6]"
        >
          {/* Top Right Watermark Area */}
          <div className="flex items-start justify-end gap-3 mb-10 sm:mb-16 pt-2">
            <span className="text-7xl sm:text-8xl lg:text-9xl font-black text-[#D8D1C5]/70 select-none leading-none tracking-tighter">
              01
            </span>
            <span className="[writing-mode:vertical-rl] rotate-180 text-[10px] font-bold tracking-[0.2em] text-[#858077] uppercase select-none py-1">
              A FIELD NOTE ON AMBITION
            </span>
          </div>

          {/* Text & Links Section */}
          <div className="space-y-8 mt-auto">
            <p className="text-sm sm:text-base font-medium text-[#2D2B28] leading-relaxed max-w-sm">
              We combine research, branding and technology to turn ambitious
              ideas into brands, products and systems that move businesses
              forward.
            </p>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3.5 pt-4">
              <Link
                href="/work"
                className="group inline-flex items-center justify-between gap-3 text-sm sm:text-base font-bold tracking-wider text-[#F4EFE6] bg-[#141312] hover:bg-[#D94A26] px-6 py-3.5 rounded-full transition-all duration-300 uppercase shadow-md hover:shadow-xl"
              >
                <span>EXPLORE OUR WORK</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-between gap-3 text-sm sm:text-base font-bold tracking-wider text-[#141312] bg-[#EFE9DD] border border-[#D8D1C5] hover:bg-[#141312] hover:text-[#F4EFE6] hover:border-[#141312] px-6 py-3.5 rounded-full transition-all duration-300 uppercase shadow-sm hover:shadow-md"
              >
                <span>START A PROJECT</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Horizontal Navigation / Status Bar */}
      <div
        ref={tabsRef}
        className="w-full border-t border-[#D8D1C5] grid grid-cols-2 md:grid-cols-4 divide-x divide-[#D8D1C5]"
      >
        {navItems.map((item) => {
          const isActive = item.id === activeTab;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`py-4 px-6 sm:px-8 text-left text-xs sm:text-sm font-bold tracking-wider uppercase transition-all flex items-center gap-2.5 ${isActive
                ? "text-[#D94A26] bg-[#EFE9DD]"
                : "text-[#141312] hover:bg-[#EFE9DD]/60"
                }`}
            >
              {isActive && (
                <span className="w-2 h-2 rounded-full bg-[#D94A26] inline-block animate-pulse" />
              )}
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

