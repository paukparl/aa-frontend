import React, { useState } from "react";
import { cn } from "@/lib/cn";

type colorTheme =
  | "dta-people"
  | "dta-practices"
  | "dta-institutions"
  | "dta-collections"
  | "dta-about"
  | "dta-search"
  | "school-programmes";
type Slide = {
  src: string;
  caption: string;
};
type MediaGalleryProps = {
  slides: Slide[];
  className?: string;
  colorTheme: colorTheme;
};
export const MediaGallery = ({
  slides,
  className,
  colorTheme,
}: MediaGalleryProps) => {
  const [activeInd, setActiveInd] = useState<number>(0);

  const handleClick = (index: number) => {
    if (activeInd !== index) {
      setActiveInd(index);
    }
  };
  const colorThemeDict = {
    "dta-people": {
      text: "text-dta-people-foreground",
      outline: "outline-dta-people-foreground",
    },
    "dta-practices": {
      text: "text-dta-practices-foreground",
      outline: "outline-dta-practices-foreground",
    },
    "dta-institutions": {
      text: "text-dta-institutions-foreground",
      outline: "outline-dta-institutions-foreground",
    },
    "dta-collections": {
      text: "text-dta-collections-foreground",
      outline: "outline-dta-collections-foreground",
    },
    "dta-about": {
      text: "text-dta-about-foreground",
      outline: "outline-dta-about-foreground",
    },
    "dta-search": {
      text: "text-dta-search-foreground",
      outline: "outline-dta-search-foreground",
    },
    "school-programmes": {
      text: "text-black",
      outline: "outline-black",
    },
  };
  return (
    <div className={cn("w-100%", className)}>
      {slides.length > 1 && (
        <div className="flex gap-[10px] py-[20px] pl-[5px]">
          {slides.map((thumb, index) => (
            <img
              key={index}
              src={thumb.src}
              className={cn(
                activeInd === index &&
                  `outline ${colorThemeDict[colorTheme].outline}`,
                "h-[65px] w-[65px] cursor-pointer object-cover p-[3px] 700:h-[75px] 700:w-[75px] 700:p-[5px]",
              )}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      )}
      <img src={slides[activeInd].src} className="h-[auto] w-[100%]" />
      {slides[activeInd].caption.length > 0 && (
        <span
          className={cn(
            "block pt-[10px] caption",
            colorThemeDict[colorTheme].text,
          )}
        >
          {slides[activeInd].caption}
        </span>
      )}
    </div>
  );
};
