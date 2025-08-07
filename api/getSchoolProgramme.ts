import { fetchOne } from "@/lib/fetchData";
import { schoolProgrammeDetailFetchOptions } from "@/lib/fetchOptions/school";
import { schemas } from "@/lib/schemas";

export async function getSchoolProgramme(slug: string) {
  return schemas.getOneRes(schemas.schoolProgrammeDetail).parse(
    await fetchOne(`/school-programmes/${slug}`, {
      ...schoolProgrammeDetailFetchOptions,
    }),
  ).data;
}
