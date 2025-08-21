import { tags } from "@/lib/cacheUtils";
import { fetchMany } from "@/lib/fetchData";
import { schemas } from "@/lib/schemas";

export async function getSchoolPeople() {
  return await fetchMany({
    path: "/school-people",
    schema: schemas.schoolPersonPreview,
    options: { next: { tags: [tags.schoolPeople] } },
  });
}
