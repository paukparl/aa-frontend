import { DTAPracticesPage } from "@/components/dta/pages/DTAPracticesPage";
import { SearchParams } from "@/lib/types";

export default function Tipin1DTAPracticesPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return <DTAPracticesPage searchParams={searchParams} />;
}
