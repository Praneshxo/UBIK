"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Menu } from "lucide-react";

export function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fade in for navbar
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-[#F4EFE6]/90 border-b border-[#D8D1C5] text-[#141312]"
    >
      <Link href="/" className="flex items-center">
        <Image
          src="/Logo.png"
          alt="UBIK Logo"
          width={120}
          height={32}
          style={{ width: "auto" }}
          className="h-8 w-auto object-contain"
          priority
        />
      </Link>

      <nav className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest text-[#6E6A64] uppercase">
        <Link href="/services" className="hover:text-[#141312] transition-colors">
          Services
        </Link>
        <Link href="/insights" className="hover:text-[#141312] transition-colors">
          Insights
        </Link>
        <Link href="/about" className="hover:text-[#141312] transition-colors">
          About
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center justify-center px-5 py-2 text-xs font-bold tracking-wider text-white bg-[#141312] rounded-full hover:bg-[#D94A26] transition-colors uppercase"
        >
          Start Your Project
        </Link>
        <button className="md:hidden p-2 text-[#141312] hover:text-[#D94A26]">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}

