"use client";

import clsx from "clsx";
import React, { useRef, useState } from "react";

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
    <div className={clsx(className, "w-fit")}>
      <img
        ref={imgRef}
        src={imgSrc}
        alt={imgAlt}
        className="700:h-[370px] mb-1 h-[180px] w-auto xl:h-[515px]"
        onLoad={setCaptionWidths}
      />
      {caption && minWidth !== "" && (
        <>
          <div style={{ width: minWidth }} className="700:hidden block">
            <span
              className={clsx(
                "caption text-color-dta-about-foreground transition-opacity duration-300 ease-in-out",
                isActive ? "opacity-100" : "opacity-0",
              )}
            >
              {caption}
            </span>
          </div>
          <div
            style={{ width: midWidth }}
            className="700:block hidden xl:hidden"
          >
            <span
              className={clsx(
                "caption text-color-dta-about-foreground leading-tight transition-opacity duration-300 ease-in-out",
                isActive ? "opacity-100" : "opacity-0",
              )}
            >
              {caption}
            </span>
          </div>
          <div style={{ width: maxWidth }} className="hidden xl:block">
            <span
              className={clsx(
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
