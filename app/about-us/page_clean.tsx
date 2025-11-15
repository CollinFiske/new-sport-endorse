import { Metadata } from 'next'
import AboutUsContent from '@/components/AboutUsContent'

export const metadata: Metadata = {
  title: 'Sports sponsorship agency | About us | Sport Endorse',
  description: 'We are a multicultural, multinational team passionate about sport in all of its forms. Choose an athlete representation agency that genuinely cares.',
  alternates: {
    canonical: "https://www.sportendorse.com/about-us",
    languages: {
      'en': '/about-us',
      'es': '/es/about-us',
      'de': '/de/about-us'
    }
  },
  openGraph: {
    title: 'Sports sponsorship agency | About us | Sport Endorse',
    description: 'We are a multicultural, multinational team passionate about sport in all of its forms. Choose an athlete representation agency that genuinely cares.',
    type: "website",
    locale: "en_US",
    siteName: "Sport Endorse"
  }
}

export default function AboutUsPage() {
  return <AboutUsContent />;
}