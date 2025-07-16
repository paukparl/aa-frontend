"use client";

import clsx from "clsx";
import React, { useRef, useState } from "react";
import { Caption } from "@/components/Typography/Caption";

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
      let dimensions = imgRef.current.clientWidth / imgRef.current.clientHeight;
      let minW = 180 * dimensions;
      let midW = 370 * dimensions;
      let maxW = 515 * dimensions;
      setMinWidth(`${minW}px`);
      setMidWidth(`${midW}px`);
      setMaxWidth(`${maxW}px`);
    }
  }
  return (
    <div className={clsx(className, "w-fit")}>
      <img
        ref={imgRef}
        src={imgSrc}
        alt={imgAlt}
        className="mb-1 h-[180px] w-auto sm:h-[370px] xl:h-[515px]"
        onLoad={setCaptionWidths}
      />
      {caption && minWidth !== "" && (
        <>
          <div style={{ width: minWidth }} className="block sm:hidden">
            <Caption
              className={clsx(
                "text-color-dta-about-foreground transition-opacity duration-300 ease-in-out",
                isActive ? "opacity-100" : "opacity-0",
              )}
            >
              {caption}
            </Caption>
          </div>
          <div
            style={{ width: midWidth }}
            className="hidden sm:block xl:hidden"
          >
            <Caption
              className={clsx(
                "text-color-dta-about-foreground leading-tight transition-opacity duration-300 ease-in-out",
                isActive ? "opacity-100" : "opacity-0",
              )}
            >
              {caption}
            </Caption>
          </div>
          <div style={{ width: maxWidth }} className="hidden xl:block">
            <Caption
              className={clsx(
                "text-color-dta-about-foreground leading-tight transition-opacity duration-300 ease-in-out",
                isActive ? "opacity-100" : "opacity-0",
              )}
            >
              {caption}
            </Caption>
          </div>
        </>
      )}
    </div>
  );
};
