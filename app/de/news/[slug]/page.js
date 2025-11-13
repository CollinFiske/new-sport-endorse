import { getNewsStories, getNewsStoryBySlug } from '../../../news/wordpress';
import { notFound } from 'next/navigation';
import '../../../../styles/blog.css';
import MainLogo from '@/components/MainLogo';

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const newsStory = await getNewsStoryBySlug(resolvedParams.slug);
  
  if (!newsStory) {
    return {
      title: 'Nachricht Nicht Gefunden'
    }
  }
  
  return {
    title: newsStory.title.rendered,
    description: newsStory.excerpt.rendered.replace(/<[^>]*>/g, ''), // Strip HTML
    alternates: {
      canonical: `https://www.sportendorse.com/de/news/${resolvedParams.slug}`
    },
    openGraph: {
      title: newsStory.title.rendered,
      description: newsStory.excerpt.rendered.replace(/<[^>]*>/g, ''),
      images: newsStory.yoast_head_json?.og_image?.[0]?.url ? [
        {
          url: newsStory.yoast_head_json.og_image[0].url,
          alt: newsStory.title.rendered
        }
      ] : []
    }
  }
}

// Generate static params for all news stories
export async function generateStaticParams() {
  const newsStories = await getNewsStories();
  
  return newsStories.map(story => ({
    slug: story.slug
  }));
}

export default async function NewsStoryPost({ params }) {
  const resolvedParams = await params;
  const newsStory = await getNewsStoryBySlug(resolvedParams.slug);
  
  if (!newsStory) {
    notFound();
  }
  
  return (
    <div className="blog-container">

      {/* Main Content - Centered */}
      <main className="blog-main">
        <div className="blog-post-main-container">
          <article className="blog-post-article">
            <header className="blog-post-article-header">
              <h1 className="blog-post-article-title">{newsStory.title.rendered}</h1>
              
              <div className="blog-post-article-meta">
                <time>{new Date(newsStory.date).toLocaleDateString('de-DE')}</time>
                {newsStory._embedded?.author?.[0] && (
                  <span>Von {newsStory._embedded.author[0].name}</span>
                )}
              </div>
              
              {newsStory.yoast_head_json?.og_image?.[0]?.url && (
                <img 
                  src={newsStory.yoast_head_json.og_image[0].url} 
                  alt={newsStory.title.rendered}
                  className="blog-post-article-image"
                  style={{width:"auto", maxWidth:"1200px"}}
                />
              )}
            </header>
            
            <div className="blog-post-article-content">
              <div 
                className="blog-post-prose"
                dangerouslySetInnerHTML={{ 
                  __html: newsStory.content.rendered 
                }} 
              />
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