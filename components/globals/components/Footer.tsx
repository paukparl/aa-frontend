import clsx from "clsx";
import { Body } from "@/components/Typography/Body";
import { H1 } from "@/components/Typography/H1";
import { ButtonWindow } from "@/components/globals/components/ButtonWindow";

type FooterProps = {
  className?: string;
  colorTheme: "dta-map" | "school";
};

export const Footer = ({ className, colorTheme }: FooterProps) => {
  return (
    <div
      className={clsx(
        className,
        "mt-[50px] flex flex-col gap-[10px] sm:mt-[100px] sm:gap-[30px] md:mt-[200px]",
      )}
    >
      <Body className="font-bold whitespace-pre">{`36 Bedford Square\nLondon WC1B 3ES\n+44 (0)20 7887 4000\nreception@aaschool.ac.uk`}</Body>
      <Body className="font-bold whitespace-pre">{`Sign up for AA Weekly\nFollow us on Instagram`}</Body>
      <Body className="font-bold whitespace-pre">{`Governance\nDocuments`}</Body>
      <div className="flex w-[100%] flex-col justify-between gap-[10px] sm:flex-row-reverse sm:items-end sm:gap-[30px]">
        <ButtonWindow
          className="shrink-0"
          context="footer"
          colorTheme={colorTheme}
          links={[{ displayText: `Become\na Member`, link: "" }]}
        />
        <H1 className="whitespace-pre sm:whitespace-normal md:whitespace-pre">{`Architectural Association\nSchool of Architecture`}</H1>
      </div>
    </div>
  );
};
