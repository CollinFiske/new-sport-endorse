
import { getAllPosts, getPostBySlug } from '../wordpress'
import { notFound } from 'next/navigation'

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
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title.rendered}</h1>
        
        <div className="flex items-center gap-4 text-gray-600 mb-6">
          <time>{new Date(post.date).toLocaleDateString()}</time>
          {post._embedded?.author?.[0] && (
            <span>By {post._embedded.author[0].name}</span>
          )}
        </div>
        
        {post._embedded?.['wp:featuredmedia']?.[0] && (
          <img 
            src={post._embedded['wp:featuredmedia'][0].source_url} 
            alt={post.title.rendered}
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
        )}
      </header>
      
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ 
          __html: post.content.rendered 
        }} 
      />
    </article>
  )
}