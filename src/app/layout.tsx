import type { Metadata } from "next";
import { Inter, Caveat, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "UBIK | Digital Product Studio",
  description:
    "Building businesses through technology. UBIK is a Digital Product Studio helping startups and growing businesses build, automate and scale using software, AI, branding and digital systems.",
  icons: {
    icon: "/Logo.png",
    shortcut: "/Logo.png",
    apple: "/Logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body
        className={`${inter.className} ${caveat.variable} ${playfair.variable} min-h-full flex flex-col bg-[#F4EFE6] text-[#141312] selection:bg-[#D94A26] selection:text-white`}
      >
        <Navbar />
        <main className="flex-1 flex flex-col pt-[65px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
