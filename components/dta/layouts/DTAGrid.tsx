import React from "react";
import { DTAGridItem } from "@/components/dta/components/DTAGridItem";
import { cn } from "@/lib/cn";

type GridType =
  | "people"
  | "practicesgrid"
  | "practicestable"
  | "collections"
  | "institutions";

export type GridItem = {
  title: string;
  imgSrc?: string;
  imgAlt?: string;
  uid?: string;
  date?: string;
  country?: string;
};

type DTAGridProps = {
  items: GridItem[];
  type: GridType;
  className?: string;
  gridItemClassName?: string;
};

export const DTAGrid = ({
  items,
  type,
  className,
  gridItemClassName,
}: DTAGridProps) => {
  const gridTypeDict = {
    practicesgrid: "grid-cols-2 1280:grid-cols-3 gap-5 1024:gap-5 1280:gap-5",
    practicestable: "grid-cols-1",
    people:
      "grid-cols-2 700:grid-cols-3 1024:grid-cols-4 1280:grid-cols-5 1500:grid-cols-6 gap-x-5 gap-y-[35px] 1024:gap-y-10 1024:gap-x-5 1280:gap-y-20 1280:gap-x-5",
    collections:
      "grid-cols-2 700:grid-cols-3 1024:grid-cols-4 1280:grid-cols-5 1500:grid-cols-6 gap-x-5 gap-y-8 1024:gap-y-10 1024:gap-x-5 1280:gap-y-20 1280:gap-x-5",
    institutions:
      "grid-cols-2 1024:grid-cols-3 gap-x-5 gap-y-8 1024:gap-y-10 1024:gap-x-5 1280:gap-y-20 1280:gap-x-5",
  };
  return (
    <div className={cn(className, gridTypeDict[type], "grid w-full")}>
      {type === "people" &&
        items.map((item: GridItem, index: number) => (
          <DTAGridItem
            key={index}
            type={type}
            imgSrc={item.imgSrc}
            imgAlt={item.imgAlt}
            title={item.title}
            className={className}
            date={item.date}
            uid={item.uid}
            country={item.country}
            gridItemClassName={gridItemClassName}
          />
        ))}
    </div>
  );
};
