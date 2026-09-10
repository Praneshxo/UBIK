import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, Eye, FileText, Bell } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | UBIK Digital Product Studio",
  description: "Learn how UBIK protects your data, privacy, and intellectual rights.",
};

export default function PrivacyPage() {
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
            <ShieldCheck className="w-4 h-4" /> Legal & Transparency
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter mb-4 text-[#141312]">
            Privacy Policy
          </h1>
          <p className="text-sm font-mono text-[#6E6A64] uppercase tracking-wider">
            Last Updated: January 2026 · UBIK PVT LTD
          </p>
        </header>

        {/* Content */}
        <div className="space-y-12 text-[#2A2725] leading-relaxed">
          <section className="bg-[#EFE9DD]/60 p-8 rounded-3xl border border-[#D8D1C5]">
            <h2 className="text-xl font-bold text-[#141312] mb-3 flex items-center gap-3">
              <Lock className="w-5 h-5 text-[#D94A26]" /> Overview & Commitment
            </h2>
            <p className="text-base text-[#4E4844]">
              At UBIK ("we", "our", or "us"), we take data privacy and confidentiality seriously. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website, submit inquiries, or partner with us on digital product engineering.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#141312] flex items-center gap-3">
              <Eye className="w-5 h-5 text-[#D94A26]" /> 1. Information We Collect
            </h2>
            <p className="text-base">
              We collect information that you voluntarily provide to us when contacting us for project consultations or services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#4E4844]">
              <li><strong>Contact Information:</strong> Full name, corporate email address, telephone number, and company name.</li>
              <li><strong>Project Details:</strong> Business requirements, budget estimates, technical specifications, and timeline goals submitted via our contact forms.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, and site interaction statistics collected through privacy-focused analytics.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#141312] flex items-center gap-3">
              <FileText className="w-5 h-5 text-[#D94A26]" /> 2. How We Use Your Information
            </h2>
            <p className="text-base">
              Your information is strictly used to deliver high-quality digital product development services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#4E4844]">
              <li>To evaluate project inquiries and provide tailored technical proposals.</li>
              <li>To execute Non-Disclosure Agreements (NDAs) and client contracts.</li>
              <li>To optimize site performance and user experience across our digital touchpoints.</li>
              <li>To communicate project milestones, technical updates, and system architecture reviews.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-[#141312] flex items-center gap-3">
              <Bell className="w-5 h-5 text-[#D94A26]" /> 3. Data Protection & Sharing
            </h2>
            <p className="text-base text-[#4E4844]">
              We <strong>never sell, rent, or trade</strong> your personal or corporate data to third parties. 
              All project specifications and client data remain protected under strict encryption standards. We may only disclose data if required by law or to enforce legal agreements.
            </p>
          </section>

          <section className="border-t border-[#D8D1C5] pt-10">
            <h2 className="text-xl font-bold text-[#141312] mb-3">Questions & Data Requests</h2>
            <p className="text-base text-[#4E4844] mb-6">
              If you have any questions regarding this Privacy Policy or wish to request data deletion, please contact our data privacy team directly:
            </p>
            <a 
              href="mailto:privacy@ubikstudio.com" 
              className="inline-flex items-center justify-center px-6 py-3 bg-[#141312] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#D94A26] transition-colors"
            >
              Contact Privacy Team
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
