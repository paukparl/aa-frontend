"use client";

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

  if (imgs.length === 0) return null;

  return (
    <div className={cn("w-100% text-black", className)}>
      {imgs.length > 1 && (
        <div className="flex gap-[10px] py-[20px] pl-[5px]">
          {imgs.map((thumb, index) => (
            <div
              key={thumb.documentId}
              className={cn(
                "size-65 cursor-pointer p-3 700:size-75 700:p-5",
                activeInd === index && "outline outline-current",
              )}
            >
              <div className="relative size-full">
                <Image
                  fill
                  key={thumb.documentId}
                  src={thumb.url}
                  alt={thumb.alternativeText ?? ""}
                  className="object-contain"
                  onClick={() => handleClick(index)}
                />
              </div>
            </div>
          ))}
        </div>
      )}
      <div
        className="relative h-auto max-h-[80vh] w-[100%]"
        style={{
          aspectRatio: activeImg.width / activeImg.height,
        }}
      >
        <Image
          alt={activeImg.alternativeText ?? ""}
          src={activeImg.url}
          fill
          className="object-contain"
        />
      </div>
      {activeImg.caption && (
        <span className="block pt-[10px] caption">{activeImg.caption}</span>
      )}
    </div>
  );
};
