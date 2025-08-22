import { tags } from "@/lib/cacheUtils";
import { fetchOneBySlug } from "@/lib/fetchData";
import { schoolFacilityDetailFetchOptions } from "@/lib/fetchOptions/school";
import { schemas } from "@/lib/schemas";

export async function getSchoolFacility(slug: string) {
  return await fetchOneBySlug({
    path: "/school-facilities",
    slug,
    schema: schemas.schoolFacilityDetail,
    options: {
      ...schoolFacilityDetailFetchOptions,
      next: { tags: [tags.schoolFacility(slug)] },
    },
  });
}
