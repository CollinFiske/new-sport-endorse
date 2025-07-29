// app/wordpress/podcasts/[slug]/page.js
import { getAllPodcasts, getPodcastBySlug } from '../wordpress'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const podcast = await getPodcastBySlug(resolvedParams.slug)
  
  if (!podcast) {
    return {
      title: 'Podcast Not Found'
    }
  }
  
  return {
    title: podcast.title.rendered,
    description: podcast.excerpt.rendered.replace(/<[^>]*>/g, ''),
    openGraph: {
      title: podcast.title.rendered,
      description: podcast.excerpt.rendered.replace(/<[^>]*>/g, ''),
      images: podcast._embedded?.['wp:featuredmedia']?.[0]?.source_url ? [
        {
          url: podcast._embedded['wp:featuredmedia'][0].source_url,
          alt: podcast.title.rendered
        }
      ] : []
    }
  }
}

export async function generateStaticParams() {
  const podcasts = await getAllPodcasts()
  
  return podcasts.map(podcast => ({
    slug: podcast.slug
  }))
}

export default async function PodcastPost({ params }) {
  const resolvedParams = await params
  const podcast = await getPodcastBySlug(resolvedParams.slug)
  
  if (!podcast) {
    notFound()
  }
  
  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{podcast.title.rendered}</h1>
        
        <div className="flex items-center gap-4 text-gray-600 mb-6">
          <time>{new Date(podcast.date).toLocaleDateString()}</time>
          {podcast._embedded?.author?.[0] && (
            <span>By {podcast._embedded.author[0].name}</span>
          )}
        </div>
        
        {podcast._embedded?.['wp:featuredmedia']?.[0] && (
          <img 
            src={podcast._embedded['wp:featuredmedia'][0].source_url} 
            alt={podcast.title.rendered}
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
        )}
      </header>
      
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ 
          __html: podcast.content.rendered 
        }} 
      />
    </article>
  )
}