"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const serviceCategories = [
  {
    id: "software",
    title: "Software Engineering",
    overview:
      "We architect and build robust, scalable, and high-performance software systems tailored to your specific business needs. From initial MVP to enterprise-grade infrastructure.",
    idealFor: "Startups, SaaS companies, and established businesses looking to scale operations.",
    outcome: "A secure, scalable, and maintainable software product that drives revenue and efficiency.",
    deliverables: [
      "Custom SaaS Platforms",
      "Internal Business Tools",
      "AI Agents & Integrations",
      "Workflow Automation",
      "Business Systems",
      "Web & Mobile Applications",
    ],
  },
  {
    id: "design",
    title: "Product & Brand Design",
    overview:
      "We craft premium user interfaces and digital experiences that build trust, reduce friction, and drive conversion. We don't just make it look good; we make it work flawlessly.",
    idealFor: "Companies needing a modern brand refresh, better conversion rates, or a premium product feel.",
    outcome: "An intuitive, accessible, and stunning product experience that users love.",
    deliverables: [
      "UI/UX Design Systems",
      "Wireframing & Prototyping",
      "User Research & Testing",
      "Brand Identity & Positioning",
      "Marketing Websites",
      "Interactive Experiences",
    ],
  },
  {
    id: "consulting",
    title: "Technical Strategy & Growth",
    overview:
      "We act as your dedicated engineering and technical partner, guiding your technology strategy, optimizing performance, and setting up growth systems to scale your business.",
    idealFor: "Founders and non-technical teams needing strategic technical direction and growth systems.",
    outcome: "Clear technical roadmap, optimized performance, and automated growth channels.",
    deliverables: [
      "Technical Architecture Review",
      "SEO & Technical Optimization",
      "Growth & Acquisition Systems",
      "Workflow Automation Strategies",
      "Infrastructure Scaling",
      "Fractional CTO Direction",
    ],
  },
];

const processSteps = [
  { id: "01", title: "Discovery", description: "Deep dive into your business, aligning technical solutions with core goals." },
  { id: "02", title: "Research", description: "Analyzing the market, technical constraints, and user behaviors." },
  { id: "03", title: "Planning", description: "Mapping out the roadmap, system architecture, and sprint timelines." },
  { id: "04", title: "Design", description: "Crafting premium user experiences and robust scalable architectures." },
  { id: "05", title: "Development", description: "Engineering high-performance software with modern tech stacks." },
  { id: "06", title: "Testing", description: "Rigorous QA, automated testing, and security audits to ensure stability." },
  { id: "07", title: "Launch", description: "Smooth deployment and go-live strategy with minimal downtime." },
  { id: "08", title: "Support", description: "Continuous optimization, automation, and infrastructure scaling." },
];

export function ServicesContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        ".services-header",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
      );

      // Service cards animation
      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
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
        <div className="max-w-[1600px] mx-auto services-header space-y-6">
          <span className="text-sm font-bold tracking-[0.25em] text-[#D94A26] uppercase block">
            SERVICES — WHAT WE BUILD
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-[#141312] max-w-5xl leading-[0.95]">
            Engineering, Design &amp; <span className="text-[#D94A26]">Systems</span>.
          </h1>
          <p className="text-base sm:text-xl text-[#6E6763] max-w-2xl font-medium leading-relaxed pt-2">
            We offer end-to-end product development, from high-level strategy and premium design to scalable engineering and automated growth systems.
          </p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 md:py-32 px-6 sm:px-10 md:px-14 border-b border-[#D9D2C9]">
        <div className="max-w-[1600px] mx-auto space-y-16 md:space-y-24">
          {serviceCategories.map((category, index) => (
            <div
              key={category.id}
              id={category.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="scroll-mt-32"
            >
              <div className="bg-[#141312] text-white rounded-3xl p-8 sm:p-12 md:p-16 border border-white/10 shadow-2xl transition-all duration-500 hover:border-[#D94A26]/50">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                  {/* Left Column: Info */}
                  <div className="lg:w-1/2 space-y-6">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#D94A26] uppercase block">
                      CATEGORY 0{index + 1}
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
                      {category.title}
                    </h2>
                    <p className="text-white/75 text-base sm:text-lg leading-relaxed pt-2">
                      {category.overview}
                    </p>

                    <div className="space-y-4 pt-4 border-t border-white/15">
                      <div>
                        <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#D94A26] mb-1">
                          Ideal For
                        </h4>
                        <p className="text-white/90 text-sm sm:text-base">{category.idealFor}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#D94A26] mb-1">
                          Outcome
                        </h4>
                        <p className="text-white/90 text-sm sm:text-base">{category.outcome}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Deliverables */}
                  <div className="lg:w-1/2 lg:pl-12 lg:border-l border-white/15">
                    <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-8">
                      Core Deliverables
                    </h3>
                    <ul className="space-y-4">
                      {category.deliverables.map((item) => (
                        <li key={item} className="flex items-center gap-4">
                          <CheckCircle2 className="w-5 h-5 text-[#D94A26] shrink-0" />
                          <span className="text-white/90 font-medium text-base sm:text-lg">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Execution Process Steps */}
      <section className="py-20 md:py-32 px-6 sm:px-10 md:px-14">
        <div className="max-w-[1400px] mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-sm font-bold tracking-[0.25em] text-[#D94A26] uppercase block">
              OUR WORKFLOW
            </span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#141312]">
              How We <span className="text-[#D94A26]">Execute</span>.
            </h2>
            <p className="text-base sm:text-lg text-[#6E6763] font-medium">
              A methodical path from first conversation to launch and ongoing improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {processSteps.map((step) => (
              <div
                key={step.id}
                className="bg-[#141312] text-white p-7 rounded-2xl border border-white/10 shadow-xl space-y-3 hover:border-[#D94A26]/60 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#D94A26]">{step.id}</span>
                  <span className="w-2 h-2 rounded-full bg-[#D94A26]" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wider text-white">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
