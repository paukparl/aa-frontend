import Image from "next/image";
import { ReactNode } from "react";
import { CardPublication } from "@/components/globals/components/CardPublication";
import { cn } from "@/lib/cn";

type contentType = "image" | "publication";
type colorTheme = "people" | "institutions" | "collections" | "about";
type DTAContentDoubleColProps = {
  className?: string;
  children: ReactNode;
  colorTheme: colorTheme;
  contentType: contentType;
  imgSrc?: string;
};

export const DTAContentDoubleCol = ({
  className,
  children,
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
    <div className={cn(className, "grid grid-cols-1 1280:grid-cols-2")}>
      {contentType === "publication" && (
        <>
          <div
            className={cn(
              colorThemeDict[colorTheme].text,
              "w-full body 1500:w-[100%]",
            )}
          >
            {children}
          </div>
          <div className="flex justify-center pt-[20px] 1280:pt-0">
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
          <Image
            width="1200"
            height="1200"
            src={imgSrc ?? ``}
            alt=""
            className="w-[100%] 700:w-[60%] 1280:w-[100%]"
          />
          <div
            className={cn(
              colorThemeDict[colorTheme].text,
              "w-full pt-[20px] body 1280:pt-0 1280:pl-[20px]",
            )}
          >
            {children}
          </div>
        </>
      )}
    </div>
  );
};
