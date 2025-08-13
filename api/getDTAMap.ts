import { fetchOne } from "@/lib/fetchData";
import { dtaMapFetchOptions } from "@/lib/fetchOptions";
import { schemas } from "@/lib/schemas";

export async function getDTAMap() {
  return await fetchOne({
    path: "/dta-map",
    schema: schemas.dtaMap,
    options: {
      ...dtaMapFetchOptions,
    },
  });
}
