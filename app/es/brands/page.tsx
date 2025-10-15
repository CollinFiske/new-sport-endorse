import BrandsContent from "@/components/BrandsContent";
import translations from "@/utils/translations";
import "../../../styles/brands.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Encuentra Atletas de Élite e Influencers Deportivos para tu Marca | Sport Endorse",
  description: "Descubre atletas de élite e influencers deportivos para mejorar la visibilidad de tu marca. Sport Endorse te ayuda a gestionar patrocinios de atletas y campañas de marketing deportivo.",
  alternates: {
    canonical: "https://sportendorse.com/es/brands",
    languages: {
      'en': 'https://sportendorse.com/brands',
      'es': 'https://sportendorse.com/es/brands',
      'de': 'https://sportendorse.com/de/brands',
      'x-default': 'https://sportendorse.com/brands'
    }
  },
  openGraph: {
    title: "Encuentra Atletas de Élite e Influencers Deportivos para tu Marca | Sport Endorse",
    description: "Descubre atletas de élite e influencers deportivos para mejorar la visibilidad de tu marca. Sport Endorse te ayuda a gestionar patrocinios de atletas y campañas de marketing deportivo.",
    type: "website",
    locale: "es_ES",
    url: "https://sportendorse.com/es/brands",
    siteName: "Sport Endorse",
    alternateLocale: ['en_US', 'de_DE']
  },
};

export default function BrandsPageSpanish() {
  const t = translations.es.brands;
  
  return (
    <BrandsContent 
      badge={t.badge}
      title={t.title}
      description={t.description}
      featuredAthletes={t.featuredAthletes}
      viewAll={t.viewAll}
      sports={t.sports}
    />
  );
}