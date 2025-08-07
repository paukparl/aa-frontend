import { fetchOne } from "@/lib/fetchData";
import { dtaSnippetFetchOptions } from "@/lib/fetchOptions";
import { schemas } from "@/lib/schemas";

export async function getDTASnippet() {
  return schemas.getOneRes(schemas.dtaSnippet).parse(
    await fetchOne("/dta-snippet", {
      ...dtaSnippetFetchOptions,
    }),
  ).data;
}
