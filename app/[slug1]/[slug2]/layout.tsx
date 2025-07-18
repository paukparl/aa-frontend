import { notFound } from "next/navigation";
import PanelPage from "@/components/PanelPage";
import Tipin1Page from "@/components/Tipin1Page";
import { routeParsers } from "@/lib/routes";

export default async function Slug2Layout({
  children,
  params,
}: {
  children?: React.ReactNode;
  params: Promise<{ slug1: string; slug2: string }>;
}) {
  // Pathname is reconstructed from params and used to render parent page in nested layouts
  const { slug1, slug2 } = await params;
  const pathname = `/${slug1}/${slug2}`;
  const panelRouteParsed = routeParsers.panel(pathname);
  const tipin1RouteParsed = routeParsers.tipin1(pathname);

  const page = panelRouteParsed ? (
    <PanelPage routeParsed={panelRouteParsed} />
  ) : tipin1RouteParsed ? (
    <Tipin1Page routeParsed={tipin1RouteParsed} />
  ) : undefined;

  if (!page) notFound();

  return (
    <>
      {/* Panel */}
      {page}
      {/* Tipin 1 */}
      {children}
    </>
  );
}
