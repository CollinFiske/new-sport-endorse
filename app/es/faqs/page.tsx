import FAQs from "@/components/FAQs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Sport Endorse",
  description: "Encuentra respuestas a preguntas comunes sobre la plataforma de patrocinio de atletas de Sport Endorse. Aprende sobre precios, términos de pago y cómo conectar con atletas de élite.",
  openGraph: {
    title: "Preguntas Frecuentes | Sport Endorse",
    description: "Encuentra respuestas a preguntas comunes sobre la plataforma de patrocinio de atletas de Sport Endorse. Aprende sobre precios, términos de pago y cómo conectar con atletas de élite.",
    type: "website",
    locale: "es_ES",
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