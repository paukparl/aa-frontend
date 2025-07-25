import { notFound } from "next/navigation";
import { DTACollectionsPage } from "@/components/dta/pages/DTACollectionsPage";
import { DTAGenericPage } from "@/components/dta/pages/DTAGenericPage";
import { DTAInstitutionsPage } from "@/components/dta/pages/DTAInstitutionsPage";
import { DTAPeoplePage } from "@/components/dta/pages/DTAPeoplePage";
import { DTAPracticesPage } from "@/components/dta/pages/DTAPracticesPage";
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
      return <DTAPeoplePage searchParams={searchParams} />;
    }
    if (tipin1 === "practices") {
      return <DTAPracticesPage searchParams={searchParams} />;
    }
    if (tipin1 === "institutions") {
      return <DTAInstitutionsPage searchParams={searchParams} />;
    }
    if (tipin1 === "collections") {
      return <DTACollectionsPage searchParams={searchParams} />;
    }
    return <DTAGenericPage slug={tipin1} />;
  }
  // if (ground === "roam") {
  //   return null;
  //   // return <RoamPage />;
  // }

  notFound();
}
