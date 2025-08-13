import { fetchOneBySlug } from "@/lib/fetchData";
import { dtaPersonDetailFetchOptions } from "@/lib/fetchOptions";
import { schemas } from "@/lib/schemas";

export async function getDTAPerson(slug: string) {
  return await fetchOneBySlug({
    path: "/dta-people",
    slug,
    schema: schemas.dtaPersonDetail,
    options: {
      ...dtaPersonDetailFetchOptions,
      next: { tags: [`dta-person-${slug}`] },
    },
  });
}
