import { tags } from "@/lib/cacheUtils";
import { fetchOneBySlug } from "@/lib/fetchData";
import { schoolFacilityPreviewFetchOptions } from "@/lib/fetchOptions/school";
import { schemas } from "@/lib/schemas";

export async function getSchoolFacility(slug: string) {
  return await fetchOneBySlug({
    path: "/school-facilities",
    slug,
    schema: schemas.schoolFacilityDetail,
    options: {
      ...schoolFacilityPreviewFetchOptions,
      next: { tags: [tags.schoolFacility(slug)] },
    },
  });
}
