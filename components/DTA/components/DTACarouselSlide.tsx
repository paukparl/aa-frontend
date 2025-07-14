import clsx from "clsx";
import React from "react";
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
  return (
    <div className={clsx(className, "w-fit")}>
      <img
        src={imgSrc}
        alt={imgAlt}
        className="mb-1 h-[180px] w-auto sm:h-[370px] xl:h-[515px]"
      />
      {caption && (
        <Caption
          className={clsx(
            "text-color-dta-about-foreground transition-opacity duration-300 ease-in-out",
            isActive ? "opacity-100" : "opacity-0",
          )}
        >
          {caption}
        </Caption>
      )}
    </div>
  );
};
