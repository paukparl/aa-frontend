import { fetchOne } from "@/lib/fetchData";
import { dtaObjectDetailFetchOptions } from "@/lib/fetchOptions";
import { schemas } from "@/lib/schemas";

export async function getDTAObject(slug: string) {
  return schemas.getOneRes(schemas.dtaObjectDetail).parse(
    await fetchOne(`/dta-objects/${slug}`, {
      ...dtaObjectDetailFetchOptions,
    }),
  ).data;
}
