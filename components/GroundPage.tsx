import { notFound } from "next/navigation";
import { DtaPage } from "@/components/dta/DtaPage";
import { HookeParkPage } from "@/components/hooke-park/HookeParkPage";
import PublicPage from "@/components/public/PublicPage";
import { RoamPage } from "@/components/roam/RoamPage";
import SchoolPage from "@/components/school/SchoolPage";
import { SearchParams } from "@/lib/types";

export default async function Ground({
  params,
  searchParams: _,
}: {
  params: Promise<{ ground: string }>;
  searchParams: SearchParams;
}) {
  const { ground } = await params;

  if (ground === "school") {
    return <SchoolPage />;
  }
  if (ground === "public") {
    return <PublicPage />;
  }
  if (ground === "hooke-park") {
    return <HookeParkPage />;
  }
  if (ground === "dta") {
    return <DtaPage />;
  }
  if (ground === "roam") {
    return <RoamPage />;
  }

  notFound();
}
