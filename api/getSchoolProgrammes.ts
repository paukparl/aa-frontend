import { fetchMany } from "@/lib/fetchData";
import { schoolProgrammePreviewFetchOptions } from "@/lib/fetchOptions/school";
import { schemas } from "@/lib/schemas";

export async function getSchoolProgrammes() {
  return schemas.getManyRes(schemas.schoolProgrammePreview).parse(
    await fetchMany("/school-programmes", {
      ...schoolProgrammePreviewFetchOptions,
    }),
  );
}
