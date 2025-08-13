import { fetchMany } from "@/lib/fetchData";
import { StrapiFetchManyOptions } from "@/lib/fetchData";
import { dtaPracticePreviewFetchOptions } from "@/lib/fetchOptions";
import { schemas } from "@/lib/schemas";

export async function getDTAPractices(
  options: Pick<StrapiFetchManyOptions, "pagination" | "filters"> = {},
) {
  return await fetchMany({
    path: "/dta-practices",
    schema: schemas.dtaPracticePreview,
    options: {
      ...dtaPracticePreviewFetchOptions,
      ...options,
    },
  });
}
