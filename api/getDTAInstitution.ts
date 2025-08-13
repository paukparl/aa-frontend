import { fetchOneBySlug } from "@/lib/fetchData";
import { dtaInstitutionDetailFetchOptions } from "@/lib/fetchOptions";
import { schemas } from "@/lib/schemas";

export async function getDTAInstitution(slug: string) {
  return await fetchOneBySlug({
    path: "/dta-institutions",
    slug,
    schema: schemas.dtaInstitutionDetail,
    options: {
      ...dtaInstitutionDetailFetchOptions,
    },
  });
}
