import { DTAHeader } from "@/components/DTA/components/DTAHeader";

type colorTheme = "people" | "practices" | "institutions" | "collections";

type DTATipinMapProps = {
  colorTheme: colorTheme;
  className?: string;
};

export const DTATipinMap = ({ className, colorTheme }: DTATipinMapProps) => {
  console.log(colorTheme);
  return (
    <div className={className}>
      <DTAHeader>Map</DTAHeader>
      <img
        src="/storybook/DTA/components/Map/map-placeholder.jpg"
        className="mt-[20px] w-[100%] lg:mt-[30px]"
      />
    </div>
  );
};
