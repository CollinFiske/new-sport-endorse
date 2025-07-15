
import { getAllPosts } from './wordpress.js'
import Link from 'next/link'

export const metadata = {
  title: 'Athlete Sponsorship Blog - SportEndorse',
  description: 'Latest insights on athlete sponsorship and sports marketing'
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  console.log('Posts data:', posts.map(p => ({ id: p.id, slug: p.slug, title: p.title.rendered })));
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Athlete Sponsorship Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {post._embedded?.['wp:featuredmedia']?.[0] && (
              <img 
                src={post._embedded['wp:featuredmedia'][0].source_url} 
                alt={post.title.rendered}
                className="w-full h-48 object-cover"
              />
            )}
            
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">
                <Link 
                  href={`/wordpress/blog/${post.slug}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {post.title.rendered}
                </Link>
              </h2>
              
              <div 
                className="text-gray-600 mb-4"
                dangerouslySetInnerHTML={{ 
                  __html: post.excerpt.rendered 
                }} 
              />
              
              <time className="text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString()}
              </time>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}