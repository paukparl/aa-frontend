import { fetchOne } from "@/lib/fetchData";
import { schoolSnippetFetchOptions } from "@/lib/fetchOptions/school";
import { schemas } from "@/lib/schemas";

export async function getSchoolSnippet() {
  return await fetchOne({
    path: "/school-snippet",
    schema: schemas.schoolSnippet,
    options: {
      ...schoolSnippetFetchOptions,
    },
  });
}
