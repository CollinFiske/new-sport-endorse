import { Metadata } from 'next'
import AboutUsContent from '@/components/AboutUsContent'

export const metadata: Metadata = {
  title: 'Sport-Sponsoring-Agentur | Über uns | Sport Endorse',
  description: 'Wir sind ein multikulturelles, multinationales Team, das leidenschaftlich für den Sport in all seinen Formen ist. Wählen Sie eine Athletenvertretungsagentur, die sich wirklich kümmert.',
  alternates: {
    languages: {
      'en': '/about-us',
      'es': '/es/about-us',
      'de': '/de/about-us'
    }
  }
}

export default function AboutUsPage() {
  return <AboutUsContent />
}