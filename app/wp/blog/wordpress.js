
const API_URL = 'https://www.sportendorse.com/wp-json/wp/v2'

export async function getAllPosts() {
  const res = await fetch(`${API_URL}/posts?_embed`, {
    next: { revalidate: 300 } // ISR with App Router
  })
  if (!res.ok) throw new Error('Failed to fetch posts')
  return res.json()
}

export async function getPostBySlug(slug) {
  const res = await fetch(`${API_URL}/posts?slug=${slug}&_embed`, {
    next: { revalidate: 300 }
  })
  if (!res.ok) throw new Error('Failed to fetch post')
  const posts = await res.json()
  return posts[0]
}