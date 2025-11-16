import { Metadata } from 'next'
import BlogContent from '@/components/BlogContent'

export const metadata: Metadata = {
  title: "Blogs on Athlete Sponsorship & Sports Marketing | Sport Endorse",
  description: "Explore expert blogs on athlete sponsorship, sports influencers, and brand ambassadors. Learn how to elevate your sports marketing campaigns with elite athletes.",
  alternates: {
    canonical: "https://www.sportendorse.com/blog",
    languages: {
      'en': '/blog',
      'es': '/es/blog',
      'de': '/de/blog'
    }
  },
  openGraph: {
    title: "Blogs on Athlete Sponsorship & Sports Marketing | Sport Endorse",
    description: "Explore expert blogs on athlete sponsorship, sports influencers, and brand ambassadors. Learn how to elevate your sports marketing campaigns with elite athletes.",
    type: "website",
    locale: "en_US",
    siteName: "Sport Endorse"
  }
}

export default function BlogPage() {
  return <BlogContent />
}