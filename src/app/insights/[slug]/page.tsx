import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight, Share2, Bookmark } from "lucide-react";
import { notFound } from "next/navigation";

interface ArticleData {
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
}

const ARTICLES_DATABASE: Record<string, ArticleData> = {
  "startups-build-before-research": {
    title: "Why Most Startups Build Before They Research — And How to Fix It",
    category: "Product Strategy",
    date: "Aug 12, 2026",
    readTime: "8 min read",
    author: "Alex Rivers",
    authorRole: "Head of Product Strategy @ UBIK",
    excerpt: "Building software without validated customer friction is the #1 cause of startup failure. Here is our 4-step discovery framework to validate before writing code.",
    content: [
      "The most dangerous trap in tech startup execution is premature engineering. Thousands of founders spend months coding complex architectures, building microservices, and fine-tuning UX details before verifying whether anyone actually wants the problem solved.",
      "At UBIK, we advocate for a strict 'Friction-First Discovery Phase' — where every single feature assumption must be backed by qualitative user evidence or direct workflow analysis.",
      "When you rush into code without validating user workflows, technical debt isn't your main threat — value debt is. You end up with immaculate, production-grade software that nobody uses.",
      "To avoid this, follow our core principle: run minimum viable proof of value (MVPoV) through rapid prototypes, user interviews, and landing page experiments before deploying a single backend container."
    ],
    keyTakeaways: [
      "Talk to at least 15 prospective users experiencing the problem daily before opening an IDE.",
      "Build interactive wireframes and test task completion speed before building database models.",
      "Scope v1 to solve exactly ONE painful workflow with 10x superior UX."
    ]
  },
  "5-business-processes-to-automate": {
    title: "5 High-ROI Business Processes You Should Automate with AI Today",
    category: "AI & Automation",
    date: "Jul 28, 2026",
    readTime: "5 min read",
    author: "Elena Rostova",
    authorRole: "Lead AI Engineer @ UBIK",
    excerpt: "Stop wasting engineering hours on repetitive operational tasks. Discover 5 high-impact business workflows AI agents can automate seamlessly right now.",
    content: [
      "Artificial Intelligence has moved beyond simple chat interface toys into autonomous execution engines. Organizations that integrate LLM agent workflows into their daily operations save hundreds of operational hours per month.",
      "Here are 5 key business processes ready for instant automation with immediate ROI:",
      "1. Customer Support & Inquiry Triage: Autonomous routing of inbound support tickets based on intent and sentiment.",
      "2. Invoicing & Document Extraction: Parsing PDFs, receipts, and contracts into structured JSON databases without manual data entry.",
      "3. Automated Lead Qualification: Scoring sales leads against CRM parameters in real-time.",
      "4. Code & Technical Audit Reports: Running automated compliance, security, and performance audits across code repositories.",
      "5. Content & Report Synthesis: Generating executive summaries from daily operational data feeds."
    ],
    keyTakeaways: [
      "Start with high-volume, structured text processes for the highest initial ROI.",
      "Always include human-in-the-loop validation for critical financial or legal actions.",
      "Use custom vector embeddings to ground AI responses in your company's internal documentation."
    ]
  },
  "branding-perception-not-just-logo": {
    title: "Branding Isn't Just a Logo. It's Perception, Strategy & Trust",
    category: "Brand Strategy",
    date: "Jul 15, 2026",
    readTime: "6 min read",
    author: "Marcus Vance",
    authorRole: "Creative Director @ UBIK",
    excerpt: "A logo is only a visual bookmark. True brand identity is the complete psychological perception your company leaves in the minds of your customers.",
    content: [
      "When companies approach us asking for a 'new logo', our first response is to ask: 'What feeling do you want to evoke when a customer touches your product?'",
      "Brand strategy goes far beyond color swatches and iconography. It dictates typography hierarchy, tone of voice, interactive micro-animations, loading speeds, and overall product polish.",
      "In modern software, your user interface IS your brand. If your software feels sluggish, confusing, or visually cluttered, no glossy logo can salvage customer trust.",
      "Design systems created at UBIK ensure that every button, transition, modal, and piece of copy reinforces a unified brand promise of precision, power, and elegance."
    ],
    keyTakeaways: [
      "Align brand visual identity with real product interaction design.",
      "Establish a consistent typographic system and voice across marketing & web apps.",
      "Treat design tokens and design systems as living code artifacts."
    ]
  },
  "scalable-nextjs-architectures-b2b": {
    title: "Building Scalable Next.js Architectures for B2B Systems",
    category: "Engineering",
    date: "Jun 30, 2026",
    readTime: "7 min read",
    author: "David Chen",
    authorRole: "Principal Architect @ UBIK",
    excerpt: "Architecting enterprise B2B SaaS platforms with Next.js App Router, Turbopack, and edge caching for sub-100ms response times.",
    content: [
      "B2B SaaS applications demand bulletproof performance, strict authentication models, and real-time data sync capabilities. Leveraging Next.js for high-throughput enterprise systems requires careful structural planning.",
      "We break down modular server components, optimized client-side hydration, edge middleware caching strategies, and robust error handling patterns for production readiness."
    ],
    keyTakeaways: [
      "Separate server-only data logic from interactive client UI components.",
      "Utilize dynamic route pre-fetching and granular caching keys.",
      "Enforce strict TypeScript interfaces across API routes and client schemas."
    ]
  },
  "product-thinking-over-feature-factories": {
    title: "Product Thinking over Feature Factories: Driving True Business Metrics",
    category: "Product Thinking",
    date: "Jun 10, 2026",
    readTime: "4 min read",
    author: "Alex Rivers",
    authorRole: "Head of Product Strategy @ UBIK",
    excerpt: "Shipping features faster isn't the goal. Solving business problems with minimal product surface area is.",
    content: [
      "Feature velocity is a vanity metric if those features don't move business KPIs. Teams often get trapped in 'feature factory' mode, delivering endless backlogs while user retention remains flat.",
      "Product thinking shifts focus from output to outcomes — measuring real impact on user activation, task speed, and customer lifetime value."
    ],
    keyTakeaways: [
      "Measure features by adoption and retention impact, not velocity.",
      "Kill unused or underperforming features relentlessly to keep products lean.",
      "Focus product roadmaps around core user outcomes."
    ]
  },
  "modern-ui-ux-data-dense-apps": {
    title: "Modern UI/UX Principles for Data-Dense Applications",
    category: "UI/UX Design",
    date: "May 22, 2026",
    readTime: "9 min read",
    author: "Marcus Vance",
    authorRole: "Creative Director @ UBIK",
    excerpt: "How to display complex dashboards, financial tables, and real-time feeds without overwhelming user cognitive load.",
    content: [
      "Data-dense applications present unique UX challenges. When users must analyze hundreds of data points simultaneously, visual hierarchy and micro-interactions become critical.",
      "By using contextual progressive disclosure, dark-mode high-contrast typography, and adaptive container queries, complex software becomes intuitive and effortless."
    ],
    keyTakeaways: [
      "Use progressive disclosure to hide secondary options until hovered or requested.",
      "Optimize data grid rendering with virtualization for thousands of records.",
      "Apply strict typographic scales to maintain readability in data tables."
    ]
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES_DATABASE[slug];
  if (!article) {
    return { title: "Insight Article | UBIK Digital Product Studio" };
  }
  return {
    title: `${article.title} | UBIK Insights`,
    description: article.excerpt,
  };
}

export default async function InsightArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = ARTICLES_DATABASE[slug] || {
    title: slug.replace(/-/g, " ").toUpperCase(),
    category: "Insights",
    date: "2026",
    readTime: "5 min read",
    author: "UBIK Editorial Team",
    authorRole: "Digital Product Studio",
    excerpt: "Deep dive insights into software engineering, AI automation, product strategy, and design.",
    content: [
      "At UBIK, we continuously document our engineering methodologies, product strategy frameworks, and design system practices to help startups and enterprises build world-class software.",
      "Whether you are architecting a new AI agent system, modernizing a legacy B2B platform, or refining brand positioning, focus on building with craft, speed, and strategic intent."
    ],
    keyTakeaways: [
      "Focus on customer value and friction points first.",
      "Adopt modern web standards and rapid AI tooling.",
      "Maintain high visual and engineering standards."
    ]
  };

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
            <span className="px-3.5 py-1 rounded-full bg-[#EFE9DD] border border-[#D8D1C5]">{article.category}</span>
            <span>·</span>
            <span className="flex items-center gap-1 text-[#6E6763]"><Calendar className="w-3.5 h-3.5" /> {article.date}</span>
            <span>·</span>
            <span className="flex items-center gap-1 text-[#6E6763]"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#141312] leading-[1.1]">
            {article.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#5A5450] leading-relaxed font-medium">
            {article.excerpt}
          </p>

          {/* Author info */}
          <div className="pt-4 flex items-center justify-between text-xs font-mono text-[#6E6763] border-t border-[#D8D1C5]/60">
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

        {/* Main Body */}
        <article className="space-y-8 text-base sm:text-lg text-[#2A2725] leading-relaxed">
          {article.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}

          {/* Key Takeaways Box */}
          {article.keyTakeaways.length > 0 && (
            <div className="my-12 bg-[#141312] text-[#F4EFE6] p-8 sm:p-10 rounded-[2rem] border border-[#2D2825] shadow-2xl space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-[#D94A26] uppercase block">
                KEY TAKEAWAYS &amp; STRATEGY
              </span>
              <ul className="space-y-3 text-sm sm:text-base text-[#EFE9DD]">
                {article.keyTakeaways.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#D94A26] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>

        {/* CTA Footer */}
        <div className="mt-20 pt-12 border-t border-[#D8D1C5] flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#EFE9DD] p-8 rounded-3xl border border-[#D8D1C5]">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-[#141312]">Ready to execute your idea?</h3>
            <p className="text-sm text-[#5A5450]">Talk to UBIK engineers and strategists about your project.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#D94A26] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#c23e1e] transition-colors shrink-0 shadow-md"
          >
            Start Your Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
