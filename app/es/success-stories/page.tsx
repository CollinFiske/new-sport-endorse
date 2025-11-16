import { Metadata } from 'next'
import SuccessStoriesContent from '@/components/SuccessStoriesContent'

export const metadata: Metadata = {
  title: "Historias de Éxito de Patrocinio de Atletas | Sport Endorse",
  description: "Lee historias de éxito de patrocinios de atletas, influencers deportivos y asociaciones de marca. Aprende cómo los atletas de élite han potenciado campañas de marketing deportivo impactantes.",
  alternates: {
    canonical: "https://www.sportendorse.com/es/success-stories",
    languages: {
      'en': '/success-stories',
      'es': '/es/success-stories',
      'de': '/de/success-stories'
    }
  },
  openGraph: {
    title: "Historias de Éxito de Patrocinio de Atletas | Sport Endorse",
    description: "Lee historias de éxito de patrocinios de atletas, influencers deportivos y asociaciones de marca. Aprende cómo los atletas de élite han potenciado campañas de marketing deportivo impactantes.",
    type: "website",
    locale: "es_ES",
    siteName: "Sport Endorse"
  }
}

export default function SuccessStoriesPage() {
  return <SuccessStoriesContent />
}