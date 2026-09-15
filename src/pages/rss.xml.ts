import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { SITE } from "../data/site";

export async function GET(context: APIContext) {
  const notes = (await getCollection("notes")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

  return rss({
    title: `${SITE.name} — notes`,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: notes.map((note) => ({
      title: note.data.title,
      pubDate: note.data.pubDate,
      description: note.data.description,
      link: `/notes/${note.id}`,
    })),
    customData: "<language>en-in</language>",
  });
}
