import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight, Share2, Bookmark, CheckCircle2, ChevronRight, Zap } from "lucide-react";
import { notFound } from "next/navigation";
import { ARTICLES_DATABASE, ArticleContentSection, ArticleData } from "@/data/insightsData";

// Helper to format inline bold text **text**
function renderFormattedText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-bold text-[#141312]">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export async function generateStaticParams() {
  return Object.keys(ARTICLES_DATABASE).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES_DATABASE[slug];
  if (!article) {
    return { title: "Insight Article | UBIK Digital Product Studio" };
  }
  return {
    title: `${article.title} | UBIK Insights`,
    description: article.shortDescription,
  };
}

function SectionRenderer({ section }: { section: ArticleContentSection }) {
  switch (section.type) {
    case "paragraph":
      return (
        <p className="leading-relaxed text-[#2A2725] text-lg sm:text-xl font-normal">
          {renderFormattedText(section.text || "")}
        </p>
      );

    case "heading":
      return (
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#141312] mt-10 mb-4 pt-6 border-t border-[#D8D1C5]">
          {section.text}
        </h2>
      );

    case "note":
      return (
        <div className="bg-[#EFE9DD] border-l-4 border-[#D94A26] p-4 sm:p-6 rounded-r-2xl my-6 text-sm sm:text-base text-[#5A5450] font-medium">
          {section.text}
        </div>
      );

    case "blockquote":
      return (
        <figure className="my-8 pl-6 border-l-4 border-[#D94A26] space-y-2 bg-[#EFE9DD]/50 p-6 rounded-r-2xl">
          {section.attribution && (
            <figcaption className="text-xs font-mono font-bold tracking-widest text-[#D94A26] uppercase">
              {section.attribution}
            </figcaption>
          )}
          <blockquote className="text-xl sm:text-2xl font-serif italic text-[#141312] leading-snug">
            "{section.text}"
          </blockquote>
        </figure>
      );

    case "flow":
      return (
        <div className="my-8 bg-[#141312] text-[#F4EFE6] p-6 sm:p-8 rounded-3xl border border-[#2D2825] shadow-xl overflow-x-auto">
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#D94A26] uppercase block mb-4">
            WORKFLOW ARCHITECTURE
          </span>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {section.flow?.steps.map((step, idx) => (
              <div key={idx} className="flex items-center gap-2 sm:gap-3">
                <span className="px-3.5 py-2 rounded-xl bg-[#22201D] border border-white/10 text-xs sm:text-sm font-mono font-medium text-[#EFE9DD] whitespace-nowrap">
                  {step}
                </span>
                {idx < (section.flow?.steps.length || 0) - 1 && (
                  <ChevronRight className="w-4 h-4 text-[#D94A26] shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      );

    case "comparison":
      return (
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#EAE4D8] p-6 rounded-2xl border border-[#D8D1C5] space-y-2">
            <span className="text-xs font-mono font-bold text-[#8C857B] uppercase block tracking-wider">
              Traditional Model
            </span>
            <p className="font-mono text-sm sm:text-base font-semibold text-[#5A5450]">
              {section.comparison?.old}
            </p>
          </div>
          <div className="bg-[#141312] text-white p-6 rounded-2xl border border-[#D94A26]/40 space-y-2 shadow-lg">
            <span className="text-xs font-mono font-bold text-[#D94A26] uppercase block tracking-wider flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 fill-[#D94A26]" /> UBIK Outcome Model
            </span>
            <p className="font-mono text-sm sm:text-base font-semibold text-[#EFE9DD]">
              {section.comparison?.new}
            </p>
          </div>
        </div>
      );

    case "levels":
      return (
        <div className="my-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {section.levelsList?.map((lvl, idx) => (
            <div
              key={idx}
              className="bg-[#141312] text-white p-6 rounded-3xl border border-white/10 hover:border-[#D94A26]/50 transition-colors space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono font-bold">
                  <span className="text-[#D94A26]">{lvl.level}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white/80 uppercase tracking-widest text-[10px]">
                    {lvl.name}
                  </span>
                </div>
                <p className="text-sm font-medium text-white/90">{lvl.desc}</p>
              </div>
              <div className="pt-3 border-t border-white/10">
                <span className="text-[10px] font-mono uppercase text-white/40 block mb-1.5">
                  Examples
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {lvl.examples.map((ex, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-white/70"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      );

    case "numberedSteps":
      return (
        <div className="my-8 space-y-3">
          {section.numberedSteps?.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-5 rounded-2xl bg-[#EFE9DD] border border-[#D8D1C5]"
            >
              <span className="px-3 py-1 rounded-lg bg-[#141312] text-[#D94A26] text-xs font-mono font-bold shrink-0 mt-0.5">
                {item.step}
              </span>
              <p className="text-base sm:text-lg text-[#141312] font-medium leading-relaxed">
                {renderFormattedText(item.text)}
              </p>
            </div>
          ))}
        </div>
      );

    case "list":
      return (
        <ul className="my-6 space-y-2.5 pl-2">
          {section.items?.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-base sm:text-lg text-[#2A2725]">
              <span className="w-2 h-2 rounded-full bg-[#D94A26] mt-2.5 shrink-0" />
              <span>{renderFormattedText(item)}</span>
            </li>
          ))}
        </ul>
      );

    case "principle":
      return (
        <div className="my-12 bg-gradient-to-br from-[#141312] to-[#25211E] text-white p-8 sm:p-10 rounded-[2.5rem] border border-[#D94A26]/50 shadow-2xl relative overflow-hidden space-y-4">
          <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-[#D94A26]/10 rounded-full blur-3xl pointer-events-none" />
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#D94A26] uppercase block">
            UBIK PRINCIPLE
          </span>
          <p className="text-xl sm:text-3xl font-extrabold tracking-tight text-[#F4EFE6] leading-snug">
            "{section.text}"
          </p>
        </div>
      );

    default:
      return null;
  }
}

export default async function InsightArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = ARTICLES_DATABASE[slug];

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-[#F4EFE6] text-[#141312] font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#6E6A64] hover:text-[#D94A26] uppercase transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Insights
        </Link>

        {/* Article Meta Header */}
        <header className="mb-14 border-b border-[#D8D1C5] pb-12 space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono font-bold uppercase tracking-wider text-[#D94A26]">
            <span className="px-3.5 py-1 rounded-full bg-[#EFE9DD] border border-[#D8D1C5] text-[#141312]">
              {article.number} / {article.category}
            </span>
            {article.badgeNote && (
              <span className="px-3.5 py-1 rounded-full bg-[#D94A26]/10 text-[#D94A26] border border-[#D94A26]/30">
                {article.badgeNote}
              </span>
            )}
            <span className="text-[#6E6763]">·</span>
            <span className="flex items-center gap-1 text-[#6E6763]">
              <Calendar className="w-3.5 h-3.5" /> {article.date}
            </span>
            <span className="text-[#6E6763]">·</span>
            <span className="flex items-center gap-1 text-[#6E6763]">
              <Clock className="w-3.5 h-3.5" /> {article.readTime}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#141312] leading-[1.08]">
            {article.title}
          </h1>

          <p className="text-xl sm:text-2xl text-[#5A5450] leading-relaxed font-medium">
            {article.shortDescription}
          </p>

          {/* Author info */}
          <div className="pt-6 flex items-center justify-between text-xs font-mono text-[#6E6763] border-t border-[#D8D1C5]/60">
            <div>
              <span className="font-bold text-[#141312] block text-sm">{article.author}</span>
              <span>{article.authorRole}</span>
            </div>
            <div className="flex items-center gap-3">
              <button title="Bookmark" className="p-2 rounded-full hover:bg-[#EFE9DD] transition-colors">
                <Bookmark className="w-4 h-4 text-[#141312]" />
              </button>
              <button title="Share" className="p-2 rounded-full hover:bg-[#EFE9DD] transition-colors">
                <Share2 className="w-4 h-4 text-[#141312]" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Article Content */}
        <article className="space-y-6">
          {article.sections.map((section, idx) => (
            <SectionRenderer key={idx} section={section} />
          ))}

          {/* Key Takeaways Box */}
          {article.keyTakeaways.length > 0 && (
            <div className="my-14 bg-[#141312] text-[#F4EFE6] p-8 sm:p-10 rounded-[2.5rem] border border-[#2D2825] shadow-2xl space-y-6">
              <div className="flex items-center gap-2 text-[#D94A26]">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase">
                  KEY TAKEAWAYS & STRATEGY
                </span>
              </div>
              <ul className="space-y-4 text-base sm:text-lg text-[#EFE9DD]">
                {article.keyTakeaways.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#D94A26] mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>

        {/* CTA Footer */}
        <div className="mt-20 pt-12 border-t border-[#D8D1C5] flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#EFE9DD] p-8 sm:p-10 rounded-3xl border border-[#D8D1C5]">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-2xl font-bold text-[#141312]">Ready to eliminate your automation gap?</h3>
            <p className="text-sm sm:text-base text-[#5A5450]">Talk to UBIK engineers and strategists about your systems.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-4 bg-[#D94A26] text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-[#c23e1e] transition-colors shrink-0 shadow-lg"
          >
            Start Your Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
