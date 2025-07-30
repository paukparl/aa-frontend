"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/cn";

type DTACarouselSlideProps = {
  imgSrc: string;
  imgAlt: string;
  className?: string;
  caption?: string;
  isActive?: boolean;
};

export const DTACarouselSlide = ({
  imgSrc,
  imgAlt,
  caption,
  className,
  isActive,
}: DTACarouselSlideProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [minWidth, setMinWidth] = useState("");
  const [midWidth, setMidWidth] = useState("");
  const [maxWidth, setMaxWidth] = useState("");
  function setCaptionWidths() {
    if (imgRef.current) {
      const dimensions =
        imgRef.current.clientWidth / imgRef.current.clientHeight;
      const minW = 180 * dimensions;
      const midW = 370 * dimensions;
      const maxW = 515 * dimensions;
      setMinWidth(`${minW}px`);
      setMidWidth(`${midW}px`);
      setMaxWidth(`${maxW}px`);
    }
  }
  return (
    <div className={cn(className, "w-fit")}>
      <img
        ref={imgRef}
        src={imgSrc}
        alt={imgAlt}
        className="700:h-[370px] 1500:h-[515px] mb-1 h-[180px] w-auto"
        onLoad={setCaptionWidths}
      />
      {caption && minWidth !== "" && (
        <>
          <div style={{ width: minWidth }} className="700:hidden block">
            <span
              className={cn(
                "caption text-color-dta-about-foreground transition-opacity duration-300 ease-in-out",
                isActive ? "opacity-100" : "opacity-0",
              )}
            >
              {caption}
            </span>
          </div>
          <div
            style={{ width: midWidth }}
            className="700:block 1500:hidden hidden"
          >
            <span
              className={cn(
                "caption text-color-dta-about-foreground leading-tight transition-opacity duration-300 ease-in-out",
                isActive ? "opacity-100" : "opacity-0",
              )}
            >
              {caption}
            </span>
          </div>
          <div style={{ width: maxWidth }} className="1500:block hidden">
            <span
              className={cn(
                "caption text-color-dta-about-foreground leading-tight transition-opacity duration-300 ease-in-out",
                isActive ? "opacity-100" : "opacity-0",
              )}
            >
              {caption}
            </span>
          </div>
        </>
      )}
    </div>
  );
};
