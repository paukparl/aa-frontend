import { fetchOneBySlug } from "@/lib/fetchData";
import { dtaPageFetchOptions } from "@/lib/fetchOptions";
import { schemas } from "@/lib/schemas";

export async function getDTAPage(slug: string) {
  return await fetchOneBySlug({
    path: "/dta-pages",
    slug,
    schema: schemas.dtaPage,
    options: {
      ...dtaPageFetchOptions,
    },
  });
}
