import { fetchMany } from "@/lib/fetchData";
import { schoolVisitingSchoolPreviewFetchOptions } from "@/lib/fetchOptions/school";
import { schemas } from "@/lib/schemas";

export async function getSchoolVisitingSchools() {
  return schemas.getManyRes(schemas.schoolVisitingSchoolPreview).parse(
    await fetchMany("/school-visiting-schools", {
      ...schoolVisitingSchoolPreviewFetchOptions,
    }),
  );
}
