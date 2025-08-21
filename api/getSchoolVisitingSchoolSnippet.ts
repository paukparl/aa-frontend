import { tags } from "@/lib/cacheUtils";
import { fetchOne } from "@/lib/fetchData";
import { schemas } from "@/lib/schemas";

export async function getSchoolVisitingSchoolSnippet() {
  return await fetchOne({
    path: "/visiting-school-snippet",
    schema: schemas.schoolVisitingSchoolSnippet,
    options: { next: { tags: [tags.schoolVisitingSchoolSnippet] } },
  });
}
