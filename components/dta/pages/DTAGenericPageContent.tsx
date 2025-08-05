import Image from "next/image";
import { Fragment } from "react";
import { DTACarousel } from "@/components/dta/components/DTACarousel";
import { cn } from "@/lib/cn";
import { Schema } from "@/lib/schemas";

type DTAGenericPageContentProps = {
  page: Schema<"dtaPage">;
};

export const DTAGenericPageContent = ({ page }: DTAGenericPageContentProps) => {
  return (
    <div className={cn("flex flex-col gap-20 p-24 700:gap-30")}>
      <h1>{page.pageTitle}</h1>
      {page.dynamicZone.map((component) => (
        <Fragment key={component.id}>
          {component.__component === "dynamic-zone.subhead-module" && (
            <h2>{component.subhead}</h2>
          )}
          {component.__component === "dynamic-zone.text-module" && (
            <div>{/* {component.text} */}</div>
          )}
          {component.__component === "dynamic-zone.image-carousel-module" && (
            <DTACarousel
              className={cn("-mx-24")}
              carouselSlides={(component.carouselImages ?? []).map((img) => ({
                imgSrc: img.url,
                imgAlt: img.alternativeText ?? "",
              }))}
            />
          )}
          {component.__component === "dynamic-zone.text-image-module" && (
            <div className={cn("grid grid-cols-1 1280:grid-cols-2")}>
              <div className={cn("w-full body")}>{/* {component.} */}</div>
              <div className="flex justify-center pt-20 1280:pt-0">
                {component.image && (
                  <Image
                    src={component.image.url}
                    alt={component.image.alternativeText ?? ""}
                    width={component.image.width}
                    height={component.image.height}
                    sizes="100vw, (min-width: 1280px) 50vw"
                    className={cn("")}
                  />
                )}
              </div>
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
};
