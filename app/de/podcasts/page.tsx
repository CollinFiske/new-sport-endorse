import { Metadata } from 'next'
import PodcastsContent from '@/components/PodcastsContent'

export const metadata: Metadata = {
  title: "Sport-Marketing Podcasts & Experten-Einblicke | Sport Endorse",
  description: "Hören Sie Expertendiskussionen über Sport-Marketing, Athleten-Partnerschaften und Brancheneinblicke. Bleiben Sie mit unseren Sport-Sponsoring-Podcasts auf dem Laufenden.",
  alternates: {
    canonical: "https://www.sportendorse.com/de/podcasts",
    languages: {
      'en': '/podcasts',
      'es': '/es/podcasts',
      'de': '/de/podcasts'
    }
  },
  openGraph: {
    title: "Sport-Marketing Podcasts & Experten-Einblicke | Sport Endorse",
    description: "Hören Sie Expertendiskussionen über Sport-Marketing, Athleten-Partnerschaften und Brancheneinblicke. Bleiben Sie mit unseren Sport-Sponsoring-Podcasts auf dem Laufenden.",
    type: "website",
    locale: "de_DE",
    siteName: "Sport Endorse"
  }
}

export default function PodcastsPage() {
  return <PodcastsContent />
}