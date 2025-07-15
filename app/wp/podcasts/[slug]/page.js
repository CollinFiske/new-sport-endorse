// currently not using with current file setup


import { fetchPodcastBySlug } from "../wordpress";

export default async function EpisodePage({ params }) {
  const episode = await fetchPodcastBySlug(params.slug);

  if (!episode) return <p>Episode not found</p>;

  return (
    <div className="podcast-episode-detail">
      <h1 dangerouslySetInnerHTML={{ __html: episode.elementor-heading-title }} />
      <div dangerouslySetInnerHTML={{ __html: episode.content }} />
    </div>
  );
}
