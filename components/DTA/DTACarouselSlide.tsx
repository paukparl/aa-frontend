// TODO
// add width cutoff for caption
import clsx from "clsx";
import React from "react";
import { Caption } from "../Typography/Caption";

type DTACarouselSlideProps = {
  imgSrc: string;
  imgAlt: string;
  className?: string;
  caption?: string;
};

export const DTACarouselSlide = ({
  imgSrc,
  imgAlt,
  caption,
  className,
}: DTACarouselSlideProps) => {
  return (
    <div className={clsx(className, "w-fit")}>
      <img
        src={imgSrc}
        alt={imgAlt}
        className="mb-1 h-[180px] w-auto sm:h-[370px] xl:h-[515px]"
      />
      {caption != null && <Caption children={caption} />}
    </div>
  );
};
