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
  const [prevButDisabled, setPrevButDisabled] = useState(true);
  const [nextButDisabled, setNextButDisabled] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
      setPrevButDisabled(emblaApi.selectedScrollSnap() === 0);
      setNextButDisabled(
        emblaApi.selectedScrollSnap() === carouselSlides.length - 1,
      );
    };

    emblaApi.on("select", onSelect);
    onSelect(); // initialize on mount

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  return (
    <div className={className}>
      <div
        className="embla relative mask-r-from-95% mask-r-to-100%"
        ref={emblaRef}
      >
        <div className="embla__container w-full">
          {carouselSlides.map((slide, index) => (
            <div
              className="embla__slide shrink-0 pl-[10px] sm:pl-[30px]"
              key={index}
            >
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
      </div>

      <div className="mt-[0px] flex justify-end gap-[20px] pr-[10px] sm:pr-[30px]">
        <div className="h-auto min-h-[10px] w-[20px] sm:w-[25px]">
          {!prevButDisabled && (
            <button className="embla__prev cursor-pointer" onClick={scrollPrev}>
              <img
                src="/icons/arrow-left-large.svg"
                className="h-auto w-[20px] sm:w-[25px]"
              />
            </button>
          )}
        </div>
        <div className="h-auto min-h-[10px] w-[20px] sm:w-[25px]">
          {!nextButDisabled && (
            <button className="embla__next cursor-pointer" onClick={scrollNext}>
              <img
                src="/icons/arrow-right-large.svg"
                className="h-auto w-[20px] sm:w-[25px]"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
