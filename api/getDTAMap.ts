import { fetchOne } from "@/lib/fetchData";
import { dtaMapFetchOptions } from "@/lib/fetchOptions";
import { schemas } from "@/lib/schemas";

export async function getDTAMap() {
  return schemas.getOneRes(schemas.dtaMap).parse(
    await fetchOne("/dta-map", {
      ...dtaMapFetchOptions,
    }),
  ).data;
}
