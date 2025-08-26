import { format } from "date-fns";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getSchoolFacility } from "@/api/getSchoolFacility";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import { MediaGallery } from "@/components/globals/components/MediaGalleryNew";
import { cn } from "@/lib/cn";
import { parseHtml } from "@/lib/parseHtml";
import { routes } from "@/lib/routes";

export async function SchoolFacilityPage({ slug }: { slug: string }) {
  const facility = await getSchoolFacility(slug);

  if (!facility) notFound();

  return (
    <ViewTransitionTipinPage
      type="1"
      bg={"var(--color-facilities)"}
      fg={"var(--color-black)"}
      title={facility.name}
      ancestors={[
        { title: "Facilities", path: routes.ground("school-facilities") },
      ]}
    >
      <div className="px-(--padding) pt-70 pb-100">
        <h1 className="h1-mono">{facility.name}</h1>
        <div className="mt-100 flex flex-col gap-(--padding) 700:flex-row">
          <div className={cn("flex-1")}>
            {facility.representativeImage && (
              <MediaGallery imgs={[facility.representativeImage]} />
            )}
          </div>
          <div className="flex-1">
            {facility.hours && (
              <div className="mono-18 whitespace-pre">
                HOURS
                <br />
                {facility.hours}
              </div>
            )}
            {facility.contact && (
              <div
                className={cn(
                  "mono-18 whitespace-pre",
                  facility.hours && "mt-[1.3em]",
                )}
              >
                CONTACT
                <br />
                {facility.contact}
              </div>
            )}
            {facility.description && (
              <div
                className={cn(
                  "space-y-[1.5em] body-24",
                  (facility.hours || facility.contact) && "mt-[1.5em]",
                )}
              >
                {parseHtml(facility.description)}
              </div>
            )}
          </div>
        </div>

        {facility.aaEvents.length > 0 && (
          <>
            <h2 className="mt-100 !mono-65">Related Events</h2>
            <div className="mt-40 space-y-2">
              {facility.aaEvents.map((event) => (
                <div
                  key={event.id}
                  className="grid grid-cols-12 gap-24 bg-facilities-tint p-24"
                >
                  <div className="relative col-span-2 aspect-3/2">
                    {event.image && (
                      <Image
                        src={event.image.url}
                        alt={event.image.alternativeText ?? ""}
                        fill
                        sizes="8vw"
                      />
                    )}
                  </div>
                  <h3 className="col-span-4 title-24">{event.title}</h3>
                  <p className="col-span-2 font-diatype text-18/1.3">
                    {event.dateTime && format(event.dateTime, "d MMMM yyyy")}
                  </p>
                  <p className="col-span-2 font-diatype text-18/1.3">
                    {event.dateTime && format(event.dateTime, "HH:mm")}
                  </p>
                  <p className="col-span-2 font-diatype text-18/1.3">
                    {event.shortDescription}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </ViewTransitionTipinPage>
  );
}
