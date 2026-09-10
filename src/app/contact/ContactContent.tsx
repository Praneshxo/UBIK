"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { CheckCircle2, Loader2 } from "lucide-react";
import { submitContactForm } from "../actions/contact";

export function ContactContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".animate-up",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const result = await submitContactForm(formData);

    setIsSubmitting(false);

    if (result.success) {
      setIsSuccess(true);
      
      // Success animation
      gsap.to(formRef.current, {
        opacity: 0,
        y: -50,
        duration: 0.5,
        display: "none",
        onComplete: () => {
          gsap.fromTo(
            successRef.current,
            { opacity: 0, scale: 0.8, display: "flex" },
            { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" }
          );
        }
      });
    }
  }

  return (
    <div ref={containerRef} className="min-h-screen pt-32 pb-24 px-6 relative overflow-hidden bg-[#F4EFE6] text-[#141312]">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D94A26]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="animate-up mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-[#141312]">
            Let's Build Something <span className="text-[#D94A26]">Great</span>.
          </h1>
          <p className="text-lg md:text-xl text-[#141312] font-semibold opacity-90">
            Tell us about your idea, and we'll help you bring it to life.
          </p>
        </div>

        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className="animate-up bg-[#141312] text-[#F4EFE6] p-8 md:p-12 rounded-[2.5rem] border border-[#2D2825] shadow-2xl space-y-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-bold tracking-wider text-[#EFE9DD] uppercase">Full Name</label>
              <input required type="text" id="name" name="name" className="w-full bg-[#1C1A18] text-[#F4EFE6] border border-[#3A3531] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#D94A26] focus:ring-1 focus:ring-[#D94A26] transition-all placeholder:text-[#8C847C]" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label htmlFor="company" className="text-xs font-bold tracking-wider text-[#EFE9DD] uppercase">Company</label>
              <input type="text" id="company" name="company" className="w-full bg-[#1C1A18] text-[#F4EFE6] border border-[#3A3531] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#D94A26] focus:ring-1 focus:ring-[#D94A26] transition-all placeholder:text-[#8C847C]" placeholder="Acme Corp" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-bold tracking-wider text-[#EFE9DD] uppercase">Email</label>
              <input required type="email" id="email" name="email" className="w-full bg-[#1C1A18] text-[#F4EFE6] border border-[#3A3531] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#D94A26] focus:ring-1 focus:ring-[#D94A26] transition-all placeholder:text-[#8C847C]" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-xs font-bold tracking-wider text-[#EFE9DD] uppercase">Phone</label>
              <input type="tel" id="phone" name="phone" className="w-full bg-[#1C1A18] text-[#F4EFE6] border border-[#3A3531] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#D94A26] focus:ring-1 focus:ring-[#D94A26] transition-all placeholder:text-[#8C847C]" placeholder="+1 (555) 000-0000" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="website" className="text-xs font-bold tracking-wider text-[#EFE9DD] uppercase">Company Website</label>
              <input type="url" id="website" name="website" className="w-full bg-[#1C1A18] text-[#F4EFE6] border border-[#3A3531] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#D94A26] focus:ring-1 focus:ring-[#D94A26] transition-all placeholder:text-[#8C847C]" placeholder="https://example.com" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="projectType" className="text-xs font-bold tracking-wider text-[#EFE9DD] uppercase">Project Type</label>
              <select required id="projectType" name="projectType" className="w-full bg-[#1C1A18] text-[#F4EFE6] border border-[#3A3531] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#D94A26] focus:ring-1 focus:ring-[#D94A26] transition-all appearance-none">
                <option value="" className="bg-[#1C1A18] text-[#F4EFE6]">Select a project type</option>
                <option value="Software" className="bg-[#1C1A18] text-[#F4EFE6]">Software Development</option>
                <option value="AI" className="bg-[#1C1A18] text-[#F4EFE6]">AI Agents & Integrations</option>
                <option value="Automation" className="bg-[#1C1A18] text-[#F4EFE6]">Workflow Automation</option>
                <option value="Branding" className="bg-[#1C1A18] text-[#F4EFE6]">Product Design & Branding</option>
                <option value="SEO" className="bg-[#1C1A18] text-[#F4EFE6]">SEO & Technical Optimization</option>
                <option value="Consulting" className="bg-[#1C1A18] text-[#F4EFE6]">Technical Consulting</option>
                <option value="Other" className="bg-[#1C1A18] text-[#F4EFE6]">Other</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="budget" className="text-xs font-bold tracking-wider text-[#EFE9DD] uppercase">Budget</label>
              <select required id="budget" name="budget" className="w-full bg-[#1C1A18] text-[#F4EFE6] border border-[#3A3531] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#D94A26] focus:ring-1 focus:ring-[#D94A26] transition-all appearance-none">
                <option value="" className="bg-[#1C1A18] text-[#F4EFE6]">Select a budget range</option>
                <option value="Under ₹50K" className="bg-[#1C1A18] text-[#F4EFE6]">Under ₹50K</option>
                <option value="₹50K–₹2L" className="bg-[#1C1A18] text-[#F4EFE6]">₹50K–₹2L</option>
                <option value="₹2L–₹5L" className="bg-[#1C1A18] text-[#F4EFE6]">₹2L–₹5L</option>
                <option value="₹5L+" className="bg-[#1C1A18] text-[#F4EFE6]">₹5L+</option>
              </select>
            </div>

            <div className="space-y-2 md:col-span-2">
              <label htmlFor="timeline" className="text-xs font-bold tracking-wider text-[#EFE9DD] uppercase">Timeline</label>
              <input type="text" id="timeline" name="timeline" className="w-full bg-[#1C1A18] text-[#F4EFE6] border border-[#3A3531] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#D94A26] focus:ring-1 focus:ring-[#D94A26] transition-all placeholder:text-[#8C847C]" placeholder="e.g. 1 month, ASAP, Q3" />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label htmlFor="message" className="text-xs font-bold tracking-wider text-[#EFE9DD] uppercase">Project Details</label>
              <textarea required id="message" name="message" rows={5} className="w-full bg-[#1C1A18] text-[#F4EFE6] border border-[#3A3531] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#D94A26] focus:ring-1 focus:ring-[#D94A26] transition-all resize-none placeholder:text-[#8C847C]" placeholder="Tell us more about your business goals and what you want to achieve..." />
            </div>

            <div className="md:col-span-2 flex items-center gap-3">
              <input required type="checkbox" id="agree" name="agree" className="w-5 h-5 rounded bg-[#1C1A18] border-[#3A3531] accent-[#D94A26] cursor-pointer" />
              <label htmlFor="agree" className="text-sm text-[#C8C2BC] cursor-pointer select-none">I agree to be contacted regarding this enquiry.</label>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto px-8 py-4 bg-[#D94A26] hover:bg-[#c23e1e] text-white font-bold rounded-full transition-all uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_0_25px_rgba(217,74,38,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              "Start Your Project"
            )}
          </button>
        </form>

        <div 
          ref={successRef} 
          className="hidden flex-col items-center justify-center text-center bg-[#141312] text-[#F4EFE6] p-16 rounded-[2.5rem] border border-[#2D2825] shadow-2xl"
        >
          <div className="w-20 h-20 bg-[#D94A26]/20 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="w-10 h-10 text-[#D94A26]" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Thank you.</h2>
          <p className="text-[#C8C2BC] text-lg max-w-md">
            We'll review your enquiry and get back within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
}
