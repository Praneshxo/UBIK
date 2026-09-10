import Link from "next/link";
import {
  ArrowUpRight,
  ClipboardCheck,
  MessageSquareText,
  Rocket,
} from "lucide-react";

const steps = [
  {
    label: "Step 1",
    title: "Choose Your Plan",
    href: "/services",
    className: "lg:translate-y-0",
    description: "Pick the engagement shape that fits your product stage.",
    icon: ClipboardCheck,
  },
  {
    label: "Step 2",
    title: "Share Your Brief",
    href: "/contact",
    className: "lg:translate-y-40",
    description: "Send the context, goals, blockers, and timeline.",
    icon: MessageSquareText,
  },
  {
    label: "Step 3",
    title: "We Start in 10 mins.",
    href: "/contact",
    className: "lg:translate-y-24",
    description: "We confirm the next move and begin shaping execution.",
    icon: Rocket,
  },
];

export function GettingStarted() {
  return (
    <section className="relative border-t border-white/10 bg-black px-6 py-24 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="font-serif text-4xl leading-tight text-white md:text-5xl">
            How to Get Started
          </h2>
          <p className="mt-5 text-base text-white/70">
            A straightforward path from your first brief to your first update
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3 lg:min-h-[34rem] lg:items-start">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <Link
                key={step.label}
                href={step.href}
                className={`group flex min-h-[25rem] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-card transition-all duration-300 hover:-translate-y-2 hover:border-accent/50 ${step.className}`}
              >
                <div className="relative h-48 border-b border-white/10 bg-[linear-gradient(135deg,rgba(196,181,253,0.16),rgba(255,255,255,0.03)_42%,rgba(255,255,255,0.06))]">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
                  <div className="absolute left-8 top-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-accent/35 bg-black/55 text-accent">
                    <Icon className="h-9 w-9" />
                  </div>
                  <div className="absolute bottom-8 right-8 text-7xl font-bold tracking-tighter text-white/[0.04]">
                    {step.label.replace("Step ", "0")}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm font-bold uppercase tracking-wider text-accent">
                    {step.label}
                  </p>
                  <div className="mt-6 flex items-end justify-between gap-6">
                    <div>
                      <h3 className="max-w-[13rem] text-4xl font-bold leading-tight tracking-tight text-white">
                        {step.title}
                      </h3>
                      <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
                        {step.description}
                      </p>
                    </div>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/60 text-accent transition-colors group-hover:bg-accent group-hover:text-black">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
