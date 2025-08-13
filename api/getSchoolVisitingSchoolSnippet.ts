import { fetchOne } from "@/lib/fetchData";
import { schoolVisitingSchoolSnippetFetchOptions } from "@/lib/fetchOptions/school";
import { schemas } from "@/lib/schemas";

export async function getSchoolVisitingSchoolSnippet() {
  return await fetchOne({
    path: "/visiting-school-snippet",
    schema: schemas.schoolVisitingSchoolSnippet,
    options: {
      ...schoolVisitingSchoolSnippetFetchOptions,
    },
  });
}
