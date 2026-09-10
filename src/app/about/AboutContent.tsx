"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function AboutContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        ".about-header-content",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
      );

      // Section cards Animation
      sectionsRef.current.forEach((section) => {
        if (!section) return;
        gsap.fromTo(
          section,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
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
        <div className="max-w-[1600px] mx-auto about-header-content space-y-6">
          <span className="text-sm font-bold tracking-[0.25em] text-[#D94A26] uppercase block">
            ABOUT K42 STUDIO
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-[#141312] max-w-5xl leading-[0.95]">
            We are a Digital <span className="text-[#D94A26]">Product Studio</span>.
          </h1>
          <p className="text-base sm:text-xl text-[#6E6763] max-w-2xl font-medium leading-relaxed pt-2">
            Not a traditional agency. We act as your dedicated engineering and product team, deeply invested in building systems that scale your business.
          </p>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-20 md:py-32 px-6 sm:px-10 md:px-14">
        <div className="max-w-[1600px] mx-auto space-y-20">
          {/* Mission & Vision */}
          <div
            ref={(el) => {
              sectionsRef.current[0] = el;
            }}
            className="grid md:grid-cols-2 gap-8 md:gap-12"
          >
            <div className="bg-[#141312] text-white p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-[#D94A26] uppercase block">
                OUR MISSION
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Engineered for Business Impact
              </h2>
              <p className="text-white/75 text-base sm:text-lg leading-relaxed">
                To bridge the gap between ambitious business goals and technical execution, delivering software systems that drive measurable revenue and efficiency.
              </p>
            </div>

            <div className="bg-[#141312] text-white p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-[#D94A26] uppercase block">
                OUR VISION
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Foundational Technical Partner
              </h2>
              <p className="text-white/75 text-base sm:text-lg leading-relaxed">
                To be the core engineering and digital product partner for the next generation of category-defining companies.
              </p>
            </div>
          </div>

          {/* Core Values Section */}
          <div
            ref={(el) => {
              sectionsRef.current[1] = el;
            }}
            className="bg-[#141312] text-white p-8 sm:p-12 md:p-16 rounded-3xl border border-white/10 shadow-2xl space-y-12"
          >
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-[#D94A26] uppercase block">
                PRINCIPLES &amp; STANDARDS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
                Our Core Values
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                  1. Business-First Engineering
                </h3>
                <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                  Code is a means to an end. We prioritize understanding your unit economics, operational bottlenecks, and growth targets before writing code.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                  2. Craftsmanship &amp; Detail
                </h3>
                <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                  We care deeply about details. From pixel-perfect UI interactions to robust database schemas, we build products that perform flawlessly.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                  3. Transparent Partnership
                </h3>
                <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                  No black boxes. We communicate clearly, manage expectations honestly, and provide full visibility into the development process.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                  4. Scalability by Default
                </h3>
                <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                  We don't believe in throwaway MVPs. We build scalable foundations that handle your next phase of growth without needing a complete rewrite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
