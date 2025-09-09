import { SchoolApplyEntryPage } from "@/components/school/pages/SchoolApplyEntryPage";

export default async function Tipin1SchoolApplyEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <SchoolApplyEntryPage slug={slug} />;
}
