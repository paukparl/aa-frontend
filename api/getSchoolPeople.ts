import { tags } from "@/lib/cacheUtils";
import { fetchMany } from "@/lib/fetchData";
import { schoolPersonPreviewFetchOptions } from "@/lib/fetchOptions/school";
import { schemas } from "@/lib/schemas";

export async function getSchoolPeople() {
  return await fetchMany({
    path: "/school-people",
    schema: schemas.schoolPersonPreview,
    options: {
      ...schoolPersonPreviewFetchOptions,
      next: { tags: [tags.schoolPeople] },
    },
  });
}
