import { fetchMany } from "@/lib/fetchData";
import { dtaPageFetchOptions } from "@/lib/fetchOptions";
import { schemas } from "@/lib/schemas";

export async function getDTAPage(slug: string) {
  // return schemas.getOneRes(schemas.dtaPage).parse(
  //   await fetchOne(`/dta-pages/${slug}`, {
  //     ...dtaPageFetchOptions,
  //   }),
  // ).data;

  // TODO: replace with above
  const { data: pages } = schemas.getManyRes(schemas.dtaPage).parse(
    await fetchMany("/dta-pages", {
      ...dtaPageFetchOptions,
    }),
  );
  const page = pages.find((page) => page.slug === slug) ?? null;
  return page;
}
