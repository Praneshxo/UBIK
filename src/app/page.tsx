import { Hero } from "@/components/home/Hero";
import { Process } from "@/components/home/Process";
import { BeforeAfterSlider } from "@/components/home/BeforeAfterSlider";
import { Services } from "@/components/home/Services";
import { BookingCTA } from "@/components/home/BookingCTA";
import { StickyWhyBuild } from "@/components/home/StickyWhyBuild";
import { Insights } from "@/components/home/Insights";

export default function Home() {
  return (
    <>
      <Hero />
      <Process />
      <BeforeAfterSlider />
      <Services />
      <StickyWhyBuild />
      <Insights />
      <BookingCTA />
    </>
  );
}
