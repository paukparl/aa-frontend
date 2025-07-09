"use client";

import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useEffect } from "react";
import { DTACarouselSlide } from "../components/DTACarouselSlide";

// TODO
// Add tail to carousel so last slide aligns left
// Use image dimensions from strapi to calculate

type DTACarouselProps = {
  carouselSlides: Array<Record<string, any>>; // array of items with imgSrc, imgAlt, title, etc.
  className?: string;
};

export default ({ className, carouselSlides }: DTACarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      console.log("next");
    }
  }, [emblaApi]);
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);
  return (
    <div>
      <div className={clsx("embla", className)} ref={emblaRef}>
        <div className="embla__container w-full gap-[10px]">
          {carouselSlides.map((carouselSlide: any, index: number) => (
            <div className="embla__slide shrink-0" key={index}>
              <DTACarouselSlide
                imgSrc={carouselSlide.imgSrc}
                imgAlt={carouselSlide.imgAlt}
                caption={carouselSlide.caption}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end gap-[20px]">
        <button className="embla__prev cursor-pointer" onClick={scrollPrev}>
          <img src="/icons/arrow-left-large.svg" className="h-auto w-[25px]" />
        </button>
        <button className="embla__next cursor-pointer" onClick={scrollNext}>
          <img src="/icons/arrow-right-large.svg" className="h-auto w-[25px]" />
        </button>
      </div>
    </div>
  );
};
