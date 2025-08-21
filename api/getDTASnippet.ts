import { tags } from "@/lib/cacheUtils";
import { fetchOne } from "@/lib/fetchData";
import { schemas } from "@/lib/schemas";

export async function getDTASnippet() {
  return await fetchOne({
    path: "/dta-snippet",
    schema: schemas.dtaSnippet,
    options: { next: { tags: [tags.dtaSnippet] } },
  });
}
