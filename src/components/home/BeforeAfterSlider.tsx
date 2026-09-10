"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <section className="bg-[#1E1715] text-[#F4EFE6] pt-2 md:pt-4 pb-20 md:pb-32 px-6 sm:px-10 md:px-14 font-sans relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto space-y-8 md:space-y-12">
        {/* Header Title & Subtitle */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal leading-tight text-[#F4EFE6] tracking-tight">
            From Idea to Execution in Days not Weeks
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#C4B8B4] font-medium">
            We use AI powered workflows to get you faster results
          </p>
        </div>

        {/* Before / After Image Slider (Exact 1080x1137 aspect ratio - Full height display with 0% cropping) */}
        <div className="max-w-[700px] sm:max-w-[800px] md:max-w-[880px] mx-auto">
          <div
            ref={containerRef}
            onMouseDown={(e) => {
              setIsDragging(true);
              handleMove(e.clientX);
            }}
            onTouchStart={(e) => {
              setIsDragging(true);
              handleMove(e.touches[0].clientX);
            }}
            className="relative w-full aspect-[1080/1137] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 cursor-ew-resize select-none"
          >
            {/* Background Image: Polished Production Site (Right) */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/polished_site.webp"
                alt="Polished Site"
                fill
                priority
                className="object-contain"
              />
              <span className="absolute top-4 right-4 bg-[#1E1715]/85 backdrop-blur-md text-[#F4EFE6] text-[10px] sm:text-xs font-semibold px-3.5 py-1.5 rounded-full tracking-wider uppercase border border-white/15 z-10">
                Polished Result
              </span>
            </div>

            {/* Foreground Image: Rough Sketch (Left) clipped dynamically */}
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
              }}
            >
              <Image
                src="/rough_sketch.webp"
                alt="Rough Sketch"
                fill
                priority
                className="object-contain"
              />
              <span className="absolute top-4 left-4 bg-[#1E1715]/85 backdrop-blur-md text-[#F4EFE6] text-[10px] sm:text-xs font-semibold px-3.5 py-1.5 rounded-full tracking-wider uppercase border border-white/15 z-10">
                Rough Wireframe
              </span>
            </div>

            {/* Vertical Split Line */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-[#D94A26] shadow-[0_0_12px_rgba(217,74,38,0.9)] z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            />

            {/* Central Drag Knob Handle */}
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#D94A26] text-white shadow-2xl flex items-center justify-center border-2 border-[#F4EFE6] cursor-ew-resize hover:scale-110 active:scale-95 transition-transform"
              style={{ left: `${sliderPosition}%` }}
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 8L22 12L18 16" />
                <path d="M6 8L2 12L6 16" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
