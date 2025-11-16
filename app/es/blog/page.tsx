import { Metadata } from 'next'
import BlogContent from '@/components/BlogContent'

export const metadata: Metadata = {
  title: "Blogs sobre Patrocinio de Atletas y Marketing Deportivo | Sport Endorse",
  description: "Explora blogs de expertos sobre patrocinio de atletas, influencers deportivos y embajadores de marca. Aprende cómo elevar tus campañas de marketing deportivo con atletas de élite.",
  alternates: {
    canonical: "https://www.sportendorse.com/es/blog",
    languages: {
      'en': '/blog',
      'es': '/es/blog',
      'de': '/de/blog'
    }
  },
  openGraph: {
    title: "Blogs sobre Patrocinio de Atletas y Marketing Deportivo | Sport Endorse",
    description: "Explora blogs de expertos sobre patrocinio de atletas, influencers deportivos y embajadores de marca. Aprende cómo elevar tus campañas de marketing deportivo con atletas de élite.",
    type: "website",
    locale: "es_ES",
    siteName: "Sport Endorse"
  }
}

export default function BlogPage() {
  return <BlogContent />
}