import { fetchMany } from "@/lib/fetchData";
import { schoolApplyEntryPreviewFetchOptions } from "@/lib/fetchOptions/school";
import { schemas } from "@/lib/schemas";

export async function getSchoolApplyEntries() {
  return await fetchMany({
    path: "/school-applies",
    schema: schemas.schoolApplyEntryPreview,
    options: schoolApplyEntryPreviewFetchOptions,
  });
}
