import { ButtonWindow } from "@/components/globals/components/ButtonWindow";

export const DTAMapFooter = () => {
  return (
    <div className="700:gap-30 700:p-30 mt-[50px] flex flex-col gap-10 p-10">
      <span className="body font-700 whitespace-pre">{`36 Bedford Square\nLondon WC1B 3ES\n+44 (0)20 7887 4000\nreception@aaschool.ac.uk`}</span>
      <span className="body font-700 whitespace-pre">{`Sign up for AA Weekly\nFollow us on Instagram`}</span>
      <span className="body font-700 whitespace-pre">{`Governance\nDocuments`}</span>
      <div className="700:gap-[30px] 1024:flex-row-reverse 1024:items-end flex w-[100%] flex-col justify-between gap-[10px]">
        <ButtonWindow
          className="shrink-0"
          colorTheme="dta-map"
          link=""
          displayText={`Become\na Member`}
        />
        <h1 className="whitespace-pre">{`Architectural Association\nSchool of Architecture`}</h1>
      </div>
    </div>
  );
};
