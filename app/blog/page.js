import { getAllPosts } from './wordpress.js'
import Link from 'next/link'
import '../../styles/blog.css'


export const metadata = {
  title: "Blogs on Athlete Sponsorship & Sports Marketing | Sport Endorse",
  description: "Explore expert blogs on athlete sponsorship, sports influencers, and brand ambassadors. Learn how to elevate your sports marketing campaigns with elite athletes.",
  openGraph:{ // og:title and so on
    title: "Blogs on Athlete Sponsorship & Sports Marketing | Sport Endorse",
    description: "Explore expert blogs on athlete sponsorship, sports influencers, and brand ambassadors. Learn how to elevate your sports marketing campaigns with elite athletes.",
    type:"website",
    locale:"en_US",
    //url:"" to be added later
    siteName:"Sport Endorse"
  },
}

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

export default async function BlogPage() {
  const posts = await getAllPosts()
  
  console.log('Posts data:', posts.map(p => ({ id: p.id, slug: p.slug, title: p.title.rendered })));
    
  return (
    <div className="blog-container">

      {/* Main Content */}
      <main className="blog-main">
        <div className="blog-main-header">
          <h1 className="blog-main-title">Latest Blog Posts</h1>
          <p className="blog-main-description">
            Articles from Sport Endorse team members on what is impacting the sports, marketing and sponsorship world
          </p>
        </div>
        
        {/* Centered Posts Grid */}
        <div className="blog-posts-container">
          <div className="blog-posts-grid">
            {posts.map(post => (
              <article key={post.id} className="blog-post-card">
                {post._embedded?.['wp:featuredmedia']?.[0] && (
                  <img
                    src={post._embedded['wp:featuredmedia'][0].source_url}
                    alt={post.title.rendered}
                    className="blog-post-image"
                  />
                )}
                        
                <div className="blog-post-content">
                  <h2 className="blog-post-title">
                    <Link
                      href={`/wp/blog/${post.slug}`}
                      className="blog-post-link"
                    >
                      {decodeHtmlEntities(post.title.rendered)}
                    </Link>
                  </h2>
                            
                  <div
                    className="blog-post-excerpt"
                    dangerouslySetInnerHTML={{
                      __html: decodeHtmlEntities(post.excerpt.rendered)
                    }}
                  />
                            
                  <time className="blog-post-date">
                    {new Date(post.date).toLocaleDateString()}
                  </time>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}