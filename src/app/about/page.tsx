import { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About | K42 Digital Product Studio",
  description: "We are a digital product studio. We solve business problems with software, AI, and scalable digital systems.",
};

export default function AboutPage() {
  return <AboutContent />;
}
