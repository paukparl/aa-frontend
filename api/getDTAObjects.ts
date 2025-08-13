import { fetchMany } from "@/lib/fetchData";
import { StrapiFetchManyOptions } from "@/lib/fetchData";
import { dtaObjectPreviewFetchOptions } from "@/lib/fetchOptions";
import { schemas } from "@/lib/schemas";

export async function getDTAObjects(
  options: Pick<StrapiFetchManyOptions, "pagination" | "filters"> = {},
) {
  return await fetchMany({
    path: "/dta-objects",
    schema: schemas.dtaObjectPreview,
    options: {
      ...dtaObjectPreviewFetchOptions,
      ...options,
    },
  });
}
