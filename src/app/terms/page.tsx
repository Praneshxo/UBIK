import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Scale, FileCheck, ShieldAlert, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | UBIK Digital Product Studio",
  description: "Terms and conditions governing the use of UBIK services and website.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-[#F4EFE6] text-[#141312] font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#6E6A64] hover:text-[#D94A26] uppercase transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        {/* Header */}
        <header className="mb-16 border-b border-[#D8D1C5] pb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE9DD] border border-[#D8D1C5] text-xs font-bold text-[#D94A26] uppercase tracking-wider mb-6">
            <Scale className="w-4 h-4" /> Legal Framework
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter mb-4 text-[#141312]">
            Terms & Conditions
          </h1>
          <p className="text-sm font-mono text-[#6E6A64] uppercase tracking-wider">
            Effective Date: January 2026 · UBIK PVT LTD
          </p>
        </header>

        {/* Content */}
        <div className="space-y-12 text-[#2A2725] leading-relaxed">
          <section className="bg-[#EFE9DD]/60 p-8 rounded-3xl border border-[#D8D1C5]">
            <h2 className="text-xl font-bold text-[#141312] mb-3 flex items-center gap-3">
              <FileCheck className="w-5 h-5 text-[#D94A26]" /> 1. Agreement to Terms
            </h2>
            <p className="text-base text-[#4E4844]">
              By accessing our website, purchasing our services, or interacting with UBIK digital properties, 
              you agree to be bound by these Terms & Conditions. If you do not agree to all of these terms, 
              you are expressly prohibited from using our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#141312] flex items-center gap-3">
              <Award className="w-5 h-5 text-[#D94A26]" /> 2. Intellectual Property Rights
            </h2>
            <p className="text-base text-[#4E4844]">
              Unless otherwise specified in a formal Master Services Agreement (MSA) or Client Contract:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#4E4844]">
              <li><strong>Client Deliverables:</strong> Custom codebases, brand assets, and proprietary designs created specifically for a client become the full intellectual property of the client upon final payment.</li>
              <li><strong>UBIK Pre-existing Tech:</strong> Proprietary starter templates, internal AI orchestrations, and framework tools developed by UBIK prior to or outside of client engagements remain the exclusive property of UBIK PVT LTD.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#141312]">
              3. Scope of Services & Engagements
            </h2>
            <p className="text-base text-[#4E4844]">
              UBIK provides software development, AI integrations, workflow automation, and brand strategy services. 
              Project timelines, deliverables, payment milestones, and change-order procedures are defined in individual Statements of Work (SOW) executed between UBIK and the client.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#141312] flex items-center gap-3">
              <ShieldAlert className="w-5 h-5 text-[#D94A26]" /> 4. Limitation of Liability
            </h2>
            <p className="text-base text-[#4E4844]">
              To the maximum extent permitted by applicable law, UBIK shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages resulting from your access to or use of our digital platforms or services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#141312]">
              5. Governing Law
            </h2>
            <p className="text-base text-[#4E4844]">
              These terms shall be governed by and construed in accordance with applicable corporate and software commercial laws, without regard to its conflict of law principles.
            </p>
          </section>

          <section className="border-t border-[#D8D1C5] pt-10">
            <h2 className="text-xl font-bold text-[#141312] mb-3">Legal Inquiries</h2>
            <p className="text-base text-[#4E4844] mb-6">
              For legal notices or questions regarding service agreements, please contact our counsel team:
            </p>
            <a 
              href="mailto:legal@ubikstudio.com" 
              className="inline-flex items-center justify-center px-6 py-3 bg-[#141312] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#D94A26] transition-colors"
            >
              Contact Legal Team
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
