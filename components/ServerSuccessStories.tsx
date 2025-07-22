import SuccessStories from "./SuccessStories";

export default async function ServerSuccessStories() {
  let stories = [];
  let error: string | undefined = undefined;
  try {
    const res = await fetch(
      "https://www.sportendorse.com/wp-json/wp/v2/success_stories?_embed&per_page=10&page=1",
      { cache: "force-cache", next: { revalidate: 3600 } } // ISR: cache for 1 hour
    );
    if (!res.ok) throw new Error("Failed to fetch success stories");
    stories = await res.json();
  } catch {
    error = "Unable to load success stories at this time. Please try again later.";
  }
  return <SuccessStories stories={stories} serverError={error} />;
}
