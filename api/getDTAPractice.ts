import { tags } from "@/lib/cacheUtils";
import { fetchOneBySlug } from "@/lib/fetchData";
import { dtaPracticeDetailFetchOptions } from "@/lib/fetchOptions";
import { schemas } from "@/lib/schemas";

export async function getDTAPractice(slug: string) {
  return await fetchOneBySlug({
    path: "/dta-practices",
    slug,
    schema: schemas.dtaPracticeDetail,
    options: {
      ...dtaPracticeDetailFetchOptions,
      next: { tags: [tags.dtaPractice(slug)] },
    },
  });
}
