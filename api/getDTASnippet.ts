import { fetchOne } from "@/lib/fetchData";
import { dtaSnippetFetchOptions } from "@/lib/fetchOptions";
import { schemas } from "@/lib/schemas";

export async function getDTASnippet() {
  return await fetchOne({
    path: "/dta-snippet",
    schema: schemas.dtaSnippet,
    options: {
      ...dtaSnippetFetchOptions,
    },
  });
}
