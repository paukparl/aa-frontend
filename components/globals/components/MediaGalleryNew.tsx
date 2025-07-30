import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/cn";
import { Schema } from "@/lib/schemas";

type MediaGalleryProps = {
  imgs: Schema<"img">[];
  className?: string;
};
export const MediaGallery = ({ imgs, className }: MediaGalleryProps) => {
  const [activeInd, setActiveInd] = useState<number>(0);

  const handleClick = (index: number) => {
    if (activeInd !== index) {
      setActiveInd(index);
    }
  };
  const activeImg = imgs[activeInd];
  return (
    <div className={clsx("w-100% text-black", className)}>
      {imgs.length > 1 && (
        <div className="flex gap-[10px] py-[20px] pl-[5px]">
          {imgs.map((thumb, index) => (
            <div
              key={thumb.documentId}
              className={cn(
                "700:size-75 700:p-5 size-65 cursor-pointer p-3",
                activeInd === index && "outline outline-current",
              )}
            >
              <div className={cn("relative size-full")}>
                <Image
                  fill
                  key={thumb.documentId}
                  src={thumb.url}
                  alt={thumb.alternativeText ?? ""}
                  className={clsx("object-contain")}
                  onClick={() => handleClick(index)}
                />
              </div>
            </div>
          ))}
        </div>
      )}
      <div
        className={cn("relative h-auto max-h-[80vh] w-[100%]")}
        style={{
          aspectRatio: activeImg.width / activeImg.height,
        }}
      >
        <Image
          alt={activeImg.alternativeText ?? ""}
          src={activeImg.url}
          fill
          className={cn("object-contain")}
        />
      </div>
      {activeImg.caption && (
        <span className="caption block pt-[10px]">{activeImg.caption}</span>
      )}
    </div>
  );
};
