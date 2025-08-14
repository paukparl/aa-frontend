import { fetchMany } from "@/lib/fetchData";
import { schoolProgrammePreviewFetchOptions } from "@/lib/fetchOptions/school";
import { schemas } from "@/lib/schemas";

export async function getSchoolTPProgrammes() {
  return await fetchMany({
    path: "/school-programmes",
    schema: schemas.schoolProgrammePreview,
    options: {
      ...schoolProgrammePreviewFetchOptions,
      filters: {
        childOfTaughtPostgraduate: {
          $eq: true,
        },
      },
    },
  });
}
