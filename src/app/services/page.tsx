import { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services | K42 Digital Product Studio",
  description: "We build, automate, and scale digital products. Explore our services including Software Development, Product Design, and Technical Consulting.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
