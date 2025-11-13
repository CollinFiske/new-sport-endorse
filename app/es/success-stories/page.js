//page.js

import { getAllSuccessStories } from '../../success-stories/wordpress.js';
import Link from 'next/link';
import "../../../styles/blog.css"

export const metadata = {
  //metadataBase: new URL("put the home url here later"),
  title: "Historias de Éxito de Patrocinio de Atletas | Sport Endorse",
  description: "Lea historias de éxito de patrocinios de atletas, influencers deportivos y asociaciones de marca. Aprenda cómo los atletas de élite han impulsado campañas de marketing deportivo impactantes.",
  alternates: {
    canonical: "https://www.sportendorse.com/es/success-stories"
  },
  openGraph:{ // og:title and so on
    title: "Historias de Éxito de Patrocinio de Atletas | Sport Endorse",
    description: "Lea historias de éxito de patrocinios de atletas, influencers deportivos y asociaciones de marca. Aprenda cómo los atletas de élite han impulsado campañas de marketing deportivo impactantes.",
    type:"website",
    locale:"es_ES",
    //url:"" to be added later
    siteName:"Sport Endorse"
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

export default async function SuccessStoriesPage() {
  console.log('🔍 Starting to fetch success stories...');
  
  // Let's also test if we can fetch any posts at all from WordPress
  try {
    console.log('🧪 Testing basic WordPress API connection...');
    const testRes = await fetch('https://www.sportendorse.com/wp-json/wp/v2/posts?per_page=1');
    console.log('🔗 Basic API test status:', testRes.status);
    if (testRes.ok) {
      const testData = await testRes.json();
      console.log('✅ WordPress API is working. Sample post:', testData[0]?.title?.rendered || 'No title');
    }
  } catch (error) {
    console.log('❌ WordPress API test failed:', error);
  }
  
  const stories = await getAllSuccessStories();
  console.log('📊 Stories fetched:', stories?.length || 0);
  console.log('📋 Stories data:', stories?.map(story => ({
    id: story?.id,
    title: story?.title?.rendered,
    slug: story?.slug,
    hasImage: !!story?.yoast_head_json?.og_image?.[0]?.url,
    hasDescription: !!story?.yoast_head_json?.description
  })));

  return (
    <div className="blog-container">

      <main className="blog-main">
        <div className="blog-main-header">
          <h1 className="blog-main-title">Historias de Éxito de Sport Endorse</h1>
          <p className="blog-main-description">
            Descubre cómo nuestros atletas y marcas han logrado éxitos notables a través de asociaciones estratégicas
          </p>
        </div>

        <div className="blog-posts-container">
          <div className="blog-posts-grid">
            {stories && stories.length > 0 ? (
              stories.map((story) => (
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
                        href={`/es/success-stories/${story.slug}`}
                        className="blog-post-link"
                      >
                        {decodeHtmlEntities(story.title.rendered)}
                      </Link>
                    </h2>

                    <Link
                      href={`/es/success-stories/${story.slug}`}
                      className="blog-post-link"
                      style={{ textDecoration: 'none' }}
                    >
                      <p className="blog-post-excerpt">
                        {decodeHtmlEntities(story.yoast_head_json?.description) || 'No hay resumen disponible.'}
                      </p>
                    </Link>

                    <time className="blog-post-date">
                      {new Date(story.date).toLocaleDateString('es-ES')}
                    </time>
                  </div>
                </article>
              ))
            ) : (
              <div style={{ 
                gridColumn: '1 / -1', 
                textAlign: 'center', 
                padding: '2rem',
                background: '#f8f9fa',
                borderRadius: '8px',
                border: '1px solid #e9ecef'
              }}>
                <h3 style={{ color: '#dc3545', marginBottom: '1rem' }}>🐛 Información de Depuración</h3>
                <p><strong>Array de Historias:</strong> {stories ? `Array con ${stories.length} elementos` : 'null/undefined'}</p>
                <p><strong>Es Array:</strong> {Array.isArray(stories) ? 'Sí' : 'No'}</p>
                <p><strong>Tipo:</strong> {typeof stories}</p>
                {stories && (
                  <details style={{ marginTop: '1rem', textAlign: 'left' }}>
                    <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>Datos sin procesar</summary>
                    <pre style={{ 
                      background: '#ffffff', 
                      padding: '1rem', 
                      borderRadius: '4px', 
                      overflow: 'auto',
                      fontSize: '12px',
                      textAlign: 'left'
                    }}>
                      {JSON.stringify(stories, null, 2)}
                    </pre>
                  </details>
                )}
                <p style={{ marginTop: '1rem' }}>Revise la consola del navegador para registros detallados de la API.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}