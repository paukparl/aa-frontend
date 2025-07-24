import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/routes";

export async function DtaSearchTipin1Page() {
  return (
    <ViewTransitionTipinPage
      type="1"
      className={cn("")}
      tipinBg="#fff"
      title="Search"
      ancestors={[{ title: "DTA Archive", href: routes.ground("dta") }]}
    >
      <div>
        <h1>DTA Search Page</h1>
      </div>
    </ViewTransitionTipinPage>
  );
}
