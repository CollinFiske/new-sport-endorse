
export async function fetchPodcastPages() {
  const res = await fetch("https://www.sportendorse.com/wp-json/wp/v2/pages?_embed");
  const pages = await res.json();

  return pages
    .filter((page) => {
      const content = page.content?.rendered || "";
      const title = page.title?.rendered?.toLowerCase() || "";
      return (
        title.includes("the sitdown with sport endorse") ||
        content.includes("The Sitdown with Sport Endorse") ||
        content.includes("<iframe")
      );
    })
    .map((page) => ({
      id: page.id,
      slug: page.slug,
      title: page.title.rendered,
      content: page.content.rendered,
    }));
}

export async function fetchPodcastBySlug(slug) {
  const res = await fetch(`https://www.sportendorse.com/wp-json/wp/v2/pages?slug=${slug}`);
  const [page] = await res.json();
  if (!page) return null;

  return {
    id: page.id,
    title: page.title.rendered,
    content: page.content.rendered,
  };
}
