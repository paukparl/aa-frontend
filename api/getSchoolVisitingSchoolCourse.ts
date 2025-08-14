import { fetchOneBySlug } from "@/lib/fetchData";
import { schoolVisitingSchoolDetailFetchOptions } from "@/lib/fetchOptions/school";
import { schemas } from "@/lib/schemas";

export async function getSchoolVisitingSchoolCourse(slug: string) {
  return await fetchOneBySlug({
    path: "/school-visiting-schools",
    slug,
    schema: schemas.schoolVisitingSchoolDetail,
    options: {
      ...schoolVisitingSchoolDetailFetchOptions,
    },
  });
}
