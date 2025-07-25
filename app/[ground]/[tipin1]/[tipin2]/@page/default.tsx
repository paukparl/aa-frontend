import Tipin2Page from "@/components/Tipin2Page";
import { SearchParams } from "@/lib/types";

export default async function Tipin2SegmentDefault({
  params,
  searchParams,
}: {
  params: Promise<{ ground: string; tipin1: string; tipin2: string }>;
  searchParams: SearchParams;
}) {
  return <Tipin2Page params={params} searchParams={searchParams} />;
}
