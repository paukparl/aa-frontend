"use client";

import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useEffect } from "react";
import { DTACarouselSlide } from "./DTACarouselSlide";

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
        <div className="embla__container">
          {carouselSlides.map((carouselSlide: any, index: number) => (
            <div className="embla__slide" key={index}>
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
        <button className="embla__prev" onClick={scrollPrev}>
          Prev
        </button>
        <button className="embla__next" onClick={scrollNext}>
          Next
        </button>
      </div>
    </div>
  );
};
