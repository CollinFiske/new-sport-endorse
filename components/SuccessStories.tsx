"use client";
import React, { useEffect, useState } from "react";
import "../styles/successStories.css";

function decodeHtmlEntities(text: string) {
  if (!text) return text;
  const entities: Record<string, string> = {
    "&#038;": "&",
    "&#8217;": "'",
    "&#8216;": "'",
    "&#8220;": '"',
    "&#8221;": '"',
    "&#8211;": "–",
    "&#8212;": "—",
    "&amp;": "&",
    "&quot;": '"',
    "&apos;": "'",
    "&lt;": "<",
    "&gt;": ">",
    "&nbsp;": " "
  };
  let decodedText = text;
  for (const [entity, replacement] of Object.entries(entities)) {
    decodedText = decodedText.replace(new RegExp(entity, "g"), replacement);
  }
  return decodedText;
}

const VISIBLE_COUNT = 3;

type Story = {
  id: number;
  title: { rendered: string };
  yoast_head_json?: { og_image?: { url: string }[]; description?: string };
  link: string;
};

export default function SuccessStories() {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [startIdx, setStartIdx] = useState(0);

  useEffect(() => {
    async function fetchStories() {
      try {
        const res = await fetch(
          `https://www.sportendorse.com/wp-json/wp/v2/success_stories?_embed&per_page=10&page=1`
        );
        if (!res.ok) throw new Error("Failed to fetch success stories");
        const data = await res.json();
        setStories(data || []);
      } catch {
        setStories([]);
      } finally {
        setLoading(false);
      }
    }
    fetchStories();
  }, []);

  const handlePrev = () => {
    setStartIdx((prev) => Math.max(0, prev - 1));
  };
  const handleNext = () => {
    setStartIdx((prev) => Math.min(stories.length - VISIBLE_COUNT, prev + 1));
  };

  const visibleStories = stories.slice(startIdx, startIdx + VISIBLE_COUNT);

  return (
    <section className="success-stories">
      <h2>Success Stories</h2>
      <p>Learn how brands and athletes have been winning together</p>
      <div className="stories-carousel-container">
        <button
          className="carousel-arrow left"
          onClick={handlePrev}
          disabled={startIdx === 0}
          aria-label="Previous stories"
        >
          &#8592;
        </button>
        <div className="stories-scroll">
          {loading ? (
            <div>Loading...</div>
          ) : stories.length === 0 ? (
            <div>No stories found.</div>
          ) : (
            visibleStories.map((story, i) => (
              <div className={`success-card${i === 1 ? " active" : " faded"}`} key={story.id}>
                {story.yoast_head_json?.og_image?.[0]?.url && (
                  <img
                    src={story.yoast_head_json.og_image[0].url}
                    alt={story.title.rendered}
                    loading="lazy"
                  />
                )}
                <div className="success-info">
                  <p className="success-title">{decodeHtmlEntities(story.title.rendered)}</p>
                  <p className="success-text">
                    {decodeHtmlEntities(story.yoast_head_json?.description ?? "") || "No summary available."}
                  </p>
                  <a className="read-more" href="wp/succcessStories" >READ MORE →</a>
                </div>
              </div>
            ))
          )}
        </div>
        <button
          className="carousel-arrow right"
          onClick={handleNext}
          disabled={startIdx >= Math.max(0, stories.length - VISIBLE_COUNT)}
          aria-label="Next stories"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
}