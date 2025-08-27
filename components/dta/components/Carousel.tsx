"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useIsomorphicLayoutEffect } from "motion/react";
import { Slot } from "radix-ui";
import {
  ComponentProps,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { ArrowRightSvg } from "@/components/svgs/ArrowRightSvg";
import { cn } from "@/lib/cn";

const CarouselContext = createContext<{
  emblaCarousel: ReturnType<typeof useEmblaCarousel>;
} | null>(null);

function useCarouselContext() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarouselContext must be used within a Carousel");
  }
  return context;
}

export function Carousel({
  options,
  ...props
}: {
  options?: Parameters<typeof useEmblaCarousel>[0];
} & ComponentProps<"div">) {
  const [_activeIndex, setActiveIndex] = useState(0);
  const emblaCarousel = useEmblaCarousel({
    skipSnaps: true,
    ...options,
  });
  const [, emblaApi] = emblaCarousel;

  useIsomorphicLayoutEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <CarouselContext value={{ emblaCarousel }}>
      <div {...props} />
    </CarouselContext>
  );
}

export function CarouselArrows({ className, ...props }: ComponentProps<"div">) {
  const {
    emblaCarousel: [, emblaApi],
  } = useCarouselContext();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={cn("flex gap-12", className)} {...props}>
      <CarouselArrowButton
        className={cn()}
        onClick={scrollPrev}
        disabled={!emblaApi?.canScrollPrev()}
      >
        <ArrowRightSvg className={cn("w-36 -scale-x-100")} />
      </CarouselArrowButton>
      <CarouselArrowButton
        className={cn()}
        onClick={scrollNext}
        disabled={!emblaApi?.canScrollNext()}
      >
        <ArrowRightSvg className={cn("w-36")} />
      </CarouselArrowButton>
    </div>
  );
}

// https://www.embla-carousel.com/guides/previous-and-next-buttons/#with-react
export function CarouselViewport({
  className,
  ...props
}: ComponentProps<"div">) {
  const {
    emblaCarousel: [emblaRef],
  } = useCarouselContext();
  return (
    <div
      className={cn("overflow-hidden", className)}
      ref={emblaRef}
      {...props}
    />
  );
}

export function CarouselContainer({
  className,
  ...props
}: ComponentProps<"div">) {
  return <div className={cn("flex", className)} {...props} />;
}

export function CarouselSlide({
  asChild,
  className,
  children,
  ...props
}: { asChild?: boolean } & ComponentProps<"div">) {
  const Comp = asChild ? Slot.Root : "div";
  return (
    <Comp className={cn("flex-[0_0_auto]", className)} {...props}>
      {children}
    </Comp>
  );
}

function CarouselArrowButton({
  className,
  ...props
}: ComponentProps<"button">) {
  return (
    <button
      className={cn(
        "cursor-pointer hover:opacity-50 disabled:opacity-20",
        className,
      )}
      {...props}
    />
  );
}
