import { fetchOne } from "@/lib/fetchData";
import { schoolUnitDetailFetchOptions } from "@/lib/fetchOptions/school";
import { schemas } from "@/lib/schemas";

export async function getSchoolUnit(slug: string) {
  return schemas.getOneRes(schemas.schoolUnitDetail).parse(
    await fetchOne(`/school-units/${slug}`, {
      ...schoolUnitDetailFetchOptions,
    }),
  ).data;
}
