import { fetchOne } from "@/lib/fetchData";
import { dtaInstitutionDetailFetchOptions } from "@/lib/fetchOptions";
import { schemas } from "@/lib/schemas";

export async function getDTAInstitution(slug: string) {
  return schemas.getOneRes(schemas.dtaInstitutionDetail).parse(
    await fetchOne(`/dta-institutions/${slug}`, {
      ...dtaInstitutionDetailFetchOptions,
    }),
  ).data;
}
