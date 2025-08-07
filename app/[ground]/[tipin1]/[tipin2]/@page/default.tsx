import Tipin2Page from "@/components/Tipin2Page";

export default async function Tipin2SegmentDefault({
  params,
}: {
  params: Promise<{ ground: string; tipin1: string; tipin2: string }>;
}) {
  return <Tipin2Page params={params} />;
}
