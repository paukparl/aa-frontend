import Image from "next/image";
import { notFound } from "next/navigation";
import { getSchoolPerson } from "@/api/getSchoolPerson";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import UnderlinedButton from "@/components/buttons/UnderlinedButton";
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
      ancestors={[{ title: "People", path: routes.schoolPeople }]}
    >
      <div className="px-(--padding) pt-70 pb-100">
        <div className="flex flex-col gap-(--padding) 700:flex-row">
          <div className="flex-1">
            <h1 className="h1-mono">{fullName}</h1>
            <div className="mt-24 mono-24">{person.title}</div>
            <div className="mt-24 flex flex-col items-start gap-24 mono-18">
              {person.websiteLink && (
                <UnderlinedButton asChild>
                  <a href={person.websiteLink} {...newTabProps}>
                    WEBSITE
                  </a>
                </UnderlinedButton>
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
          <div className="flex-1">
            {person.representativeImage && (
              <div className="relative aspect-4/5">
                <Image
                  src={person.representativeImage.url}
                  alt={person.representativeImage.alternativeText ?? ""}
                  fill
                  sizes="100vw, (min-width: 700px) 50vw"
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>

        {person.bio && (
          <div className="mt-100 body-24">
            <h2 className="body">Biography</h2>
            <div className="my-[0.6em] border-b-2 border-current" />
            {parseHtml(person.bio)}
          </div>
        )}
      </div>
    </ViewTransitionTipinPage>
  );
}
