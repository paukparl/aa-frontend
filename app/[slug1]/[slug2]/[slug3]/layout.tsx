import { notFound } from "next/navigation";
import Tipin1Page from "@/components/Tipin1Page";
import Tipin2Page from "@/components/Tipin2Page";
import { routeParsers } from "@/lib/routes";

export default async function Slug3Layout({
  children,
  params,
}: {
  children?: React.ReactNode;
  params: Promise<{ slug1: string; slug2: string; slug3: string }>;
}) {
  // Pathname is reconstructed from params and used to render parent page in nested layouts
  const { slug1, slug2, slug3 } = await params;
  const pathname = `/${slug1}/${slug2}/${slug3}`;
  const tipin1RouteParsed = routeParsers.tipin1(pathname);
  const tipin2RouteParsed = routeParsers.tipin2(pathname);

  const page = tipin1RouteParsed ? (
    <Tipin1Page routeParsed={tipin1RouteParsed} />
  ) : tipin2RouteParsed ? (
    <Tipin2Page routeParsed={tipin2RouteParsed} />
  ) : undefined;

  if (!page) notFound();

  return (
    <>
      {/* Tipin 1 */}
      {page}
      {/* Tipin 2 */}
      {children}
    </>
  );
}
