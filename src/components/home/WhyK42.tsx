"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    title: "Business-First Approach",
    description: "We don't just build features. We align technical execution with your core business objectives.",
  },
  {
    title: "Scalable Architecture",
    description: "Systems designed to handle growth from day one, minimizing future technical debt.",
  },
  {
    title: "Fast Iteration",
    description: "Agile delivery cycles that get your product to market and validated quickly.",
  },
  {
    title: "Long-Term Partnerships",
    description: "We act as your dedicated engineering and product team, invested in your success.",
  },
];

export function WhyK42() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );

      itemsRef.current.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: index * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 bg-black relative border-t border-white/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <div ref={contentRef} className="lg:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
            We solve <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
              business problems.
            </span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg">
            Unlike traditional agencies, we think like founders. Every line of code and design decision is made to improve efficiency, increase revenue, or solve a critical bottleneck in your operations.
          </p>
        </div>

        <div className="lg:w-1/2 w-full">
          <ul className="space-y-6">
            {reasons.map((reason, index) => (
              <li
                key={reason.title}
                ref={(el) => {
                  if (el) itemsRef.current[index] = el;
                }}
                className="bg-card p-6 rounded-2xl border border-white/5 flex gap-4"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">{reason.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
