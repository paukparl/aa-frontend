import { fetchMany } from "@/lib/fetchData";
import { dtaMapFetchOptions } from "@/lib/fetchOptions";
import { schemas } from "@/lib/schemas";

export async function getDTAMap() {
  return schemas.getOneRes(schemas.dtaMap).parse(
    await fetchMany("/dta-map", {
      ...dtaMapFetchOptions,
    }),
  ).data;
}
