import { getAllSuccessStories, getSuccessStoryBySlug } from '../wordpress'
import { notFound } from 'next/navigation'
import '../../../styles/blog.css'
import MainLogo from '@/components/MainLogo'

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
  try {
    const resolvedParams = await params
    const story = await getSuccessStoryBySlug(resolvedParams.slug)
    
    if (!story) {
      return {
        title: 'Success Story Not Found | Sport Endorse',
        description: 'The requested success story could not be found.'
      }
    }
    
    const title = decodeHtmlEntities(story.title?.rendered || 'Success Story')
    const description = story.yoast_head_json?.description || 
      (story.excerpt?.rendered ? story.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160) : 'Read this inspiring success story.')
    
    return {
      title: `${title} | Sport Endorse`,
      description,
      openGraph: {
        title,
        description,
        images: story.yoast_head_json?.og_image?.[0]?.url ? [
          {
            url: story.yoast_head_json.og_image[0].url,
            alt: title
          }
        ] : []
      }
    }
  } catch (error) {
    console.warn('Error generating metadata for success story:', error)
    return {
      title: 'Success Story | Sport Endorse',
      description: 'Read inspiring success stories on Sport Endorse.'
    }
  }
}

// Generate static params for all success stories
export async function generateStaticParams() {
  try {
    const stories = await getAllSuccessStories()
    
    // Double-check each story before including it in static params
    const validSlugs = stories
      .filter(story => {
        try {
          return (
            story?.slug &&
            story?.title?.rendered &&
            story?.content?.rendered
          )
        } catch (error) {
          console.warn(`Filtering out story during static params generation:`, error)
          return false
        }
      })
      .map(story => ({
        slug: story.slug
      }))
    
    console.log(`Generating static params for ${validSlugs.length} success stories`)
    return validSlugs
  } catch (error) {
    console.warn('Error generating static params for success stories:', error)
    return [] // Return empty array to prevent build failure
  }
}

export default async function SuccessStoryPost({ params }) {
  try {
    const resolvedParams = await params
    const story = await getSuccessStoryBySlug(resolvedParams.slug)
    
    if (!story) {
      notFound()
    }
    
    // Additional validation to ensure we have the required content
    if (!story.title?.rendered || !story.content?.rendered) {
      console.warn(`Success story "${resolvedParams.slug}" missing essential content`)
      notFound()
    }
    
    const title = decodeHtmlEntities(story.title.rendered)
    const publishDate = story.date ? new Date(story.date) : null
    
    return (
      <div className="blog-container">
        {/* Main Content - Centered */}
        <main className="blog-main">
          <div className="blog-post-main-container">
            <article className="blog-post-article">
              <header className="blog-post-article-header">
                <h2 className="blog-post-article-title">{title}</h2>
                
                <div className="blog-post-article-meta">
                  <time>{publishDate ? publishDate.toLocaleDateString() : 'Date not available'}</time>
                  <span>Success Story</span>
                </div>
                
                {story.yoast_head_json?.og_image?.[0]?.url && (
                  <img 
                    src={story.yoast_head_json.og_image[0].url} 
                    alt={title}
                    className="blog-post-article-image"
                    style={{width:"auto", maxWidth:"1200px"}}
                  />
                )}
              </header>
              
              <div className="blog-post-article-content">
                <div className="blog-post-prose">
                  {/* Show description if available */}
                  {story.yoast_head_json?.description && (
                    <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '0.5rem', borderLeft: '4px solid #18A0FB' }}>
                      <p style={{ margin: '0', fontSize: '1.125rem', fontStyle: 'italic', color: '#374151' }}>
                        {decodeHtmlEntities(story.yoast_head_json.description)}
                      </p>
                    </div>
                  )}
                  
                  <div 
                    dangerouslySetInnerHTML={{ 
                      __html: story.content.rendered 
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
  } catch (error) {
    console.warn(`Error rendering success story:`, error)
    notFound()
  }
}