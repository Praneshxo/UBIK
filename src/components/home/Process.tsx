"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Compass,
  FileSearch,
  Target,
  Layers,
  Cpu,
  Zap,
  TrendingUp,
  Sparkles,
  ArrowRight,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      num: "01",
      name: "DISCOVER",
      desc: "Understand business & problem",
      icon: Compass,
    },
    {
      num: "02",
      name: "RESEARCH",
      desc: "Find market & user truths",
      icon: FileSearch,
    },
    {
      num: "03",
      name: "DEFINE",
      desc: "Create strategy & direction",
      icon: Target,
    },
    {
      num: "04",
      name: "DESIGN",
      desc: "Turn ideas into systems",
      icon: Layers,
    },
    {
      num: "05",
      name: "BUILD",
      desc: "Make it real with code",
      icon: Cpu,
    },
    {
      num: "06",
      name: "AUTOMATE",
      desc: "Remove friction & scale",
      icon: Zap,
    },
    {
      num: "07",
      name: "EVOLVE",
      desc: "Measure, learn & grow",
      icon: TrendingUp,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".approach-title",
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

      gsap.fromTo(
        ".timeline-step",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".approach-timeline",
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
      className="bg-[#1E1715] text-[#F4EFE6] pt-28 md:pt-40 lg:pt-48 pb-10 md:pb-14 px-6 sm:px-10 md:px-14 border-t border-[#3D2E2B] font-sans relative overflow-hidden flex flex-col justify-center min-h-[75vh]"
    >
      <div className="max-w-[1600px] mx-auto w-full space-y-12 md:space-y-16">
        {/* Section Header */}
        <div className="approach-title space-y-8 md:space-y-10">
          <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#A89E9B] uppercase block">
            02 — OUR APPROACH
          </span>

          <h2 className="font-black uppercase tracking-tight text-3xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.05] text-[#F4EFE6] max-w-6xl">
            <span className="block sm:inline-block">MOST BUSINESSES DON&apos;T HAVE A SOLUTION PROBLEM.</span>
            <br />
            <span className="block sm:inline-block">THEY HAVE A THINKING PROBLEM.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#C4B8B4] max-w-xl font-medium pt-2">
            We help you move from where you are to where you want to be.
          </p>
        </div>

        {/* Single Horizontal Line Sequence (No Boxes) */}
        <div className="approach-timeline w-full border-y border-[#3D2E2B] py-12 md:py-16 overflow-x-auto scrollbar-none">
          <div className="flex items-start justify-between min-w-[1000px] lg:min-w-full px-2 gap-4">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div key={step.num} className="flex items-start flex-1 gap-4">
                  <div className="timeline-step flex-1 space-y-4">
                    {/* Top row: Number + Icon */}
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono font-bold text-[#D94A26]">
                        {step.num}
                      </span>
                      <IconComp className="w-5 h-5 text-[#F4EFE6]" />
                    </div>

                    {/* Step Title & Description */}
                    <div className="space-y-1.5">
                      <h3 className="text-sm font-black uppercase tracking-wider text-[#F4EFE6]">
                        {step.name}
                      </h3>
                      <p className="text-xs text-[#A89E9B] leading-relaxed max-w-[140px]">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Arrow Connector between steps */}
                  {idx < steps.length - 1 && (
                    <div className="pt-2 shrink-0">
                      <ArrowRight className="w-4 h-4 text-[#5A4642]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}



