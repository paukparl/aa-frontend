import { tags } from "@/lib/cacheUtils";
import { fetchOneBySlug } from "@/lib/fetchData";
import { schoolPersonDetailFetchOptions } from "@/lib/fetchOptions/school";
import { schemas } from "@/lib/schemas";

export async function getSchoolPerson(slug: string) {
  return await fetchOneBySlug({
    path: "/school-people",
    slug,
    schema: schemas.schoolPersonDetail,
    options: {
      ...schoolPersonDetailFetchOptions,
      next: { tags: [tags.schoolPerson(slug)] },
    },
  });
}
