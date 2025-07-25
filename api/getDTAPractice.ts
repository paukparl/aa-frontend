import { fetchOne } from "@/lib/fetchData";
import { dtaPracticeDetailFetchOptions } from "@/lib/fetchOptions";
import { schemas } from "@/lib/schemas";

export async function getDTAPractice(slug: string) {
  return schemas.getOneRes(schemas.dtaPracticeDetail).parse(
    await fetchOne(`/dta-practices/${slug}`, {
      ...dtaPracticeDetailFetchOptions,
    }),
  ).data;
}
