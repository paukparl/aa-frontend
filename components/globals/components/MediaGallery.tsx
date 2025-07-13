import clsx from "clsx";
import React, { useState } from "react";
import { Caption } from "@/components/Typography/Caption";

type colorTheme =
  | "dta-people"
  | "dta-practices"
  | "dta-institutions"
  | "dta-collections"
  | "dta-about"
  | "dta-search";

type MediaGalleryProps = {
  slides: Array<Record<string, any>>;
  className?: string;
  colorTheme: colorTheme;
};
export default ({ slides, className, colorTheme }: MediaGalleryProps) => {
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
  };
  return (
    <div className={clsx("w-100%", className)}>
      {slides.length > 1 && (
        <div className="flex gap-[10px] py-[20px] pl-[5px]">
          {slides.map((thumb, index) => (
            <img
              src={thumb.src}
              className={clsx(
                activeInd === index &&
                  `outline ${colorThemeDict[colorTheme].outline}`,
                "h-[75px] w-[75px] cursor-pointer object-cover p-[5px]",
              )}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      )}
      <img
        src={slides[activeInd].src}
        className="h-[auto] max-h-[80vh] w-[100%] object-contain"
      />
      {slides[activeInd].caption.length > 0 && (
        <Caption
          children={slides[activeInd].caption}
          className={clsx("block pt-[10px]", colorThemeDict[colorTheme].text)}
        />
      )}
    </div>
  );
};
