import { tags } from "@/lib/cacheUtils";
import { fetchOneBySlug } from "@/lib/fetchData";
import { schoolVisitingSchoolCourseDetailFetchOptions } from "@/lib/fetchOptions/school";
import { schemas } from "@/lib/schemas";

export async function getSchoolVisitingSchoolCourse(slug: string) {
  return await fetchOneBySlug({
    path: "/school-visiting-schools",
    slug,
    schema: schemas.schoolVisitingSchoolCourseDetail,
    options: {
      ...schoolVisitingSchoolCourseDetailFetchOptions,
      next: { tags: [tags.schoolVisitingSchoolCourse(slug)] },
    },
  });
}
