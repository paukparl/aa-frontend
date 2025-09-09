import { DTAGenericPage } from "@/components/dta/pages/DTAGenericPage";

export default async function Tipin1DTAGenericPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <DTAGenericPage slug={slug} />;
}
