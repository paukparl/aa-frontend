import DTAHeader from "@/components/DTA/components/DTAHeader";
import DTAGrid from "@/components/DTA/layouts/DTAGrid";

type colorTheme = "people" | "practices" | "institutions" | "collections";

type DTARelatedCollectionsProps = {
  gridItems: Array<Record<string, any>>;
  colorTheme: colorTheme;
  className?: string;
};

export default ({
  gridItems,
  className,
  colorTheme,
}: DTARelatedCollectionsProps) => {
  return (
    <div>
      <DTAHeader children="Related Collections" />
      <DTAGrid items={gridItems} type="collections" />
    </div>
  );
};
