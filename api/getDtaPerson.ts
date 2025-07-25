import { fetchOne } from "@/lib/fetchData";
import { dtaPersonDetailFetchOptions } from "@/lib/fetchOptions";
import { schemas } from "@/lib/schemas";

export async function getDTAPerson(slug: string) {
  return schemas.getOneRes(schemas.dtaPersonDetail).parse(
    await fetchOne(`/dta-people/${slug}`, {
      ...dtaPersonDetailFetchOptions,
    }),
  ).data;
}
