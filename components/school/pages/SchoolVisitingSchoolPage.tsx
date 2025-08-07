import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import { routes } from "@/lib/routes";

// These names are getting long... I don't mind them, but if you have any better idea for organizing page components, feel free to change!

export async function SchoolProgrammesVisitingSchoolPage() {
  // TODO: (Paul) Fetch and pass data below
  return (
    <ViewTransitionTipinPage
      type="1"
      bg="var(--color-name)"
      fg="var(--color-name)"
      title="AA Visiting School"
      ancestors={[
        { title: "Programmes", path: routes.ground("school-programmes") },
      ]}
    >
      {/* TODO: (Jess) Page goes here */}
    </ViewTransitionTipinPage>
  );
}
