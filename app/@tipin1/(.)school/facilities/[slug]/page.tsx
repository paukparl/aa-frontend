import { SchoolFacilityPage } from "@/components/school/pages/SchoolFacilityPage";

export default async function Tipin1SchoolFacilityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <SchoolFacilityPage slug={slug} />;
}
