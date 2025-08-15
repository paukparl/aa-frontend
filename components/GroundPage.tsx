import { notFound } from "next/navigation";
import { DTAMapPage } from "@/components/dta/pages/DTAMapPage";
import { HookeParkPage } from "@/components/hooke-park/HookeParkPage";
import PublicPage from "@/components/public/PublicPage";
import { RoamPage } from "@/components/roam/RoamPage";
import SchoolApplyPage from "@/components/school/pages/SchoolApplyPage";
import SchoolPage from "@/components/school/pages/SchoolPage";
import SchoolProgrammesPage from "@/components/school/pages/SchoolProgrammesPage";
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
  if (ground === "school-programmes") {
    return <SchoolProgrammesPage />;
  }
  if (ground === "school-apply") {
    return <SchoolApplyPage />;
  }
  if (ground === "public") {
    return <PublicPage />;
  }
  if (ground === "hooke-park") {
    return <HookeParkPage />;
  }
  if (ground === "dta") {
    return <DTAMapPage />;
  }
  if (ground === "roam") {
    return <RoamPage />;
  }

  notFound();
}
