import BrandsContent from "@/components/BrandsContent";
import translations from "@/utils/translations";
import "../../styles/brands.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find Elite Athletes & Sports Influencers for Your Brand | Sport Endorse",
  description: "Discover elite athletes and sports influencers to enhance your brand's visibility. Sport Endorse helps you manage athlete sponsorships and sports marketing campaigns.",
  alternates: {
    canonical: "https://sportendorse.com/brands",
    languages: {
      'en': 'https://sportendorse.com/brands',
      'es': 'https://sportendorse.com/es/brands',
      'de': 'https://sportendorse.com/de/brands',
      'x-default': 'https://sportendorse.com/brands'
    }
  },
  openGraph: {
    title: "Find Elite Athletes & Sports Influencers for Your Brand | Sport Endorse",
    description: "Discover elite athletes and sports influencers to enhance your brand's visibility. Sport Endorse helps you manage athlete sponsorships and sports marketing campaigns.",
    type: "website",
    locale: "en_US",
    url: "https://sportendorse.com/brands",
    siteName: "Sport Endorse",
    alternateLocale: ['es_ES', 'de_DE']
  },
};

export default function BrandsPage() {
  const t = translations.en.brands;
  
  return (
    <BrandsContent 
      badge={t.badge}
      title={t.title}
      description={t.description}
      featuredAthletes={t.featuredAthletes}
      viewAll={t.viewAll}
    />
  );
}
