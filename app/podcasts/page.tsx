import { Metadata } from 'next'
import PodcastsContent from '@/components/PodcastsContent'

export const metadata: Metadata = {
  title: "Sports Marketing Podcasts & Expert Insights | Sport Endorse",
  description: "Listen to expert discussions on sports marketing, athlete partnerships, and industry insights. Stay ahead with our sports sponsorship podcasts.",
  alternates: {
    canonical: "https://www.sportendorse.com/podcasts",
    languages: {
      'en': '/podcasts',
      'es': '/es/podcasts',
      'de': '/de/podcasts'
    }
  },
  openGraph: {
    title: "Sports Marketing Podcasts & Expert Insights | Sport Endorse",
    description: "Listen to expert discussions on sports marketing, athlete partnerships, and industry insights. Stay ahead with our sports sponsorship podcasts.",
    type: "website",
    locale: "en_US",
    siteName: "Sport Endorse"
  }
}

export default function PodcastsPage() {
  return <PodcastsContent />
}