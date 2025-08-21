import { tags } from "@/lib/cacheUtils";
import { fetchOneBySlug } from "@/lib/fetchData";
import { schoolProgrammeDetailFetchOptions } from "@/lib/fetchOptions/school";
import { schemas } from "@/lib/schemas";

export async function getSchoolProgramme(slug: string) {
  return await fetchOneBySlug({
    path: "/school-programmes",
    slug,
    schema: schemas.schoolProgrammeDetail,
    options: {
      ...schoolProgrammeDetailFetchOptions,
      next: { tags: [tags.schoolProgramme(slug)] },
    },
  });
}
