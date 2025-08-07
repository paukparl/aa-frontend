import { fetchMany } from "@/lib/fetchData";
import { StrapiFetchManyOptions } from "@/lib/fetchData";
import { dtaInstitutionPreviewFetchOptions } from "@/lib/fetchOptions";
import { schemas } from "@/lib/schemas";

export async function getDTAInstitutions(
  options: Pick<StrapiFetchManyOptions, "pagination" | "filters"> = {},
) {
  return schemas.getManyRes(schemas.dtaInstitutionPreview).parse(
    await fetchMany("/dta-institutions", {
      ...dtaInstitutionPreviewFetchOptions,
      ...options,
    }),
  );
}
