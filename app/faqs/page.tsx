import FAQs from "@/components/FAQs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Sport Endorse",
  description: "Find answers to common questions about Sport Endorse's athlete sponsorship platform. Learn about pricing, payment terms, and how to connect with elite athletes.",
  openGraph: {
    title: "Frequently Asked Questions | Sport Endorse",
    description: "Find answers to common questions about Sport Endorse's athlete sponsorship platform. Learn about pricing, payment terms, and how to connect with elite athletes.",
    type: "website",
    locale: "en_US",
    siteName: "Sport Endorse"
  },
};

export default function FAQsPage() {
  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1rem" }}>
      <FAQs />
    </main>
  );
}