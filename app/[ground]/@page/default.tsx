import GroundPage from "@/components/GroundPage";
import { SearchParams } from "@/lib/types";

export default async function GroundSegmentDefault({
  params,
  searchParams,
}: {
  params: Promise<{ ground: string }>;
  searchParams: SearchParams;
}) {
  return <GroundPage params={params} searchParams={searchParams} />;
}
