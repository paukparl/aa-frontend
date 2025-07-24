import { notFound } from "next/navigation";
import { DtaPeoplePage } from "@/components/dta/DtaPeoplePage";
import { SearchParams } from "@/lib/types";

export default async function Tipin1Page({
  params,
  searchParams,
}: {
  params: Promise<{ ground: string; tipin1: string }>;
  searchParams: SearchParams;
}) {
  const { ground, tipin1 } = await params;
  // if (ground === "school") {
  //   return <SchoolPage />;
  // }
  // if (ground === "public") {
  //   return <PublicPage />;
  // }
  // if (ground === "hooke-park") {
  //   return null;
  //   // return <HookeParkPage />;
  // }
  if (ground === "dta") {
    if (tipin1 === "people") {
      return <DtaPeoplePage searchParams={searchParams} />;
    }
  }
  // if (ground === "roam") {
  //   return null;
  //   // return <RoamPage />;
  // }

  notFound();

  return null;
}
