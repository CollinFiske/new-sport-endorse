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
    console.log('🏗️ Generating static params for success stories...');
    const stories = await getAllSuccessStories()
    console.log(`📊 Total stories fetched for static generation: ${stories?.length || 0}`);
    
    // Use the same relaxed filtering as the main page - only require basic fields
    const validSlugs = stories
      .filter(story => {
        try {
          const isValid = (
            story?.slug &&
            story?.title?.rendered
          );
          
          if (!isValid) {
            console.warn(`❌ Filtering out story during static params generation:`, {
              hasSlug: !!story?.slug,
              hasTitle: !!story?.title?.rendered,
              storyId: story?.id
            });
          } else {
            console.log(`✅ Including story in static generation:`, {
              id: story.id,
              slug: story.slug,
              title: story.title.rendered
            });
          }
          
          return isValid;
        } catch (error) {
          console.warn(`❌ Error filtering story during static params generation:`, error)
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
    if (!story.title?.rendered) {
      console.warn(`Success story "${resolvedParams.slug}" missing essential title`)
      notFound()
    }
    
    // Log what content we have available
    console.log(`Story content analysis for "${resolvedParams.slug}":`, {
      hasTitle: !!story.title?.rendered,
      hasContent: !!story.content?.rendered,
      contentLength: story.content?.rendered?.length || 0,
      hasYoastTitle: !!story.yoast_head_json?.og_title,
      hasYoastDescription: !!story.yoast_head_json?.description,
      hasImage: !!story.yoast_head_json?.og_image?.[0]?.url,
      hasBottomDescription: !!story.success_stories_bottom_description,
      bottomDescriptionLength: story.success_stories_bottom_description?.length || 0
    });
    
    const title = decodeHtmlEntities(story.title.rendered)
    const publishDate = story.date ? new Date(story.date) : null
    
    return (
      <div className="blog-container">
        {/* Main Content - Centered */}
        <main className="blog-main">
          <div className="blog-post-main-container">
            <article className="blog-post-article">
              <header className="blog-post-article-header">
                <h1 className="blog-post-article-title">{title}</h1>
                
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
                    <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '0.5rem', borderLeft: '4px solid #0078c1' }}>
                      <p style={{ margin: '0', fontSize: '1.125rem', fontStyle: 'italic', color: '#374151' }}>
                        {decodeHtmlEntities(story.yoast_head_json.description)}
                      </p>
                    </div>
                  )}
                  
                  {/* Show content if available, otherwise show a message */}
                  {story.content?.rendered ? (
                    <div 
                      dangerouslySetInnerHTML={{ 
                        __html: story.content.rendered 
                      }} 
                    />
                  ) : (
                    <div>
                      {/* Bottom Description from the story's success_stories_bottom_description field */}
                      {story.success_stories_bottom_description && (
                        <div style={{ 
                          padding: '2rem', 
                          backgroundColor: '#f8f9fa', 
                          borderRadius: '0.5rem',
                          border: '1px solid #e9ecef',
                          marginBottom: '2rem'
                        }}>
                          <div className="blog-post-prose">
                            <div 
                              dangerouslySetInnerHTML={{ 
                                __html: story.success_stories_bottom_description 
                              }} 
                            />
                          </div>
                        </div>
                      )}
                      
                      <div style={{ 
                        padding: '2rem', 
                        textAlign: 'center', 
                        backgroundColor: '#f8f9fa', 
                        borderRadius: '0.5rem',
                        border: '1px solid #e9ecef'
                      }}>
                        <h3 style={{ color: '#6c757d', marginBottom: '1rem' }}>Success Story Details</h3>
                        <p style={{ color: '#6c757d' }}>
                          This success story showcases a partnership facilitated by Sport Endorse. 
                          For more details about this collaboration, please contact us.
                        </p>
                        {story.yoast_head_json?.og_image?.[0]?.url && (
                          <div style={{ marginTop: '1.5rem' }}>
                            <img 
                              src={story.yoast_head_json.og_image[0].url} 
                              alt={title}
                              style={{
                                maxWidth: '100%',
                                height: 'auto',
                                borderRadius: '0.5rem',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {/* Bottom Description for stories WITH content */}
                  {story.content?.rendered && story.success_stories_bottom_description && (
                    <div style={{ 
                      padding: '2rem', 
                      backgroundColor: '#f8f9fa', 
                      borderRadius: '0.5rem',
                      border: '1px solid #e9ecef',
                      marginTop: '2rem'
                    }}>
                      <div className="blog-post-prose">
                        <div 
                          dangerouslySetInnerHTML={{ 
                            __html: story.success_stories_bottom_description 
                          }} 
                        />
                      </div>
                    </div>
                  )}
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