import { fetchMany } from "@/lib/fetchData";
import { StrapiFetchManyOptions } from "@/lib/fetchData";
import { dtaPersonPreviewFetchOptions } from "@/lib/fetchOptions";
import { schemas } from "@/lib/schemas";

export async function getDTAPeople(
  options: Pick<StrapiFetchManyOptions, "pagination" | "filters"> = {},
) {
  return await fetchMany({
    path: "/dta-people",
    schema: schemas.dtaPersonPreview,
    options: {
      ...dtaPersonPreviewFetchOptions,
      ...options,
    },
  });
}
