import { getNewsStories } from '../../news/wordpress.js';
import Link from 'next/link';
import "../../../styles/blog.css";

export const metadata = {
  title: "Neueste Sportnachrichten und Pressemitteilungen | Sport Endorse",
  description: "Bleiben Sie auf dem Laufenden mit den neuesten Nachrichten und Pressemitteilungen von Sport Endorse über Athletensponsoring, Sportmarketing und Markenpartnerschaften.",
  openGraph: {
    title: "Neueste Sportnachrichten und Pressemitteilungen | Sport Endorse",
    description: "Bleiben Sie auf dem Laufenden mit den neuesten Nachrichten und Pressemitteilungen von Sport Endorse über Athletensponsoring, Sportmarketing und Markenpartnerschaften.",
    type: "website",
    locale: "de_DE",
    siteName: "Sport Endorse"
  },
};

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

export default async function NewsPage() {
  const newsStories = await getNewsStories();
  
  console.log('News stories data:', newsStories.map(story => ({ id: story.id, slug: story.slug, title: story.title.rendered })));
    
  return (
    <div className="blog-container">

      {/* Main Content */}
      <main className="blog-main">
        <div className="blog-main-header">
          <h1 className="blog-main-title">Nachrichten</h1>
          <p className="blog-main-description">
            Artikel über Sport Endorse,<br />
            Athleten, Marken, Unternehmen<br />
            Die neuesten Nachrichten zu allem rund um Sport Endorse!
          </p>
        </div>
        
        {/* Centered Posts Grid */}
        <div className="blog-posts-container">
          <div className="blog-posts-grid">
            {newsStories.map(story => (
              <article key={story.id} className="blog-post-card">
                {story.yoast_head_json?.og_image?.[0]?.url && (
                  <img
                    src={story.yoast_head_json.og_image[0].url}
                    alt={story.title.rendered}
                    className="blog-post-image"
                  />
                )}
                        
                <div className="blog-post-content">
                  <h2 className="blog-post-title">
                    <Link
                      href={`/de/news/${story.slug}`}
                      className="blog-post-link"
                    >
                      {decodeHtmlEntities(story.title.rendered)}
                    </Link>
                  </h2>
                            
                  <div
                    className="blog-post-excerpt"
                    dangerouslySetInnerHTML={{
                      __html: decodeHtmlEntities(story.excerpt.rendered)
                    }}
                  />
                            
                  <time className="blog-post-date">
                    {new Date(story.date).toLocaleDateString('de-DE')}
                  </time>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}