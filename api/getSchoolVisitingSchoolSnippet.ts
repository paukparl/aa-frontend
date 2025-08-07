import { fetchOne } from "@/lib/fetchData";
import { schoolVisitingSchoolSnippetFetchOptions } from "@/lib/fetchOptions/school";
import { schemas } from "@/lib/schemas";

export async function getSchoolVisitingSchoolSnippet() {
  return schemas.getOneRes(schemas.schoolVisitingSchoolSnippet).parse(
    await fetchOne("/visiting-school-snippet", {
      ...schoolVisitingSchoolSnippetFetchOptions,
    }),
  ).data;
}
