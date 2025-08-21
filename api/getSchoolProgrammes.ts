import { tags } from "@/lib/cacheUtils";
import { fetchMany } from "@/lib/fetchData";
import { schoolProgrammePreviewFetchOptions } from "@/lib/fetchOptions/school";
import { schemas } from "@/lib/schemas";

export async function getSchoolProgrammes() {
  return await fetchMany({
    path: "/school-programmes",
    schema: schemas.schoolProgrammePreview,
    options: {
      ...schoolProgrammePreviewFetchOptions,
      filters: {
        $or: [
          { childOfTaughtPostgraduate: { $null: true } },
          { childOfTaughtPostgraduate: { $eq: false } },
        ],
      },
      next: { tags: [tags.schoolProgrammes] },
    },
  });
}
