import { DTAInstitutionsPage } from "@/components/dta/pages/DTAInstitutionsPage";
import { SearchParams } from "@/lib/types";

export default async function Tipin1DTAInstitutionsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return <DTAInstitutionsPage searchParams={searchParams} />;
}
