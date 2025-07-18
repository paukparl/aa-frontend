import { notFound } from "next/navigation";
import PanelPage from "@/components/PanelPage";
import { routeParsers } from "@/lib/routes";

export default async function Slug1Page({
  params,
}: {
  params: Promise<{ slug1: string }>;
}) {
  const { slug1 } = await params;
  const pathname = `/${slug1}`;
  const panelRouteParsed = routeParsers.panel(pathname);

  const page = panelRouteParsed ? (
    <PanelPage routeParsed={panelRouteParsed} />
  ) : undefined;

  if (!page) notFound();

  return <>{page}</>;
}
