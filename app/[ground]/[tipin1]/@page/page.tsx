import Tipin1Page from "@/components/Tipin1Page";
import { SearchParams } from "@/lib/types";

export default async function Tipin1SegmentPage({
  params,
  searchParams,
}: {
  params: Promise<{ ground: string; tipin1: string }>;
  searchParams: SearchParams;
}) {
  return <Tipin1Page params={params} searchParams={searchParams} />;
}
