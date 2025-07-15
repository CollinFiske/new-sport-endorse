// app/wordpress/podcasts/page.js
import { getAllPodcasts } from './wordpress'
import Link from 'next/link'

export const metadata = {
  title: 'Athlete Sponsorship Podcast - SportEndorse',
  description: 'Listen to our podcast about athlete sponsorship and sports marketing insights'
}

export default async function PodcastsPage() {
  const podcasts = await getAllPodcasts()
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Athlete Sponsorship Podcast</h1>
      
      {podcasts.length === 0 ? (
        <p className="text-gray-600">No podcasts found. Check the API configuration.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {podcasts.map(podcast => (
            <article key={podcast.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {podcast._embedded?.['wp:featuredmedia']?.[0] && (
                <img 
                  src={podcast._embedded['wp:featuredmedia'][0].source_url} 
                  alt={podcast.title.rendered}
                  className="w-full h-48 object-cover"
                />
              )}
              
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">
                  <Link 
                    href={`/wordpress/podcasts/${podcast.slug}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {podcast.title.rendered}
                  </Link>
                </h2>
                
                <div 
                  className="text-gray-600 mb-4"
                  dangerouslySetInnerHTML={{ 
                    __html: podcast.excerpt.rendered 
                  }} 
                />
                
                <time className="text-sm text-gray-500">
                  {new Date(podcast.date).toLocaleDateString()}
                </time>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}