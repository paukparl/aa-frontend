import clsx from "clsx";
import * as React from "react";
import { Body } from "@/components/Typography/Body";
import { CardPublication } from "@/components/globals/components/CardPublication";

type contentType = "image" | "publication";
type colorTheme = "people" | "institutions" | "collections" | "about";
type DTAContentDoubleColProps = {
  className?: string;
  textContent: string;
  colorTheme: colorTheme;
  contentType: contentType;
  imgSrc?: string;
};

export const DTAContentDoubleCol = ({
  className,
  textContent,
  contentType,
  imgSrc,
  colorTheme,
}: DTAContentDoubleColProps) => {
  const colorThemeDict = {
    people: {
      text: "text-dta-people-foreground",
    },
    about: {
      text: "text-dta-about-foreground",
    },
    institutions: {
      text: "text-dta-institutions-foreground",
    },
    collections: {
      text: "text-dta-collections-foreground",
    },
  };
  return (
    <div className={clsx(className, "grid grid-cols-1 lg:grid-cols-2")}>
      {contentType === "publication" && (
        <>
          <div className="w-full xl:w-[100%]">
            <Body className={colorThemeDict[colorTheme].text}>
              {textContent}
            </Body>
          </div>
          <div className="flex justify-center pt-[20px] lg:pt-0">
            <CardPublication
              title="Who are Godwin and Hopwood?"
              author="Ben Tosland"
              imgSrc="/storybook/dta/components/2colContent/pub.png"
            />
          </div>
        </>
      )}
      {contentType === "image" && (
        <>
          <img src={imgSrc} className="w-[100%] sm:w-[60%] lg:w-[100%]" />
          <div className="w-full pt-[20px] lg:pt-0 lg:pl-[20px]">
            <Body className={colorThemeDict[colorTheme].text}>
              {textContent}
            </Body>
          </div>
        </>
      )}
    </div>
  );
};
