import { SchoolPersonPage } from "@/components/school/pages/SchoolPersonPage";

export default async function Tipin1SchoolPersonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <SchoolPersonPage slug={slug} />;
}
