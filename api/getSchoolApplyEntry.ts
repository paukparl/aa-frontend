import { tags } from "@/lib/cacheUtils";
import { fetchOneBySlug } from "@/lib/fetchData";
import { schoolApplyEntryDetailFetchOptions } from "@/lib/fetchOptions/school";
import { schemas } from "@/lib/schemas";

export async function getSchoolApplyEntry(slug: string) {
  return await fetchOneBySlug({
    path: "/school-applies",
    slug,
    schema: schemas.schoolApplyEntryDetail,
    options: {
      ...schoolApplyEntryDetailFetchOptions,
      next: { tags: [tags.schoolApplyEntry(slug)] },
    },
  });
}
