import { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact | UBIK Digital Product Studio",
  description: "Let's build something great. Tell us about your idea and we'll get back to you within 24 hours.",
};

export default function ContactPage() {
  return <ContactContent />;
}
