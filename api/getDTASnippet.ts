import { fetchOne } from "@/lib/fetchData";
import { dtaSnippetsFetchOptions } from "@/lib/fetchOptions";
import { schemas } from "@/lib/schemas";

export async function getDTASnippets() {
  return schemas.getOneRes(schemas.dtaSnippets).parse(
    await fetchOne("/dta-snippet", {
      ...dtaSnippetsFetchOptions,
    }),
  ).data;
}
