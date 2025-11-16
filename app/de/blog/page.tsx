import { Metadata } from 'next'
import BlogContent from '@/components/BlogContent'

export const metadata: Metadata = {
  title: "Blogs über Athleten-Sponsoring & Sport-Marketing | Sport Endorse",
  description: "Erkunden Sie Experten-Blogs über Athleten-Sponsoring, Sport-Influencer und Markenbotschafter. Lernen Sie, wie Sie Ihre Sport-Marketing-Kampagnen mit Elite-Athleten verbessern.",
  alternates: {
    canonical: "https://www.sportendorse.com/de/blog",
    languages: {
      'en': '/blog',
      'es': '/es/blog',
      'de': '/de/blog'
    }
  },
  openGraph: {
    title: "Blogs über Athleten-Sponsoring & Sport-Marketing | Sport Endorse",
    description: "Erkunden Sie Experten-Blogs über Athleten-Sponsoring, Sport-Influencer und Markenbotschafter. Lernen Sie, wie Sie Ihre Sport-Marketing-Kampagnen mit Elite-Athleten verbessern.",
    type: "website",
    locale: "de_DE",
    siteName: "Sport Endorse"
  }
}

export default function BlogPage() {
  return <BlogContent />
}