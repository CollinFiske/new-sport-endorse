import { Metadata } from 'next'
import SuccessStoriesContent from '@/components/SuccessStoriesContent'

export const metadata: Metadata = {
  title: "Athlete Sponsorship Success Stories | Sport Endorse",
  description: "Read success stories of athlete sponsorships, sports influencers, and brand partnerships. Learn how elite athletes have powered impactful sports marketing campaigns.",
  alternates: {
    canonical: "https://www.sportendorse.com/success-stories",
    languages: {
      'en': '/success-stories',
      'es': '/es/success-stories',
      'de': '/de/success-stories'
    }
  },
  openGraph: {
    title: "Athlete Sponsorship Success Stories | Sport Endorse",
    description: "Read success stories of athlete sponsorships, sports influencers, and brand partnerships. Learn how elite athletes have powered impactful sports marketing campaigns.",
    type: "website",
    locale: "en_US",
    siteName: "Sport Endorse"
  }
}

export default function SuccessStoriesPage() {
  return <SuccessStoriesContent />
}