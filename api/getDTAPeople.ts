import { fetchMany } from "@/lib/fetchData";
import { StrapiFetchManyOptions } from "@/lib/fetchData";
import { dtaPersonPreviewFetchOptions } from "@/lib/fetchOptions";
import { schemas } from "@/lib/schemas";

export async function getDTAPeople(
  options: Pick<StrapiFetchManyOptions, "pagination" | "filters"> = {},
) {
  return schemas.getManyRes(schemas.dtaPersonPreview).parse(
    await fetchMany("/dta-people", {
      ...dtaPersonPreviewFetchOptions,
      ...options,
    }),
  );
}
