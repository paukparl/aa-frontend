import { Body } from "@/components/Typography/Body";
import { H1 } from "@/components/Typography/H1";
import { ButtonWindow } from "@/components/globals/components/ButtonWindow";

export const DTAMapFooter = () => {
  return (
    <div className="mt-[50px] flex flex-col gap-[10px] p-[10px] sm:gap-[30px] sm:p-[30px]">
      <Body
        className="font-bold whitespace-pre"
        children={`36 Bedford Square\nLondon WC1B 3ES\n+44 (0)20 7887 4000\nreception@aaschool.ac.uk`}
      />
      <Body
        className="font-bold whitespace-pre"
        children={`Sign up for AA Weekly\nFollow us on Instagram`}
      />
      <Body
        className="font-bold whitespace-pre"
        children={`Governance\nDocuments`}
      />
      <div className="flex w-[100%] flex-col justify-between gap-[10px] sm:gap-[30px] md:flex-row-reverse md:items-end">
        <ButtonWindow
          className="shrink-0"
          colorTheme="dta-map"
          link=""
          displayText={`Become\na Member`}
        />
        <H1
          className="whitespace-pre"
          children={`Architectural Association\nSchool of Architecture`}
        />
      </div>
    </div>
  );
};
