//page.js

import { getAllSuccessStories } from './wordpress.js';
import Link from 'next/link';
import "../../styles/blog.css"

export const metadata = {
  //metadataBase: new URL("put the home url here later"),
  title: "Athlete Sponsorship Success Stories | Sport Endorse",
  description: "Read success stories of athlete sponsorships, sports influencers, and brand partnerships. Learn how elite athletes have powered impactful sports marketing campaigns.",
  openGraph:{ // og:title and so on
    title: "Athlete Sponsorship Success Stories | Sport Endorse",
    description: "Read success stories of athlete sponsorships, sports influencers, and brand partnerships. Learn how elite athletes have powered impactful sports marketing campaigns.",
    type:"website",
    locale:"en_US",
    //url:"" to be added later
    siteName:"Sport Endorse"
  },
};

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

export default async function SuccessStoriesPage() {
  const stories = await getAllSuccessStories();

  return (
    <div className="blog-container">

      <main className="blog-main">
        <div className="blog-main-header">
          <h2 className="blog-main-title">Sport Endorse Success Stories</h2>
          <p className="blog-main-description">
            Discover how our athletes and brands have achieved remarkable success through strategic partnerships
          </p>
        </div>

        <div className="blog-posts-container">
          <div className="blog-posts-grid">
            {stories.map((story) => (
              <article key={story.id} className="blog-post-card">
                {story.yoast_head_json?.og_image?.[0]?.url && (
                  <img
                    src={story.yoast_head_json.og_image[0].url}
                    alt={story.title.rendered}
                    className="blog-post-image"
                  />
                )}

                <div className="blog-post-content">
                  <h3 className="blog-post-title">
                    <Link
                      href={`/wp/successStories/${story.slug}`}
                      className="blog-post-link"
                    >
                      {decodeHtmlEntities(story.title.rendered)}
                    </Link>
                  </h3>

                  <Link
                    href={`/wp/successStories/${story.slug}`}
                    className="blog-post-link"
                    style={{ textDecoration: 'none' }}
                  >
                    <p className="blog-post-excerpt">
                      {decodeHtmlEntities(story.yoast_head_json?.description) || 'No summary available.'}
                    </p>
                  </Link>

                  <time className="blog-post-date">
                    {new Date(story.date).toLocaleDateString()}
                  </time>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
