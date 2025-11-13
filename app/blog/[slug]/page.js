import { getAllPosts, getPostBySlug } from '../wordpress'
import { notFound } from 'next/navigation'
import '../../../styles/blog.css'
import MainLogo from '@/components/MainLogo'
import BlogBackButton from '@/components/BlogBackButton'

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const resolvedParams = await params // Await params first
  const post = await getPostBySlug(resolvedParams.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }
  
  return {
    title: post.title.rendered,
    description: post.excerpt.rendered.replace(/<[^>]*>/g, ''), // Strip HTML
    alternates: {
      canonical: `https://www.sportendorse.com/blog/${resolvedParams.slug}`
    },
    openGraph: {
      title: post.title.rendered,
      description: post.excerpt.rendered.replace(/<[^>]*>/g, ''),
      images: post._embedded?.['wp:featuredmedia']?.[0]?.source_url ? [
        {
          url: post._embedded['wp:featuredmedia'][0].source_url,
          alt: post.title.rendered
        }
      ] : []
    }
  }
}

// Generate static params for all posts
export async function generateStaticParams() {
  const posts = await getAllPosts()
  
  return posts.map(post => ({
    slug: post.slug
  }))
}

export default async function BlogPost({ params }) {
  const resolvedParams = await params // Await params here too
  const post = await getPostBySlug(resolvedParams.slug)
  
  if (!post) {
    notFound()
  }
  
  return (
    <div className="blog-container">
      {/* Back Button at top of page */}
      <div style={{ padding: '1rem 1rem 0 1rem', maxWidth: '1200px', margin: '0 auto' }}>
        <BlogBackButton />
      </div>

      {/* Main Content - Centered */}
      <main className="blog-main">
        <div className="blog-post-main-container">
          <article className="blog-post-article">
            <header className="blog-post-article-header">
              <h1 className="blog-post-article-title">{post.title.rendered}</h1>
              
              <div className="blog-post-article-meta">
                <time>{new Date(post.date).toLocaleDateString()}</time>
                {post._embedded?.author?.[0] && (
                  <span>By {post._embedded.author[0].name}</span>
                )}
              </div>
              
              {post._embedded?.['wp:featuredmedia']?.[0] && (
                <img 
                  src={post._embedded['wp:featuredmedia'][0].source_url} 
                  alt={post.title.rendered}
                  className="blog-post-article-image"
                  style={{width:"auto", maxWidth:"1200px"}}
                />
              )}
            </header>
            
            <div className="blog-post-article-content">
              <div 
                className="blog-post-prose"
                dangerouslySetInnerHTML={{ 
                  __html: post.content.rendered 
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