// app/wordpress/podcasts/wordpress.js
const API_URL = 'https://www.sportendorse.com/wp-json/wp/v2'

export async function getAllPodcasts() {
  try {
    // First, let's try to get all posts and filter, or find the podcast category
    const res = await fetch(`${API_URL}/posts?_embed`, {
      next: { revalidate: 300 }
    })
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    
    const posts = await res.json()
    
    // Filter posts that have 'podcasts' in their link or are in podcast category
    const podcasts = posts.filter(post => 
      post.link && post.link.includes('/podcasts/')
    )
    
    return podcasts
  } catch (error) {
    console.error('Error fetching podcasts:', error)
    return []
  }
}

export async function getPodcastBySlug(slug) {
  try {
    console.log('Fetching podcast with slug:', slug)
    const res = await fetch(`${API_URL}/posts?slug=${slug}&_embed`, {
      next: { revalidate: 300 }
    })
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    
    const posts = await res.json()
    console.log('API response for podcast slug', slug, ':', posts)
    
    // Make sure it's actually a podcast post
    const podcast = posts.find(post => 
      post.link && post.link.includes('/podcasts/')
    )
    
    return podcast || null
  } catch (error) {
    console.error('Error fetching podcast by slug:', error)
    return null
  }
}