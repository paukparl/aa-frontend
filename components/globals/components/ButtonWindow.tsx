import Link from "next/link";
import React from "react";
import { cn } from "@/lib/cn";

type colorTheme = "dta-map" | "school";
type ButtonWindowLink = { displayText: React.ReactNode; link: string };
type ButtonWindowContext = "footer" | "school";
type ButtonWindowProps = {
  context: ButtonWindowContext;
  links: ButtonWindowLink[];
  colorTheme: colorTheme;
  className?: string;
};

export const ButtonWindow = ({
  links,
  colorTheme,
  className,
  context,
}: ButtonWindowProps) => {
  const colorThemeDict = {
    "dta-map":
      "border-white hover:bg-white text-white hover:text-dta-map-background",
    school: "border-black text-black",
  };
  const contextDict = {
    school: {
      top: "w-[250px] h-[240px] sm:w-[300px] sm:h-[280px] sm:pt-[80px]",
      btm: "h-fit w-[250px] sm:w-[300px]",
    },
    footer: {
      top: "sm:h-[240px] sm:w-[220px] h-[150px] w-[140px] sm:pt-[50px]",
      btm: "",
    },
  };
  return (
    <div className={className}>
      <div
        className={cn(
          colorThemeDict[colorTheme],
          contextDict[context].top,
          "flex cursor-pointer items-center justify-center rounded-t-[100%] border-[1px] border-dotted p-[15px] pt-[30px] text-center transition-all hover:border-solid sm:p-[30px]",
        )}
      >
        <Link href={links[0].link}>
          <span className="mono whitespace-pre">{links[0].displayText}</span>
        </Link>
      </div>
      {links.length > 1 &&
        links.map(
          (item, index) =>
            index !== 0 && (
              <div
                key={index}
                className={cn(
                  colorThemeDict[colorTheme],
                  contextDict[context].btm,
                  "mt-[-1px] flex cursor-pointer items-center justify-center border-[1px] border-dotted p-[15px] text-center transition-all hover:border-solid sm:p-[15px]",
                )}
              >
                <Link href={item.link}>
                  <span className="mono whitespace-pre">
                    {item.displayText}
                  </span>
                </Link>
              </div>
            ),
        )}
    </div>
  );
};
