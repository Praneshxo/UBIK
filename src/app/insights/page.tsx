import { Metadata } from "next";
import { InsightsContent } from "./InsightsContent";

export const metadata: Metadata = {
  title: "Insights | K42 Digital Product Studio",
  description: "Thoughts on engineering, product thinking, startup lessons, AI, and scalable architecture.",
};

export default function InsightsPage() {
  return <InsightsContent />;
}
