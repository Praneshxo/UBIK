"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const servicesData = [
  {
    id: "research",
    pill: "AI & ROBOTICS LAB",
    title: "Research",
    description:
      "Explore our AI research, experiments, and open-source tools built at the frontier of intelligence.",
    href: "/services#research",
    route: "K42 / RESEARCH",
    mockupType: "research",
  },
  {
    id: "branding",
    pill: "BRAND & STRATEGY",
    title: "Branding",
    description:
      "Strategic positioning, visual identity, and design systems built to turn ambitious ideas into iconic brands.",
    href: "/services#branding",
    route: "K42 / BRANDING",
    mockupType: "branding",
  },
  {
    id: "development",
    pill: "SOFTWARE DEVELOPMENT",
    title: "Development",
    description:
      "Custom web applications, mobile platforms, and scalable digital architectures built for high-performance scale.",
    href: "/services#development",
    route: "K42 / CLIENTS",
    mockupType: "development",
  },
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".services-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-grid",
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
      className="bg-[#F4EFE6] text-[#141312] py-12 md:py-16 px-6 sm:px-10 md:px-14 border-t border-[#D8D1C5] font-sans relative overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto space-y-3 md:space-y-4">
        {/* Top Header Tag */}
        <div className="border-b border-[#D8D1C5] pb-2">
          <span className="text-sm sm:text-base md:text-lg font-bold tracking-[0.25em] text-[#6E6A64] uppercase">
            03 — WHAT WE DO
          </span>
        </div>

        {/* Subtitle */}
        <div className="services-header pt-0.5 pb-3">
          <p className="text-sm sm:text-base font-medium text-[#2D2B28] leading-relaxed max-w-xl">
            We bring research, branding and technology together to turn
            ideas into meaningful outcomes.
          </p>
        </div>

        {/* 3 Service Cards Grid (Reference Image 1 style) */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-2">
          {servicesData.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="service-card group bg-[#EFE8DC] border border-[#D8D1C5] rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] hover:shadow-xl transition-all duration-300 hover:border-[#D94A26]/50"
            >
              {/* Card Top Bar */}
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="px-3.5 py-1.5 rounded-full border border-[#C8C0B2] bg-[#E5DFD3] text-[10px] sm:text-xs font-bold tracking-widest text-[#2D2B28] uppercase">
                    {service.pill}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-[#C8C0B2] bg-[#F4EFE6] text-[#141312] flex items-center justify-center group-hover:bg-[#141312] group-hover:text-white transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141312] mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-[#524E48] font-medium leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              {/* macOS Window Mockup Preview */}
              <div className="rounded-2xl border border-[#C8C0B2] bg-[#181614] overflow-hidden shadow-md mt-auto">
                {/* Browser Title Bar */}
                <div className="px-4 py-2.5 bg-[#262320] border-b border-[#36322E] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-[#8C847A] tracking-wider uppercase">
                    {service.route}
                  </span>
                  <div className="w-10" />
                </div>

                {/* Window Contents based on Mockup Type */}
                <div className="p-4 sm:p-5 h-56 sm:h-64 md:h-72 overflow-hidden text-white font-sans text-xs">
                  {service.mockupType === "research" && (
                    <div className="space-y-3 font-mono">
                      <div className="flex items-center justify-between text-[11px] text-[#A89E9B] border-b border-[#36322E] pb-2">
                        <span>MODEL: Sanad-1.0</span>
                        <span className="text-[#27C93F] bg-[#27C93F]/10 px-2 py-0.5 rounded">
                          ACTIVE INFERENCE
                        </span>
                      </div>
                      <div className="space-y-1.5 text-[10px] text-white/80">
                        <div className="p-2 rounded bg-white/5 border border-white/10 flex items-center justify-between">
                          <span>Clinical AI Assistant</span>
                          <span className="text-[#D94A26]">QLoRA 4-Stage</span>
                        </div>
                        <div className="p-2 rounded bg-white/5 border border-white/10 flex items-center justify-between">
                          <span>Inference Providers</span>
                          <span className="text-[#A89E9B]">15 Healthcare Models</span>
                        </div>
                      </div>
                      <div className="pt-1 text-[10px] text-[#A89E9B]">
                        Trained on 55,400+ curated medical examples.
                      </div>
                    </div>
                  )}

                  {service.mockupType === "branding" && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[11px] text-[#A89E9B] border-b border-[#36322E] pb-2 font-mono">
                        <span>DESIGN SYSTEM</span>
                        <span>v2.4 TOKEN SUITE</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 pt-1">
                        <div className="p-3 rounded-lg bg-[#D94A26] flex flex-col justify-between h-20 text-white font-mono text-[9px]">
                          <span>ACCENT</span>
                          <span className="font-bold">#D94A26</span>
                        </div>
                        <div className="p-3 rounded-lg bg-[#141312] border border-white/20 flex flex-col justify-between h-20 text-white font-mono text-[9px]">
                          <span>PRIMARY</span>
                          <span className="font-bold">#141312</span>
                        </div>
                        <div className="p-3 rounded-lg bg-[#F4EFE6] flex flex-col justify-between h-20 text-[#141312] font-mono text-[9px]">
                          <span>CANVAS</span>
                          <span className="font-bold">#F4EFE6</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {service.mockupType === "development" && (
                    <div className="space-y-3 font-mono">
                      <div className="flex items-center justify-between text-[11px] text-[#A89E9B] border-b border-[#36322E] pb-2">
                        <span>Sales Pipeline</span>
                        <span className="text-[#27C93F]">+ View Live</span>
                      </div>
                      <div className="grid grid-cols-4 gap-1.5 text-center text-[10px] pt-1">
                        <div className="p-2 rounded bg-white/5 border border-white/10">
                          <div className="text-[#A89E9B]">IDEAS</div>
                          <div className="text-sm font-bold text-white mt-1">4</div>
                        </div>
                        <div className="p-2 rounded bg-white/5 border border-white/10">
                          <div className="text-[#A89E9B]">BUILD</div>
                          <div className="text-sm font-bold text-[#D94A26] mt-1">12</div>
                        </div>
                        <div className="p-2 rounded bg-white/5 border border-white/10">
                          <div className="text-[#A89E9B]">TEST</div>
                          <div className="text-sm font-bold text-white mt-1">7</div>
                        </div>
                        <div className="p-2 rounded bg-white/5 border border-white/10">
                          <div className="text-[#A89E9B]">DEPLOY</div>
                          <div className="text-sm font-bold text-[#27C93F] mt-1">29</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

