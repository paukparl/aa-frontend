import { fetchMany } from "@/lib/fetchData";
import { dtaEventFetchOptions } from "@/lib/fetchOptions";
import { schemas } from "@/lib/schemas";

export async function tempGetDTAEvents() {
  return schemas.getManyRes(schemas.dtaEvent).parse(
    await fetchMany("/dta-events", {
      ...dtaEventFetchOptions,
    }),
  );
}
