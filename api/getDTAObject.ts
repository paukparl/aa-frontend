import { tags } from "@/lib/cacheUtils";
import { fetchOneBySlug } from "@/lib/fetchData";
import { dtaObjectDetailFetchOptions } from "@/lib/fetchOptions";
import { schemas } from "@/lib/schemas";

export async function getDTAObject(slug: string) {
  return await fetchOneBySlug({
    path: "/dta-objects",
    slug,
    schema: schemas.dtaObjectDetail,
    options: {
      ...dtaObjectDetailFetchOptions,
      next: { tags: [tags.dtaObject(slug)] },
    },
  });
}
