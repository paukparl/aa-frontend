import Image from "next/image";
import Link from "next/link";
import { getSchoolPeople } from "@/api/getSchoolPeople";
import ViewTransitionGroundPage from "@/components/ViewTransitionGroundPage";
import { SchoolNav } from "@/components/school/components/SchoolNav";
import { cn } from "@/lib/cn";
import { Schema } from "@/lib/schemas";

export default async function SchoolPeoplePage() {
  const { data: people } = await getSchoolPeople();
  return (
    <ViewTransitionGroundPage panel="school">
      <div className="px-(--padding)">
        <SchoolNav activeSlug={"school-people"} />
        <div className="mb-10 mono">{`All ${people.length} ${people.length > 1 ? `People` : `Person`}`}</div>
        <div className="1000:grid-cols-5 grid grid-cols-2 gap-(--padding) 700:grid-cols-4 1280:grid-cols-6">
          {people.map((person) => (
            <SchoolPeopleGridItem person={person} key={person.id} />
          ))}
        </div>
      </div>
    </ViewTransitionGroundPage>
  );
}

type SchoolPeopleGridItemProps = {
  className?: string;
  person: Schema<"schoolPersonPreview">;
};

export const SchoolPeopleGridItem = ({
  person,
  className,
}: SchoolPeopleGridItemProps) => {
  return (
    <Link
      className={cn(className, "group block")}
      href={`/school-people/${person.slug}`}
      scroll={false}
    >
      <div className="relative mb-5 block aspect-[4/5] school-griditem-bg 700:mb-10">
        {person.representativeImage && (
          <Image
            src={person.representativeImage.url}
            fill
            sizes="(max-width: 768px) 300px, 500px"
            alt={person.representativeImage.alternativeText ?? ""}
            className="object-cover"
          />
        )}
      </div>
      <div className="mono transition-all group-hover:opacity-70">
        {person.firstName} {person.lastName}
        {person.title && <div className="mt-10">{person.title}</div>}
      </div>
    </Link>
  );
};
