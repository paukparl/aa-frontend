import { DTAObjectPage } from "@/components/dta/pages/DTAObjectPage";

export default async function Tipin2DTAObjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <DTAObjectPage slug={slug} />;
}
