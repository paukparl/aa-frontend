import { fetchMany } from "@/lib/fetchData";
import { StrapiFetchManyOptions } from "@/lib/fetchData";
import { dtaObjectPreviewFetchOptions } from "@/lib/fetchOptions";
import { schemas } from "@/lib/schemas";

export async function getDTAObjects(
  options: Pick<StrapiFetchManyOptions, "pagination" | "filters"> = {},
) {
  return schemas.getManyRes(schemas.dtaObjectPreview).parse(
    await fetchMany("/dta-objects", {
      ...dtaObjectPreviewFetchOptions,
      ...options,
    }),
  );
}
