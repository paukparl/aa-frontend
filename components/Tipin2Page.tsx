import { notFound } from "next/navigation";
import { DtaPersonPage } from "@/components/dta/DtaPersonPage";
import PublicPage from "@/components/public/PublicPage";
import SchoolPage from "@/components/school/SchoolPage";
import { SearchParams } from "@/lib/types";

export default async function Tipin2Page({
  params,
  searchParams,
}: {
  params: Promise<{ ground: string; tipin1: string; tipin2: string }>;
  searchParams: SearchParams;
}) {
  const { ground, tipin1: _, tipin2 } = await params;

  if (ground === "school") {
    return <SchoolPage />;
  }
  if (ground === "public") {
    return <PublicPage />;
  }
  if (ground === "hooke-park") {
    return null;
    // return <HookeParkPage />;
  }
  if (ground === "dta") {
    return <DtaPersonPage searchParams={searchParams} slug={tipin2} />;
  }
  if (ground === "roam") {
    return null;
    // return <RoamPage />;
  }

  notFound();
}
