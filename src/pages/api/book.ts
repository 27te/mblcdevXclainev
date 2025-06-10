import { getCollection } from "astro:content";

export async function GET({ params, request }) {
  const posts = await getCollection("books");
  const dataFilter = posts.filter((post) => post.data.language === "es");
  const data = dataFilter.map((post) => {
    return {
      slug: post.slug,
    };
  });
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
