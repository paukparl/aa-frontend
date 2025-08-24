import Image from "next/image";
import { notFound } from "next/navigation";
import { getSchoolPerson } from "@/api/getSchoolPerson";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import UnderlinedButton from "@/components/buttons/UnderlinedButton";
import { cn } from "@/lib/cn";
import { parseHtml } from "@/lib/parseHtml";
import { routes } from "@/lib/routes";
import { newTabProps } from "@/lib/urlUtils";

export async function SchoolPersonPage({ slug }: { slug: string }) {
  const person = await getSchoolPerson(slug);

  if (!person) notFound();

  const fullName = `${person.firstName ?? ""}${person.firstName && person.lastName ? " " : ""}${person.lastName ?? ""}`;

  return (
    <ViewTransitionTipinPage
      type="1"
      bg={"var(--color-white)"}
      fg={"var(--color-black)"}
      title={fullName}
      ancestors={[{ title: "People", path: routes.ground("school-people") }]}
    >
      <div className="px-(--padding) pt-70 pb-100">
        <div className={cn("flex flex-col gap-(--padding) 700:flex-row")}>
          <div className={cn("flex-1")}>
            <h1 className={cn("!mono-65")}>{fullName}</h1>
            <div className={cn("mt-24 mono-24")}>{person.title}</div>
            <div
              className={cn("mt-24 flex flex-col items-start gap-24 mono-18")}
            >
              {person.websiteLink && (
                <div>
                  WEBSITE
                  <br />
                  {person.websiteLink}
                </div>
              )}
              {person.linkedInLink && (
                <UnderlinedButton asChild>
                  <a href={person.linkedInLink} {...newTabProps}>
                    LINKEDIN
                  </a>
                </UnderlinedButton>
              )}
              {person.instagramLink && (
                <UnderlinedButton asChild>
                  <a href={person.instagramLink} {...newTabProps}>
                    INSTAGRAM
                  </a>
                </UnderlinedButton>
              )}
            </div>
          </div>
          <div className={cn("flex-1")}>
            {person.representativeImage && (
              <div className={cn("relative aspect-4/5")}>
                <Image
                  src={person.representativeImage.url}
                  alt={person.representativeImage.alternativeText ?? ""}
                  fill
                  sizes="100vw, (min-width: 700px) 50vw"
                  className={cn("object-cover")}
                />
              </div>
            )}
          </div>
        </div>

        {person.bio && (
          <div className={cn("mt-100 body-24")}>
            <h2 className={cn("!body-24")}>Biography</h2>
            <div className={cn("my-[0.6em] border-b-2 border-current")} />
            {parseHtml(person.bio)}
          </div>
        )}
      </div>
    </ViewTransitionTipinPage>
  );
}
