import { fetchPodcasts, getPodcastBySlug } from '../../../podcasts/wordpress.js'
import { notFound } from 'next/navigation'
import '../../../../styles/blog.css'
import MainLogo from '@/components/MainLogo'
import PodcastBackButton from '@/components/PodcastBackButton'

// podcast iframe URLs list (same as main page)
const podcastIframes = [
  'https://podomatic.com/embed/html5/podcast/6266614',
  'https://podomatic.com/embed/html5/episode/10791101',
  'https://podomatic.com/embed/html5/episode/10797470',
  'https://podomatic.com/embed/html5/episode/10784445',
  'https://podomatic.com/embed/html5/episode/10771515',
  'https://podomatic.com/embed/html5/episode/10764959',
  'https://podomatic.com/embed/html5/episode/10757717',
  'https://podomatic.com/embed/html5/episode/10750287',
  'https://podomatic.com/embed/html5/episode/10743603',
  'https://www.podomatic.com/embed/html5/episode/10593667',
  'https://www.podomatic.com/embed/html5/episode/10571774',
  'https://www.podomatic.com/embed/html5/episode/10561829',
  'https://www.podomatic.com/embed/html5/episode/10536784',
  'https://www.podomatic.com/embed/html5/episode/10535965',
  'https://www.podomatic.com/embed/html5/episode/10485866',
  'https://podomatic.com/embed/html5/episode/10470396',
  'https://podomatic.com/embed/html5/episode/10466181',
  'https://podomatic.com/embed/html5/episode/10391839',
  'https://podomatic.com/embed/html5/episode/10289302',
  'https://podomatic.com/embed/html5/episode/10238169',
  'https://podomatic.com/embed/html5/episode/10144287',
  'https://podomatic.com/embed/html5/episode/10089429',
  'https://podomatic.com/embed/html5/episode/10081744',
  'https://podomatic.com/embed/html5/episode/10067317',
  'https://podomatic.com/embed/html5/episode/10061283',
  'https://podomatic.com/embed/html5/episode/10025277',
  'https://podomatic.com/embed/html5/episode/10019293',
  'https://podomatic.com/embed/html5/episode/10013347',
  'https://podomatic.com/embed/html5/episode/10007910',
  'https://podomatic.com/embed/html5/episode/10007928',
  'https://podomatic.com/embed/html5/episode/9956380',
  'https://podomatic.com/embed/html5/episode/9950355',
  'https://podomatic.com/embed/html5/episode/9940355'
];

// Function to decode HTML entities
function decodeHtmlEntities(text) {
  if (!text) return text;
  const entities = {
    '&#038;': '&',
    '&#8217;': "'",
    '&#8216;': "'",
    '&#8220;': '"',
    '&#8221;': '"',
    '&#8211;': '–',
    '&#8212;': '—',
    '&amp;': '&',
    '&quot;': '"',
    '&apos;': "'",
    '&lt;': '<',
    '&gt;': '>',
    '&nbsp;': ' '
  };
  let decodedText = text;
  for (const [entity, replacement] of Object.entries(entities)) {
    decodedText = decodedText.replace(new RegExp(entity, 'g'), replacement);
  }
  return decodedText;
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const podcast = await getPodcastBySlug(resolvedParams.slug)
  
  if (!podcast) {
    return {
      title: 'Podcast Nicht Gefunden'
    }
  }
  
  return {
    title: decodeHtmlEntities(podcast.title.rendered),
    description: podcast.excerpt.rendered.replace(/<[^>]*>/g, ''), // Strip HTML
    alternates: {
      canonical: `https://www.sportendorse.com/de/podcasts/${resolvedParams.slug}`
    },
    openGraph: {
      title: decodeHtmlEntities(podcast.title.rendered),
      description: podcast.excerpt.rendered.replace(/<[^>]*>/g, ''),
      type: 'article'
    }
  }
}

// Generate static params for all podcasts
export async function generateStaticParams() {
  const podcasts = await fetchPodcasts()
  
  return podcasts.map(podcast => ({
    slug: podcast.slug
  }))
}

export default async function PodcastPost({ params }) {
  const resolvedParams = await params
  const podcast = await getPodcastBySlug(resolvedParams.slug)
  
  if (!podcast) {
    notFound()
  }
  
  // Get all podcasts to find the index of current podcast for iframe matching
  const allPodcasts = await fetchPodcasts()
  const podcastIndex = allPodcasts.findIndex(p => p.id === podcast.id)
  const iframeUrl = podcastIframes[podcastIndex] || podcastIframes[0] // Fallback to first iframe
  
  return (
    <div className="blog-container">
      {/* Back Button at top of page */}
      <div style={{ padding: '1rem 1rem 0 1rem', maxWidth: '1200px', margin: '0 auto' }}>
        <PodcastBackButton />
      </div>

      {/* Main Content - Centered */}
      <main className="blog-main">
        <div className="blog-post-main-container">
          <article className="blog-post-article">
            <header className="blog-post-article-header">
              <h2 className="blog-post-article-title">{decodeHtmlEntities(podcast.title.rendered)}</h2>
              
              <div className="blog-post-article-meta">
                <time>{new Date(podcast.date).toLocaleDateString('de-DE')}</time>
                <span>Podcast-Folge</span>
              </div>
              
              {/* Podcast iframe */}
              <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                <iframe 
                  src={iframeUrl} 
                  height='208' 
                  width='100%' 
                  frameBorder='0' 
                  marginHeight='0' 
                  marginWidth='0' 
                  scrolling='no' 
                  loading='lazy'
                  allowFullScreen
                  style={{ borderRadius: '8px', maxWidth: '600px', margin: '0 auto', display: 'block' }}
                />
              </div>
            </header>
            
            <div className="blog-post-article-content">
              <div className="blog-post-prose">
                <div 
                  dangerouslySetInnerHTML={{ 
                    __html: podcast.content.rendered 
                  }} 
                />
              </div>
            </div>
          </article>
        </div>
        
        {/* Main Logo at bottom */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem', paddingBottom: '2rem' }}>
          <MainLogo />
        </div>
      </main>
    </div>
  )
}