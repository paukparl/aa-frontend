import { fetchMany } from "@/lib/fetchData";
import { StrapiFetchManyOptions } from "@/lib/fetchData";
import { schemas } from "@/lib/schemas";
import { documentFields } from "@/lib/schemas/shared";

export async function getDTAPeople(
  options: Pick<StrapiFetchManyOptions, "pagination" | "filters"> = {},
) {
  return schemas.getManyRes(schemas.dtaPersonPreview).parse(
    await fetchMany("/dta-people", {
      fields: [
        ...documentFields,
        "slug",
        "firstName",
        "lastName",
        "displayStudyYear",
      ],
      populate: ["headshot"],
      ...options,
    }),
  );
}
