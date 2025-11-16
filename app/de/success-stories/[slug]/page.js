import { getAllSuccessStories, getSuccessStoryBySlug } from '../../../success-stories/wordpress.js'
import SuccessStoryContent from '@/components/SuccessStoryContent'

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
        title: 'Erfolgsgeschichte Nicht Gefunden | Sport Endorse',
        description: 'Die angeforderte Erfolgsgeschichte konnte nicht gefunden werden.'
      }
    }
    
    const title = decodeHtmlEntities(story.title?.rendered || 'Erfolgsgeschichte')
    const description = story.yoast_head_json?.description || 
      (story.excerpt?.rendered ? story.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160) : 'Lesen Sie diese inspirierende Erfolgsgeschichte.')
    
    return {
      title: `${title} | Sport Endorse`,
      description: decodeHtmlEntities(description),
      alternates: {
        canonical: `https://www.sportendorse.com/de/success-stories/${resolvedParams.slug}`,
        languages: {
          'en': `/success-stories/${resolvedParams.slug}`,
          'es': `/es/success-stories/${resolvedParams.slug}`,
          'de': `/de/success-stories/${resolvedParams.slug}`
        }
      },
      openGraph: {
        title,
        description: decodeHtmlEntities(description),
        type: 'article',
        locale: 'de_DE',
        publishedTime: story.date,
        images: story.yoast_head_json?.og_image?.[0]?.url ? [
          {
            url: story.yoast_head_json.og_image[0].url,
            alt: title,
            width: story.yoast_head_json.og_image[0].width || 1200,
            height: story.yoast_head_json.og_image[0].height || 630
          }
        ] : []
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description: decodeHtmlEntities(description),
        images: story.yoast_head_json?.og_image?.[0]?.url ? [story.yoast_head_json.og_image[0].url] : []
      }
    }
  } catch (error) {
    console.warn('Error generating metadata for success story:', error)
    return {
      title: 'Erfolgsgeschichte | Sport Endorse',
      description: 'Lesen Sie inspirierende Erfolgsgeschichten auf Sport Endorse.'
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
  const resolvedParams = await params
  
  return <SuccessStoryContent slug={resolvedParams.slug} />
}