import { getAllSuccessStories, getSuccessStoryBySlug } from '../wordpress'
import { notFound } from 'next/navigation'
import '../../../../styles/blog.css'

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
  const resolvedParams = await params // Await params first
  const story = await getSuccessStoryBySlug(resolvedParams.slug)
  
  if (!story) {
    return {
      title: 'Success Story Not Found'
    }
  }
  
  return {
    title: decodeHtmlEntities(story.title.rendered),
    description: story.yoast_head_json?.description ? decodeHtmlEntities(story.yoast_head_json.description) : decodeHtmlEntities(story.excerpt?.rendered?.replace(/<[^>]*>/g, '') || ''),
    openGraph: {
      title: decodeHtmlEntities(story.title.rendered),
      description: story.yoast_head_json?.description ? decodeHtmlEntities(story.yoast_head_json.description) : decodeHtmlEntities(story.excerpt?.rendered?.replace(/<[^>]*>/g, '') || ''),
      images: story.yoast_head_json?.og_image?.[0]?.url ? [
        {
          url: story.yoast_head_json.og_image[0].url,
          alt: decodeHtmlEntities(story.title.rendered)
        }
      ] : []
    }
  }
}

// Generate static params for all success stories
export async function generateStaticParams() {
  const stories = await getAllSuccessStories()
  
  return stories.map(story => ({
    slug: story.slug
  }))
}

export default async function SuccessStoryPost({ params }) {
  const resolvedParams = await params // Await params here too
  const story = await getSuccessStoryBySlug(resolvedParams.slug)
  
  if (!story) {
    notFound()
  }
  
  return (
    <div className="blog-container">
      {/* Main Content - Centered */}
      <main className="blog-main">
        <div className="blog-post-main-container">
          <article className="blog-post-article">
            <header className="blog-post-article-header">
              <h2 className="blog-post-article-title">{decodeHtmlEntities(story.title.rendered)}</h2>
              
              <div className="blog-post-article-meta">
                <time>{new Date(story.date).toLocaleDateString()}</time>
                {story._embedded?.author?.[0] && (
                  <span>By {story._embedded.author[0].name}</span>
                )}
              </div>
              
              {story.yoast_head_json?.og_image?.[0]?.url && (
                <img 
                  src={story.yoast_head_json.og_image[0].url} 
                  alt={decodeHtmlEntities(story.title.rendered)}
                  className="blog-post-article-image"
                  style={{width:"auto", maxWidth:"1200px"}}
                />
              )}
            </header>
            
            <div className="blog-post-article-content">
              <div 
                className="blog-post-prose"
                dangerouslySetInnerHTML={{ 
                  __html: decodeHtmlEntities(story.content.rendered) 
                }} 
              />
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}
