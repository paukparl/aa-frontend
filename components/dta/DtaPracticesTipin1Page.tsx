import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/routes";

export async function DtaPracticesTipin1Page() {
  return (
    <ViewTransitionTipinPage
      type="1"
      className={cn("")}
      tipinBg="#fff"
      title="Practices"
      ancestors={[{ title: "DTA Archive", href: routes.ground("dta") }]}
    >
      <div>
        <h1>DTA Practices Page</h1>
      </div>
    </ViewTransitionTipinPage>
  );
}
