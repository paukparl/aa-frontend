import { fetchOne } from "@/lib/fetchData";
import { schoolVisitingSchoolDetailFetchOptions } from "@/lib/fetchOptions/school";
import { schemas } from "@/lib/schemas";

export async function getSchoolVisitingSchoolCourse(slug: string) {
  return schemas.getOneRes(schemas.schoolVisitingSchoolDetail).parse(
    await fetchOne(`/school-visiting-schools/${slug}`, {
      ...schoolVisitingSchoolDetailFetchOptions,
    }),
  ).data;
}
