import BrandsContent from "@/components/BrandsContent";
import translations from "@/utils/translations";
import "../../../styles/brands.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finden Sie Elite-Athleten & Sport-Influencer für Ihre Marke | Sport Endorse",
  description: "Entdecken Sie Elite-Athleten und Sport-Influencer zur Steigerung der Sichtbarkeit Ihrer Marke. Sport Endorse hilft Ihnen bei der Verwaltung von Athleten-Sponsoring und Sport-Marketing-Kampagnen.",
  alternates: {
    canonical: "https://sportendorse.com/de/brands",
    languages: {
      'en': 'https://sportendorse.com/brands',
      'es': 'https://sportendorse.com/es/brands',
      'de': 'https://sportendorse.com/de/brands',
      'x-default': 'https://sportendorse.com/brands'
    }
  },
  openGraph: {
    title: "Finden Sie Elite-Athleten & Sport-Influencer für Ihre Marke | Sport Endorse",
    description: "Entdecken Sie Elite-Athleten und Sport-Influencer zur Steigerung der Sichtbarkeit Ihrer Marke. Sport Endorse hilft Ihnen bei der Verwaltung von Athleten-Sponsoring und Sport-Marketing-Kampagnen.",
    type: "website",
    locale: "de_DE",
    url: "https://sportendorse.com/de/brands",
    siteName: "Sport Endorse",
    alternateLocale: ['en_US', 'es_ES']
  },
};

export default function BrandsPageGerman() {
  const t = translations.de.brands;
  
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