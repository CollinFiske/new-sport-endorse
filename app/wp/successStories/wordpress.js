//wordpress.js

const API_URL = 'https://www.sportendorse.com/wp-json/wp/v2'

export async function getAllSuccessStories() {
  let allStories = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const res = await fetch(`${API_URL}/success_stories?_embed&page=${page}`, {
      next: { revalidate: 300 } // ISR with App Router
    });

    if (!res.ok) {
      if (res.status === 404) {
        // No more pages available
        hasMore = false;
        break;
      }
      throw new Error('Failed to fetch success stories');
    }

    const stories = await res.json();
    
    // If no stories returned or empty array, we've reached the end
    if (!stories || stories.length === 0) {
      hasMore = false;
      break;
    }

    allStories = allStories.concat(stories);
    page++;

    // Check if there are more pages using the X-WP-TotalPages header
    const totalPages = res.headers.get('X-WP-TotalPages');
    if (totalPages && page > parseInt(totalPages)) {
      hasMore = false;
    }
  }

  return allStories;
}

export async function getSuccessStoryBySlug(slug) {
  const res = await fetch(`${API_URL}/success_stories?slug=${slug}&_embed`, {
    next: { revalidate: 300 }
  })
  if (!res.ok) throw new Error('Failed to fetch success story')
  const stories = await res.json()
  return stories[0]
}