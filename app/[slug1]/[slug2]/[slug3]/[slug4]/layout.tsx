import { notFound } from "next/navigation";
import Tipin2Page from "@/components/Tipin2Page";
import { routeParsers } from "@/lib/routes";

export default async function Slug4Layout({
  params,
}: {
  params: Promise<{
    slug1: string;
    slug2: string;
    slug3: string;
    slug4: string;
  }>;
}) {
  const { slug1, slug2, slug3, slug4 } = await params;
  const pathname = `/${slug1}/${slug2}/${slug3}/${slug4}`;
  const tipin2RouteParsed = routeParsers.tipin2(pathname);

  const page = tipin2RouteParsed ? (
    <Tipin2Page routeParsed={tipin2RouteParsed} />
  ) : undefined;

  if (!page) notFound();

  return (
    <>
      {/* Tipin 2 */}
      {page}
    </>
  );
}
