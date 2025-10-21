import FAQs from "@/components/FAQs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Häufig Gestellte Fragen | Sport Endorse",
  description: "Finden Sie Antworten auf häufige Fragen zur Athleten-Sponsoring-Plattform von Sport Endorse. Erfahren Sie über Preise, Zahlungsbedingungen und wie Sie sich mit Elite-Athleten verbinden.",
  openGraph: {
    title: "Häufig Gestellte Fragen | Sport Endorse",
    description: "Finden Sie Antworten auf häufige Fragen zur Athleten-Sponsoring-Plattform von Sport Endorse. Erfahren Sie über Preise, Zahlungsbedingungen und wie Sie sich mit Elite-Athleten verbinden.",
    type: "website",
    locale: "de_DE",
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