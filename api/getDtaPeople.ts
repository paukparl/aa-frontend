import { fetchMany } from "@/lib/fetchData";
import { StrapiFetchManyOptions } from "@/lib/fetchData";
import { schemas } from "@/lib/schemas";

export async function getDtaPeople(
  options: Pick<StrapiFetchManyOptions, "pagination" | "filters"> = {},
) {
  return schemas.getManyRes(schemas.dtaPersonPreview).parse(
    await fetchMany("/dta-people", {
      fields: [
        "id",
        "documentId",
        "createdAt",
        "updatedAt",
        "publishedAt",
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
