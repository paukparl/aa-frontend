import { notFound } from "next/navigation";
import { getSchoolPerson } from "@/api/getSchoolPerson";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import { routes } from "@/lib/routes";

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
      <div className="p-(--padding) pb-100">
        <pre>{JSON.stringify(person, null, 2)}</pre>
      </div>
    </ViewTransitionTipinPage>
  );
}
