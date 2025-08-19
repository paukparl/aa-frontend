import Link from "next/link";
import { getSchoolPeople } from "@/api/getSchoolPeople";
import { getSchoolSnippet } from "@/api/getSchoolSnippet";
import ViewTransitionGroundPage from "@/components/ViewTransitionGroundPage";
import { SchoolNav } from "@/components/school/components/SchoolNav";
import { Schema } from "@/lib/schemas";

export default async function SchoolPeoplePage() {
  const [schoolSnippet, { data: people }] = await Promise.all([
    getSchoolSnippet(),
    getSchoolPeople(),
  ]);
  return (
    <ViewTransitionGroundPage panel="school">
      <div className="px-(--padding)">
        <SchoolNav activeSlug={"school-people"} />
        <div className="1000:grid-cols-2 grid gap-(--padding) 1280:grid-cols-3">
          {people.map((person) => (
            <SchoolPeopleGridItem person={person} key={person.id} />
          ))}
        </div>
        {/* <pre>{JSON.stringify(schoolSnippet, null, 2)}</pre> */}
        <pre>{JSON.stringify(people, null, 2)}</pre>
      </div>
    </ViewTransitionGroundPage>
  );
}

type SchoolPeopleGridItemProps = { person: Schema<"schoolPersonPreview"> };

export const SchoolPeopleGridItem = ({ person }: SchoolPeopleGridItemProps) => {
  return <div>{`${person.firstName} ${person.lastName}`}</div>;
};
