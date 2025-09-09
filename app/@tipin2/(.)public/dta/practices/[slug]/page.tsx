import { DTAPracticePage } from "@/components/dta/pages/DTAPracticePage";

export default async function Tipin2DTAPracticePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <DTAPracticePage slug={slug} />;
}
