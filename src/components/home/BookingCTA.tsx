"use client";

import Link from "next/link";

const snowflakes = Array.from({ length: 36 }).map((_, i) => ({
  id: i,
  left: `${((i * 3.1) % 96) + 2}%`,
  size: `${(i % 3) * 1.5 + 2}px`,
  duration: `${5.5 + (i % 7) * 1.6}s`,
  delay: `${(i % 8) * 0.8}s`,
  opacity: 0.35 + (i % 4) * 0.18,
  blur: i % 3 === 0 ? "1px" : "0px",
}));

export function BookingCTA() {
  return (
    <section className="bg-[#F4EFE6] px-6 sm:px-10 md:px-14 py-16 md:py-20 font-sans">
      <style>{`
        @keyframes floatSnowfall {
          0% {
            transform: translateY(-20px) translateX(0px);
            opacity: 0;
          }
          15% {
            opacity: 0.9;
          }
          85% {
            opacity: 0.9;
          }
          100% {
            transform: translateY(440px) translateX(30px);
            opacity: 0;
          }
        }
      `}</style>

      <div className="max-w-[1600px] mx-auto">
        <div className="relative flex min-h-[26rem] md:min-h-[30rem] lg:min-h-[34rem] items-center justify-center overflow-hidden rounded-[2.2rem] md:rounded-[2.8rem] bg-[#0A0A0A] border border-white/10 px-6 py-14 md:py-20 text-center shadow-2xl">
          {/* Deep Black Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0E0E10] to-black opacity-95" />

          {/* Soft ambient white frost glows */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[550px] h-[300px] rounded-full bg-white/10 opacity-60 blur-[110px] pointer-events-none" />
          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[320px] rounded-full bg-white/5 opacity-50 blur-[130px] pointer-events-none" />

          {/* Animated Snowfall Particle Effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {snowflakes.map((flake) => (
              <span
                key={flake.id}
                className="absolute top-0 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                style={{
                  left: flake.left,
                  width: flake.size,
                  height: flake.size,
                  opacity: flake.opacity,
                  filter: flake.blur !== "0px" ? `blur(${flake.blur})` : undefined,
                  animation: `floatSnowfall ${flake.duration} linear infinite`,
                  animationDelay: flake.delay,
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl space-y-5 md:space-y-6">
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.08] text-white tracking-tight drop-shadow-md">
              Ready to Build
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-white/90 max-w-xl mx-auto">
              Let&apos;s talk about your idea and make a plan.
            </p>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base sm:text-lg font-semibold text-[#141312] transition-all duration-300 hover:bg-white/95 hover:scale-105 shadow-xl hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]"
              >
                <span>Book a Call</span>
                {/* Google Meet / Video Call Icon */}
                <svg
                  className="w-6 h-6 ml-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" rx="4" fill="white" />
                  <path
                    d="M17 9.5L14 11.5V9.5C14 8.94772 13.5523 8.5 13 8.5H6C5.44772 8.5 5 8.94772 5 9.5V14.5C5 15.0523 5.44772 15.5 6 15.5H13C13.5523 15.5 14 15.0523 14 14.5V12.5L17 14.5V9.5Z"
                    fill="#00832D"
                  />
                  <path d="M14 12.5L17 14.5V9.5L14 11.5V12.5Z" fill="#00AA47" />
                  <path d="M11.5 8.5H13C13.5523 8.5 14 8.94772 14 9.5V11L11.5 8.5Z" fill="#FFBA00" />
                  <path d="M5 12L7.5 15.5H6C5.44772 15.5 5 15.0523 5 14.5V12Z" fill="#EA4335" />
                  <path d="M14 12.5V14.5C14 15.0523 13.5523 15.5 13 15.5H11.5L14 12.5Z" fill="#0066DA" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
