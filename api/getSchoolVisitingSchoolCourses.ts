import { fetchMany } from "@/lib/fetchData";
import { schoolVisitingSchoolPreviewFetchOptions } from "@/lib/fetchOptions/school";
import { schemas } from "@/lib/schemas";

export async function getSchoolVisitingSchoolCourses() {
  return await fetchMany({
    path: "/school-visiting-schools",
    schema: schemas.schoolVisitingSchoolPreview,
    options: {
      ...schoolVisitingSchoolPreviewFetchOptions,
    },
  });
}
