import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import { Mono } from "@/components/Typography/Mono";

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
      className={clsx(
        className,
        colorThemeDict[colorTheme],
        "flex h-[150px] w-[140px] cursor-pointer items-center justify-center rounded-t-[100%] border-[1px] border-dotted p-[15px] pt-[30px] text-center transition-all hover:border-solid sm:h-[240px] sm:w-[220px] sm:p-[30px] sm:pt-[50px]",
      )}
    >
      <Link href={link}>
        <Mono children={displayText} className="whitespace-pre" />
      </Link>
    </div>
  );
};
