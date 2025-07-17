//page.js

import { getAllSuccessStories } from './wordpress.js';
import "../../../styles/blog.css"

export const metadata = {
  title: 'Success Stories - SportEndorse',
  description: 'Inspiring success stories from our athlete and brand partnerships',
};

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
                    {story.title.rendered}
                  </h3>

                  <p className="blog-post-excerpt">
                    {story.yoast_head_json?.description || 'No summary available.'}
                  </p>

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
