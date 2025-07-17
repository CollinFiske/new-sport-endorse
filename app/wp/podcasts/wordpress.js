// wordpress.js - API service for fetching podcasts
const WORDPRESS_API_URL = 'https://www.sportendorse.com/wp-json/wp/v2';

/**
 * Fetch all podcasts from the WordPress API
 * @returns {Promise<Array>} Array of podcast objects
 */
export async function fetchPodcasts() {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/podcasts`, {
      headers: {
        'Content-Type': 'application/json',
      },
      // Add cache control for better performance
      next: { 
        revalidate: 3600*24 // Revalidate every day
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch podcasts: ${response.status}`);
    }

    const podcasts = await response.json();
    return podcasts;
  } catch (error) {
    console.error('Error fetching podcasts:', error);
    throw error;
  }
}

/**
 * Fetch a single podcast by ID
 * @param {number} id - The podcast ID
 * @returns {Promise<Object>} Podcast object
 */
export async function fetchPodcastById(id) {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/podcasts/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      next: { 
        revalidate: 3600*24
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch podcast: ${response.status}`);
    }

    const podcast = await response.json();
    return podcast;
  } catch (error) {
    console.error('Error fetching podcast:', error);
    throw error;
  }
}

/**
 * Utility function to extract plain text from HTML
 * @param {string} html - HTML string
 * @returns {string} Plain text
 */
export function stripHtml(html) {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '').trim();
}

/**
 * Utility function to format date
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date
 */
export function formatDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Utility function to create excerpt from content
 * @param {string} content - Full content
 * @param {number} maxLength - Maximum length of excerpt
 * @returns {string} Excerpt
 */
export function createExcerpt(content, maxLength = 150) {
  if (!content) return '';
  const plainText = stripHtml(content);
  if (plainText.length <= maxLength) return plainText;
  return plainText.substring(0, maxLength).trim() + '...';
}

/**
 * Generate custom iframe HTML for podcast player
 * @param {Object} podcast - Podcast object
 * @returns {string} Custom iframe HTML
 */
export function generatePodcastIframe(podcast) {
  if (!podcast || !podcast.id) return '';
  
  // Create a custom iframe URL based on podcast data
  //const iframeUrl = `https://www.sportendorse.com/podcast-player?id=${podcast.id}&title=${encodeURIComponent(podcast.title?.rendered || '')}&slug=${podcast.slug || ''}`;
  
  return `
    <p>iframe here</p>`/*
    <iframe 
      src="${iframeUrl}"
      width="100%"
      height="200"
      frameborder="0"
      scrolling="no"
      title="Podcast Player for ${podcast.title?.rendered || 'Untitled'}"
      style="border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);"
      allowfullscreen>
    </iframe>
  `;*/
}

/**
 * Extract audio URL from podcast content if available
 * @param {Object} podcast - Podcast object
 * @returns {string|null} Audio URL or null if not found
 */
export function extractAudioUrl(podcast) {
  if (!podcast) return null;
  
  // Check if there's an audio field in the podcast object
  if (podcast.audio_url) {
    return podcast.audio_url;
  }
  
  // Try to extract from content
  if (podcast.content && podcast.content.rendered) {
    const audioMatch = podcast.content.rendered.match(/src="([^"]*\.(mp3|wav|ogg|m4a))"/i);
    if (audioMatch) {
      return audioMatch[1];
    }
  }
  
  // Try to extract from excerpt
  if (podcast.excerpt && podcast.excerpt.rendered) {
    const audioMatch = podcast.excerpt.rendered.match(/src="([^"]*\.(mp3|wav|ogg|m4a))"/i);
    if (audioMatch) {
      return audioMatch[1];
    }
  }
  
  return null;
}