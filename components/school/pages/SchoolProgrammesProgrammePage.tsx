import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import { routes } from "@/lib/routes";

export async function SchoolProgrammesProgrammePage() {
  // TODO: (Paul) Fetch and pass data below
  return (
    <ViewTransitionTipinPage
      type="1"
      bg="var(--color-name)"
      fg="var(--color-name)"
      title="Programme Title"
      ancestors={[
        { title: "Programmes", path: routes.ground("school-programmes") },
      ]}
    >
      {/* TODO: (Jess) Page goes here */}
    </ViewTransitionTipinPage>
  );
}
