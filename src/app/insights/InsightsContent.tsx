"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const articles = [
  {
    title: "Why most startups build before they research.",
    category: "Product Strategy",
    date: "Aug 12, 2026",
    readTime: "8 min read",
    link: "/insights/startups-build-before-research",
  },
  {
    title: "5 business processes you should automate right now.",
    category: "AI & Automation",
    date: "Jul 28, 2026",
    readTime: "5 min read",
    link: "/insights/5-business-processes-to-automate",
  },
  {
    title: "Branding isn't just a logo. It's perception.",
    category: "Brand Strategy",
    date: "Jul 15, 2026",
    readTime: "6 min read",
    link: "/insights/branding-perception-not-just-logo",
  },
  {
    title: "Building Scalable Next.js Architectures for B2B Systems",
    category: "Engineering",
    date: "Jun 30, 2026",
    readTime: "7 min read",
    link: "/insights/scalable-nextjs-architectures-b2b",
  },
  {
    title: "Product Thinking over Feature Factories",
    category: "Product Thinking",
    date: "Jun 10, 2026",
    readTime: "4 min read",
    link: "/insights/product-thinking-over-feature-factories",
  },
  {
    title: "Modern UI/UX principles for data-dense applications",
    category: "UI/UX Design",
    date: "May 22, 2026",
    readTime: "9 min read",
    link: "/insights/modern-ui-ux-data-dense-apps",
  },
];

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
          <span className="text-sm font-bold tracking-[0.25em] text-[#D94A26] uppercase block">
            INSIGHTS &amp; FIELD NOTES
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-[#141312] max-w-5xl leading-[0.95]">
            Latest <span className="text-[#D94A26]">Insights</span>.
          </h1>
          <p className="text-base sm:text-xl text-[#6E6763] max-w-2xl font-medium leading-relaxed pt-2">
            Thoughts, frameworks, and deep dives into engineering, product strategy, AI, and design.
          </p>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-20 md:py-32 px-6 sm:px-10 md:px-14">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Link
              key={article.title}
              href={article.link}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group flex flex-col bg-[#141312] text-white rounded-3xl p-8 border border-white/10 shadow-xl hover:border-[#D94A26]/60 transition-all duration-300 h-full justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-[#D94A26]">
                  <span>{article.category}</span>
                  <span className="text-white/40">{article.readTime}</span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-[#D94A26] transition-colors leading-snug pt-2">
                  {article.title}
                </h3>
              </div>

              <div className="pt-8 mt-6 border-t border-white/15 flex items-center justify-between text-xs font-mono text-white/50">
                <span>{article.date}</span>
                <span className="flex items-center gap-1.5 text-white/80 group-hover:text-[#D94A26] transition-colors font-bold uppercase tracking-wider">
                  Read Article
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
