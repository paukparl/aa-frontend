import { DTACollectionsPage } from "@/components/dta/pages/DTACollectionsPage";
import { SearchParams } from "@/lib/types";

export default function Tipin1DTACollectionsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return <DTACollectionsPage searchParams={searchParams} />;
}
