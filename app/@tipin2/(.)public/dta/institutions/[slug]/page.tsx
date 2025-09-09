import { DTAInstitutionPage } from "@/components/dta/pages/DTAInstitutionPage";

export default async function Tipin2DTAInstitutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <DTAInstitutionPage slug={slug} />;
}
