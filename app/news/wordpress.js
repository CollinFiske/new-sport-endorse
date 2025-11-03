// WordPress API functions for news
export async function getNewsStories() {
  try {
    const response = await fetch('https://www.sportendorse.com/wp-json/wp/v2/presses', {
      next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch news stories');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching news stories:', error);
    return [];
  }
}

export async function getNewsStoryBySlug(slug) {
  try {
    const response = await fetch(`https://www.sportendorse.com/wp-json/wp/v2/presses?slug=${slug}`, {
      next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch news story: ${slug}`);
    }
    
    const stories = await response.json();
    return stories[0] || null;
  } catch (error) {
    console.error('Error fetching news story:', error);
    return null;
  }
}

export async function getFeaturedMedia(mediaId) {
  if (!mediaId) return null;
  
  try {
    const response = await fetch(`https://www.sportendorse.com/wp-json/wp/v2/media/${mediaId}`, {
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) {
      return null;
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching featured media:', error);
    return null;
  }
}