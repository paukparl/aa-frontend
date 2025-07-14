"use client";

import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useEffect, useState } from "react";
import { DTACarouselSlide } from "@/components/DTA/components/DTACarouselSlide";

type DTACarouselProps = {
  carouselSlides: Array<{
    imgSrc: string;
    imgAlt: string;
    caption?: string;
  }>;
  className?: string;
};

export default function DTACarousel({
  className,
  carouselSlides,
}: DTACarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect(); // initialize on mount

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  return (
    <div>
      <div className={clsx("embla relative", className)} ref={emblaRef}>
        <div className="embla__container w-full gap-[10px]">
          {carouselSlides.map((slide, index) => (
            <div className="embla__slide shrink-0" key={index}>
              <DTACarouselSlide
                imgSrc={slide.imgSrc}
                imgAlt={slide.imgAlt}
                caption={slide.caption}
                isActive={index === activeIndex}
              />
            </div>
          ))}
          <div className="w-[20vw] shrink-0" aria-hidden />
        </div>

        {/* Fade on right edge */}
        {/* <div className="pointer-events-none absolute top-0 right-0 h-full w-[50px] bg-gradient-to-l from-white to-transparent" /> */}
      </div>

      <div className="mt-[0px] flex justify-end gap-[20px]">
        <button className="embla__prev cursor-pointer" onClick={scrollPrev}>
          <img
            src="/icons/arrow-left-large.svg"
            className="h-auto w-[20px] sm:w-[25px]"
          />
        </button>
        <button className="embla__next cursor-pointer" onClick={scrollNext}>
          <img
            src="/icons/arrow-right-large.svg"
            className="h-auto w-[20px] sm:w-[25px]"
          />
        </button>
      </div>
    </div>
  );
}
