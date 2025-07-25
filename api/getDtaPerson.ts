import { fetchOne } from "@/lib/fetchData";
import { schemas } from "@/lib/schemas";

export async function getDtaPerson(slug: string) {
  return schemas.getOneRes(schemas.dtaPersonPreview).parse(
    await fetchOne(`/dta-people/${slug}`, {
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
        "bio",
        "studyYear",
        "dateBirth",
        "dateDeath",
        "placeOfBirth",
      ],
      populate: ["headshot"],
    }),
  ).data;
}
