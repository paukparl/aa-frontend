import { tags } from "@/lib/cacheUtils";
import { fetchMany } from "@/lib/fetchData";
import { schoolVisitingSchoolCoursePreviewFetchOptions } from "@/lib/fetchOptions/school";
import { schemas } from "@/lib/schemas";

export async function getSchoolVisitingSchoolCourses() {
  return await fetchMany({
    path: "/school-visiting-schools",
    schema: schemas.schoolVisitingSchoolCoursePreview,
    options: {
      ...schoolVisitingSchoolCoursePreviewFetchOptions,
      next: { tags: [tags.schoolVisitingSchoolCourses] },
    },
  });
}
