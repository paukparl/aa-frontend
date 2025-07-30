import * as React from "react";
import { CardPublication } from "@/components/globals/components/CardPublication";
import { cn } from "@/lib/cn";

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
    <div className={cn(className, "1280:grid-cols-2 grid grid-cols-1")}>
      {contentType === "publication" && (
        <>
          <div
            className={cn(
              colorThemeDict[colorTheme].text,
              "body w-full xl:w-[100%]",
            )}
          >
            {textContent}
          </div>
          <div className="1280:pt-0 flex justify-center pt-[20px]">
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
          <img src={imgSrc} className="700:w-[60%] 1280:w-[100%] w-[100%]" />
          <div
            className={cn(
              colorThemeDict[colorTheme].text,
              "body 1280:pt-0 1280:pl-[20px] w-full pt-[20px]",
            )}
          >
            {textContent}
          </div>
        </>
      )}
    </div>
  );
};
