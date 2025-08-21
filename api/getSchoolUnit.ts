import { tags } from "@/lib/cacheUtils";
import { fetchOneBySlug } from "@/lib/fetchData";
import { schoolUnitDetailFetchOptions } from "@/lib/fetchOptions/school";
import { schemas } from "@/lib/schemas";

export async function getSchoolUnit(slug: string) {
  return await fetchOneBySlug({
    path: "/school-units",
    slug,
    schema: schemas.schoolUnitDetail,
    options: {
      ...schoolUnitDetailFetchOptions,
      next: { tags: [tags.schoolUnit(slug)] },
    },
  });
}
