import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Briefcase, Sparkles, MapPin, Clock, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | UBIK Digital Product Studio",
  description: "Join UBIK and build Next-Gen AI, Software, and Digital Systems with us.",
};

const OPEN_POSITIONS = [
  {
    id: "fullstack-lead",
    title: "Senior Full-Stack Engineer (Next.js / React / Node)",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-Time",
    description: "Lead the architectural development of high-performance web applications, AI integrations, and reactive frontend experiences for global startups.",
    requirements: ["5+ years TypeScript & React/Next.js experience", "Deep knowledge of Web Vitals & Turbopack", "Experience integrating LLMs / AI APIs"],
  },
  {
    id: "ai-systems-architect",
    title: "AI & Automation Systems Engineer",
    department: "AI & Infrastructure",
    location: "Remote",
    type: "Full-Time",
    description: "Design autonomous AI workflow agents, vector search indexing pipelines, and system orchestrations for enterprise automation.",
    requirements: ["Strong proficiency in Python, Node.js, and Async pipelines", "Hands-on experience with LangChain / LlamaIndex / Agent frameworks", "API architecture and database performance"],
  },
  {
    id: "product-designer",
    title: "Lead Digital Product Designer (UI/UX / Motion)",
    department: "Design & Brand",
    location: "Remote / Hybrid",
    type: "Full-Time",
    description: "Craft state-of-the-art visual systems, interactive prototypes, micro-animations, and luxury web design identity for UBIK clients.",
    requirements: ["Figma, Motion graphics, GSAP & Web animation mastery", "Obsession with typography and grid systems", "Strong portfolio of web products"],
  },
  {
    id: "brand-strategist",
    title: "Technical Content Strategist & Writer",
    department: "Strategy",
    location: "Remote",
    type: "Part-Time / Contract",
    description: "Produce technical whitepapers, deep-dive articles, and strategic brand messaging for software and AI innovation.",
    requirements: ["Background in technical copywriting", "Understanding of SaaS, AI, and developer tools", "Impeccable editorial clarity"],
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-[#F4EFE6] text-[#141312] font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#6E6A64] hover:text-[#D94A26] uppercase transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        {/* Header */}
        <header className="mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE9DD] border border-[#D8D1C5] text-xs font-bold text-[#D94A26] uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4" /> We Are Hiring
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter mb-6 text-[#141312]">
            Build The Future <br className="hidden sm:inline" />
            With <span className="text-[#D94A26]">UBIK</span>.
          </h1>
          <p className="text-lg sm:text-xl text-[#5A5450] max-w-2xl leading-relaxed">
            We are a digital product studio engineering high-impact software, AI automation, and brand systems. We look for obsessed builders who take pride in exceptional craft.
          </p>
        </header>

        {/* Core Values / Benefits */}
        <section className="grid sm:grid-cols-3 gap-6 mb-20">
          <div className="bg-[#EFE9DD] p-7 rounded-3xl border border-[#D8D1C5]">
            <h3 className="text-lg font-bold text-[#141312] mb-2 uppercase tracking-wide">01 / Autonomy</h3>
            <p className="text-sm text-[#5A5450]">We don't micromanage. Own your projects end-to-end with full creative and technical freedom.</p>
          </div>
          <div className="bg-[#EFE9DD] p-7 rounded-3xl border border-[#D8D1C5]">
            <h3 className="text-lg font-bold text-[#141312] mb-2 uppercase tracking-wide">02 / High Craft</h3>
            <p className="text-sm text-[#5A5450]">Zero compromise on quality. We build products that set industry benchmarks in design and speed.</p>
          </div>
          <div className="bg-[#EFE9DD] p-7 rounded-3xl border border-[#D8D1C5]">
            <h3 className="text-lg font-bold text-[#141312] mb-2 uppercase tracking-wide">03 / AI-Native</h3>
            <p className="text-sm text-[#5A5450]">Work with cutting-edge AI toolchains, custom agents, and modern framework architectures.</p>
          </div>
        </section>

        {/* Open Positions List */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b border-[#D8D1C5] pb-6">
            <h2 className="text-2xl font-bold tracking-tight text-[#141312] flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-[#D94A26]" /> Open Roles
            </h2>
            <span className="text-xs font-mono text-[#6E6A64] uppercase tracking-wider">
              {OPEN_POSITIONS.length} Positions Active
            </span>
          </div>

          <div className="space-y-6">
            {OPEN_POSITIONS.map((role) => (
              <div 
                key={role.id}
                className="group bg-[#141312] text-[#F4EFE6] p-8 rounded-[2rem] border border-[#2D2825] transition-all duration-300 hover:border-[#D94A26]/80 hover:shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-3 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono tracking-wider text-[#D94A26] uppercase">
                    <span>{role.department}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1 text-[#C8C2BC]"><MapPin className="w-3 h-3" /> {role.location}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1 text-[#C8C2BC]"><Clock className="w-3 h-3" /> {role.type}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#D94A26] transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-sm text-[#A8A29D] leading-relaxed">
                    {role.description}
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2">
                    {role.requirements.map((req, i) => (
                      <span key={i} className="text-[11px] px-3 py-1 rounded-full bg-[#24211F] text-[#D8D1C5] border border-white/5">
                        {req}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0">
                  <Link
                    href={`/contact?role=${encodeURIComponent(role.title)}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#D94A26] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#c23e1e] transition-all shadow-md group-hover:shadow-[0_0_20px_rgba(217,74,38,0.4)]"
                  >
                    Apply Now <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* General Application Banner */}
        <section className="mt-16 bg-[#EFE9DD] border border-[#D8D1C5] p-10 rounded-[2rem] text-center space-y-4">
          <h3 className="text-2xl font-bold text-[#141312]">Don't see your specific role?</h3>
          <p className="text-sm text-[#5A5450] max-w-xl mx-auto">
            We are always eager to meet world-class talent. Send your portfolio or GitHub profile directly to our team.
          </p>
          <a
            href="mailto:careers@ubikstudio.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#141312] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#D94A26] transition-colors"
          >
            Send General Application
          </a>
        </section>
      </div>
    </div>
  );
}
