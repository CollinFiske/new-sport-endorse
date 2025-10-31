// page.js - Main podcasts page component
import { fetchPodcasts, stripHtml, formatDate, createExcerpt } from '../../podcasts/wordpress.js';
import Link from 'next/link';
import "../../../styles/blog.css"

export const metadata = {
  //metadataBase: new URL("put the home url here later"),
  title: "Sport Endorse Podcast: Athleten-Sponsoring & Influencer-Marketing Einblicke | Sport Endorse",
  description: "Hören Sie den Sport Endorse Podcast für Einblicke in Athleten-Sponsoring, Sport-Influencer und Sportmarketing-Strategien. Hören Sie von Athleten und Branchenexperten.",
  openGraph:{ // og:title and so on
    title: "Sport Endorse Podcast: Athleten-Sponsoring & Influencer-Marketing Einblicke | Sport Endorse",
    description: "Hören Sie den Sport Endorse Podcast für Einblicke in Athleten-Sponsoring, Sport-Influencer und Sportmarketing-Strategien. Hören Sie von Athleten und Branchenexperten.",
    type:"website",
    locale:"de_DE",
    //url:"" to be added later
    siteName:"Sport Endorse"
  },
};

// function to decode HTML entities
function decodeHtmlEntities(text) {
  if (!text) return text;
  const entities = {
    "&#038;": "&",
    "&#8217;": "'",
    "&#8216;": "'",
    "&#8220;": '"',
    "&#8221;": '"',
    "&#8211;": "–",
    "&#8212;": "—",
    "&amp;": "&",
    "&quot;": '"',
    "&apos;": "'",
    "&lt;": "<",
    "&gt;": ">",
    "&nbsp;": " "
  };
  let decodedText = text;
  for (const [entity, replacement] of Object.entries(entities)) {
    decodedText = decodedText.replace(new RegExp(entity, "g"), replacement);
  }
  return decodedText;
}

// podcast iframe URLs list
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

// Individual podcast card component
function PodcastCard({ podcast, index }) {
  const title = decodeHtmlEntities(stripHtml(podcast.title.rendered));
  const excerpt = decodeHtmlEntities(createExcerpt(podcast.excerpt.rendered, 250)); // Increased from default 150 to 300 characters
  const date = formatDate(podcast.date);
  const iframeUrl = podcastIframes[index] || podcastIframes[0]; // Fallback to first iframe if index exceeds array 
  
  return (
    <article className="blog-post-card">
      <div style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <time style={{ fontSize: '0.875rem', color: '#6b7280', fontWeight: '500' }}>
            {date}
          </time>
          <span style={{ backgroundColor: '#dbeafe', color: '#1e40af', fontSize: '0.75rem', fontWeight: '600', padding: '0.25rem 0.625rem', borderRadius: '4px' }}>
            Podcast
          </span>
        </div>
        
        <h2 className="blog-post-title">
          {title}
        </h2>
        
        <p className="blog-post-excerpt">
          {excerpt}
        </p>

        {/* iframe */}
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
          style={{ marginBottom: '1rem', borderRadius: '8px' }}
        ></iframe>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Share button removed since server components can't have onClick handlers */}
          <div style={{ color: '#9ca3af', padding: '0.25rem' }}>
            <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <a href={`/de/podcasts/${podcast.slug}`}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </a>
            </svg>
          </div>
          <Link href={`/de/podcasts/${podcast.slug}`}>
            <button 
              style={{
                backgroundColor: '#18A0FB',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                padding: '8px 16px',
                fontSize: '0.875rem',
                fontWeight: '600',
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              Mehr Lesen
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
}

// Main podcasts page component
export default async function PodcastsPage() {
  try {
    const podcasts = await fetchPodcasts();

    return (
      <div className="blog-container">
        {/* Header */}
        <header style={{ backgroundColor: 'white', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', position: 'relative' }}>
          <div className="podcast-header-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
            <div style={{ textAlign: 'center' }}>
              <h1 className="podcast-header-title" style={{ fontSize: '2.5rem', fontWeight:'800', color: '#111827', marginBottom: '1.25rem' }}>
                Das Athleten-Gespräch
              </h1>
              <p className="podcast-header-description" style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '512px', margin: '0 auto' }}>
                Entdecken Sie inspirierende Geschichten und Einblicke von Weltklasse-Athleten und Sportprofis
              </p>
              
              <div className="podcast-platforms-container" style={{ display: 'flex', justifyContent: 'center', margin:"0 0 5px" }}>
                <a href="https://podcasts.apple.com/ie/podcast/the-athlete-sitdown/id1550095395" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="/images/podcast/apple-podcasts-logo.webp" 
                    alt="Apple Podcasts logo" 
                    style={{ height: '32px', cursor: 'pointer' }}
                  />
                </a>
                <a href="https://music.amazon.com/podcasts/47a22b01-42ad-447a-b137-1866a49890a1/the-athlete-sitdown" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="/images/podcast/amazon-music-logo.webp" 
                    alt="Amazon Music logo" 
                    style={{ height: '45px', cursor: 'pointer', margin:" 0 5px 0 20px" }}
                  />
                </a>
                <a href="https://open.spotify.com/show/2c2mWOkxmUpeGyFI2dZgC5" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="/images/podcast/Spotify-Logo.webp" 
                    alt="Spotify logo" 
                    style={{ height: '75px', cursor: 'pointer' }}
                  />
                </a>
              </div>
              
              <div className="podcast-info-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', fontSize: '0.875rem', color: '#6b7280', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <svg style={{ width: '1rem', height: '1rem', marginRight: '0.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                  {podcasts.length} Folgen
                </span>
                <span className="podcast-info-separator">•</span>
                <span>Sport Endorse Podcasts entdecken</span>
                <span className="podcast-info-separator">•</span>
                <a href="mailto:hello@sportendorse.com?subject=Feature%20me%20on%20a%20podcast!&body=Feature%20me%20on%20a%20podcast!">
                  <button 
                    className="feature-me-button"
                    style={{
                      backgroundColor: '#18A0FB',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '6px 12px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 2px 8px rgba(24, 160, 251, 0.3)',
                      whiteSpace: 'nowrap'
                    }}>
                    Zeigt mich!
                  </button>
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="blog-main">
          {podcasts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
              <div style={{ color: '#9ca3af', fontSize: '3.75rem', marginBottom: '1rem' }}>🎙️</div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.5rem' }}>Keine Podcasts gefunden</h2>
              <p style={{ color: '#6b7280' }}>Schauen Sie später für neue Folgen vorbei!</p>
            </div>
          ) : (
            <div className="blog-posts-container">
              <div className="blog-posts-grid">
                {podcasts.map((podcast, index) => (
                  <PodcastCard key={podcast.id} podcast={podcast} index={index} />
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    );
  } catch (error) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ color: '#ef4444', fontSize: '1.25rem', marginBottom: '1rem' }}>⚠️</div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.5rem' }}>Etwas ist schief gelaufen</h2>
          <p style={{ color: '#6b7280' }}>{error.message}</p>
        </div>
      </div>
    );
  }
}