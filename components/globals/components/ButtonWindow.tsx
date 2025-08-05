import Link from "next/link";
import React from "react";
import { cn } from "@/lib/cn";

type colorTheme = "dta-map";
type ButtonWindowProps = {
  displayText: string;
  link: string;
  colorTheme: colorTheme;
  className?: string;
};

export const ButtonWindow = ({
  displayText,
  link,
  colorTheme,
  className,
}: ButtonWindowProps) => {
  const colorThemeDict = {
    "dta-map":
      "border-white hover:bg-white text-white hover:text-dta-map-background",
  };
  return (
    <div
      className={cn(
        className,
        colorThemeDict[colorTheme],
        "pt-30px 700:h-[240px] 700:w-[220px] 700:pt-[50px] flex h-150 w-140 cursor-pointer items-center justify-center rounded-t-[100%] border-1 border-dotted p-(--padding) text-center transition-all hover:border-solid",
      )}
    >
      <Link href={link}>
        <span className="mono whitespace-pre">{displayText}</span>
      </Link>
    </div>
  );
};
