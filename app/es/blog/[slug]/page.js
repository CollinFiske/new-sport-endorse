import { getAllPosts, getPostBySlug } from '../../../blog/wordpress.js'
import { notFound } from 'next/navigation'
import '../../../../styles/blog.css'
import MainLogo from '@/components/MainLogo'

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const resolvedParams = await params // Await params first
  const post = await getPostBySlug(resolvedParams.slug)
  
  if (!post) {
    return {
      title: 'Publicación No Encontrada'
    }
  }
  
  return {
    title: post.title.rendered,
    description: post.excerpt.rendered.replace(/<[^>]*>/g, ''), // Strip HTML
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

      {/* Main Content - Centered */}
      <main className="blog-main">
        <div className="blog-post-main-container">
          <article className="blog-post-article">
            <header className="blog-post-article-header">
              <h1 className="blog-post-article-title">{post.title.rendered}</h1>
              
              <div className="blog-post-article-meta">
                <time>{new Date(post.date).toLocaleDateString('es-ES')}</time>
                {post._embedded?.author?.[0] && (
                  <span>Por {post._embedded.author[0].name}</span>
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