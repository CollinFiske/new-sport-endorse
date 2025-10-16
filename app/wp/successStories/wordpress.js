//wordpress.js

const API_URL = 'https://www.sportendorse.com/wp-json/wp/v2'

export async function getAllSuccessStories() {
  let allStories = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    try {
      const res = await fetch(`${API_URL}/success_stories?_embed&page=${page}`, {
        next: { revalidate: 300 } // ISR with App Router
      });

      if (!res.ok) {
        if (res.status === 404) {
          // No more pages available
          hasMore = false;
          break;
        }
        console.warn(`Failed to fetch success stories page ${page}: ${res.status}`);
        hasMore = false;
        break;
      }

      const stories = await res.json();
      
      // If no stories returned or empty array, we've reached the end
      if (!stories || stories.length === 0) {
        hasMore = false;
        break;
      }

      // Filter out stories that might cause issues
      const validStories = stories.filter(story => {
        try {
          return (
            story &&
            typeof story === 'object' &&
            story.slug &&
            story.title &&
            story.title.rendered &&
            story.content &&
            story.content.rendered
          );
        } catch (error) {
          console.warn(`Filtering out invalid story:`, error);
          return false;
        }
      });

      allStories = allStories.concat(validStories);
      page++;

      // Check if there are more pages using the X-WP-TotalPages header
      const totalPages = res.headers.get('X-WP-TotalPages');
      if (totalPages && page > parseInt(totalPages)) {
        hasMore = false;
      }
    } catch (error) {
      console.warn(`Error fetching success stories page ${page}:`, error);
      hasMore = false;
      break;
    }
  }

  return allStories;
}

export async function getSuccessStoryBySlug(slug) {
  try {
    const res = await fetch(`${API_URL}/success_stories?slug=${slug}&_embed`, {
      next: { revalidate: 300 }
    });
    
    if (!res.ok) {
      console.warn(`Failed to fetch success story "${slug}": ${res.status}`);
      return null;
    }
    
    const stories = await res.json();
    const story = stories[0];
    
    // Validate the story has required fields
    if (!story || !story.title || !story.title.rendered || !story.content || !story.content.rendered) {
      console.warn(`Success story "${slug}" is missing required content`);
      return null;
    }
    
    return story;
  } catch (error) {
    console.warn(`Error fetching success story "${slug}":`, error);
    return null;
  }
}