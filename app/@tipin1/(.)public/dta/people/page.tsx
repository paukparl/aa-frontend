import { DTAPeoplePage } from "@/components/dta/pages/DTAPeoplePage";
import { SearchParams } from "@/lib/types";

export default async function Tipin1DTAPeoplePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return <DTAPeoplePage searchParams={searchParams} />;
}
