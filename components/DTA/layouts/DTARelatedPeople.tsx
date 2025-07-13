import DTAHeader from "@/components/DTA/components/DTAHeader";
import DTAGrid from "@/components/DTA/layouts/DTAGrid";

type colorTheme = "people" | "practices" | "institutions" | "collections";

type DTARelatedPeopleProps = {
  gridItems: Array<Record<string, any>>;
  colorTheme: colorTheme;
  className?: string;
};

export default ({
  gridItems,
  className,
  colorTheme,
}: DTARelatedPeopleProps) => {
  return (
    <div>
      <DTAHeader children="Related People" />
      <DTAGrid items={gridItems} type="people" />
    </div>
  );
};
