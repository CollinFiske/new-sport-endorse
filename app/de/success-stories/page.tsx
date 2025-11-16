import { Metadata } from 'next'
import SuccessStoriesContent from '@/components/SuccessStoriesContent'

export const metadata: Metadata = {
  title: "Athleten-Sponsoring Erfolgsgeschichten | Sport Endorse",
  description: "Lesen Sie Erfolgsgeschichten von Athleten-Sponsorings, Sport-Influencern und Markenpartnerschaften. Erfahren Sie, wie Elite-Athleten wirkungsvolle Sport-Marketing-Kampagnen angetrieben haben.",
  alternates: {
    canonical: "https://www.sportendorse.com/de/success-stories",
    languages: {
      'en': '/success-stories',
      'es': '/es/success-stories',
      'de': '/de/success-stories'
    }
  },
  openGraph: {
    title: "Athleten-Sponsoring Erfolgsgeschichten | Sport Endorse",
    description: "Lesen Sie Erfolgsgeschichten von Athleten-Sponsorings, Sport-Influencern und Markenpartnerschaften. Erfahren Sie, wie Elite-Athleten wirkungsvolle Sport-Marketing-Kampagnen angetrieben haben.",
    type: "website",
    locale: "de_DE",
    siteName: "Sport Endorse"
  }
}

export default function SuccessStoriesPage() {
  return <SuccessStoriesContent />
}