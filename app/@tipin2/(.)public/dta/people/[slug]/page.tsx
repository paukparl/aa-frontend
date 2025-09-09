import { DTAPersonPage } from "@/components/dta/pages/DTAPersonPage";

export default async function Tipin2DTAPersonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <DTAPersonPage slug={slug} />;
}
