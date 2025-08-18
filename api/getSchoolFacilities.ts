import { fetchMany } from "@/lib/fetchData";
import { schoolFacilityPreviewFetchOptions } from "@/lib/fetchOptions/school";
import { schemas } from "@/lib/schemas";

export async function getSchoolFacilities() {
  return await fetchMany({
    path: "/school-facilities",
    schema: schemas.schoolFacilityPreview,
    options: schoolFacilityPreviewFetchOptions,
  });
}
