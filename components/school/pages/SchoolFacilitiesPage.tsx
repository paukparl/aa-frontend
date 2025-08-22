import { getSchoolFacilities } from "@/api/getSchoolFacilities";
import { getSchoolSnippet } from "@/api/getSchoolSnippet";
import ViewTransitionGroundPage from "@/components/ViewTransitionGroundPage";
import { FacilityPreviewCard } from "@/components/school/components/FacilityPreviewCard";
import { ProgrammeTextCol } from "@/components/school/components/ProgrammeTextCol";
import { SchoolNav } from "@/components/school/components/SchoolNav";
import { cn } from "@/lib/cn";
import { parseHtml } from "@/lib/parseHtml";

export default async function SchoolFacilitiesPage() {
  const [schoolSnippet, { data: facilities }] = await Promise.all([
    getSchoolSnippet(),
    getSchoolFacilities(),
  ]);

  const publicFacilities = facilities.filter(
    (facility) => facility.publicFacility,
  );
  const hookeParkFacilities = facilities.filter(
    (facility) => facility.hookeParkFacility,
  );

  return (
    <ViewTransitionGroundPage panel="school">
      <div className={cn("px-(--padding)")}>
        <SchoolNav activeSlug={"school-facilities"} />
        {schoolSnippet?.facilityLandingPageText && (
          <ProgrammeTextCol className={cn()}>
            {parseHtml(schoolSnippet.facilityLandingPageText)}
          </ProgrammeTextCol>
        )}
        <h2
          className={cn(
            "mt-50 title-24 700:mt-100 700:!title-36 1024:!title-48",
          )}
        >
          Bedford Square Facilities
        </h2>
        <div
          className={cn(
            "mt-(--padding) grid grid-cols-1 gap-24 1024:grid-cols-2",
          )}
        >
          {publicFacilities.map((facility) => (
            <FacilityPreviewCard key={facility.id} facility={facility} />
          ))}
        </div>
        <h2
          className={cn(
            "mt-50 title-24 700:mt-100 700:!title-36 1024:!title-48",
          )}
        >
          Hooke Park Facilities
        </h2>
        <div
          className={cn(
            "mt-(--padding) grid grid-cols-1 gap-24 1024:grid-cols-2",
          )}
        >
          {hookeParkFacilities.map((facility) => (
            <FacilityPreviewCard key={facility.id} facility={facility} />
          ))}
        </div>
      </div>
    </ViewTransitionGroundPage>
  );
}
