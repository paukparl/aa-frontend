import { SchoolUnitPage } from "@/components/school/pages/SchoolUnitPage";

export default async function Tipin2SchoolUnitPage({
  params,
}: {
  params: Promise<{ slug1: string; slug2: string }>;
}) {
  const { slug1, slug2 } = await params;
  return <SchoolUnitPage parentSlug={slug1} slug={slug2} />;
}
