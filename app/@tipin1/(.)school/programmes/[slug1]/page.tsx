import { SchoolProgrammePage } from "@/components/school/pages/SchoolProgrammePage";

export default async function Tipin1SchoolProgrammePage({
  params,
}: {
  params: Promise<{ slug1: string }>;
}) {
  const { slug1 } = await params;
  return <SchoolProgrammePage slug={slug1} />;
}
