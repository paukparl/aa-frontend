import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/routes";

export async function DtaAboutTipin1Page() {
  return (
    <ViewTransitionTipinPage
      type="1"
      className={cn("")}
      tipinBg="#fff"
      title="About"
      ancestors={[{ title: "DTA Archive", href: routes.ground("dta") }]}
    >
      <div>
        <h1>DTA About Page</h1>
      </div>
    </ViewTransitionTipinPage>
  );
}
