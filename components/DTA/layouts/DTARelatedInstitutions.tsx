import DTAHeader from "@/components/DTA/components/DTAHeader";
import DTAGrid from "@/components/DTA/layouts/DTAGrid";

type colorTheme = "people" | "practices" | "institutions" | "collections";

type DTARelatedInstitutionsProps = {
  gridItems: Array<Record<string, any>>;
  colorTheme: colorTheme;
  className?: string;
};

export default ({
  gridItems,
  className,
  colorTheme,
}: DTARelatedInstitutionsProps) => {
  return (
    <div>
      <DTAHeader children="Related Institutions" />
      <DTAGrid items={gridItems} type="institutions" />
    </div>
  );
};
