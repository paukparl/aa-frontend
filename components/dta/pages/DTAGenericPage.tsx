import Image from "next/image";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import { getDTAPage } from "@/api/getDTAPage";
import ViewTransitionTipinPage from "@/components/ViewTransitionTipinPage";
import { DTACarousel } from "@/components/dta/components/DTACarousel";
import { routes } from "@/lib/routes";

export async function DTAGenericPage({ slug }: { slug: string }) {
  const page = await getDTAPage(slug);

  if (!page) notFound();

  return (
    <ViewTransitionTipinPage
      type="1"
      bg="var(--color-dta-tipin-1-background)"
      fg="var(--color-dta-green)"
      title={page.pageTitle ?? ""}
      ancestors={[{ title: "DTA Archive", path: routes.ground("dta") }]}
    >
      <div className="flex flex-col gap-(--padding) p-(--padding)">
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
                className="-mx-24"
                carouselSlides={(component.carouselImages ?? []).map((img) => ({
                  imgSrc: img.url,
                  imgAlt: img.alternativeText ?? "",
                }))}
              />
            )}
            {component.__component === "dynamic-zone.text-image-module" && (
              <div className="1280:grid-cols-2 grid grid-cols-1">
                <div className="body w-full">{/* {component.} */}</div>
                <div className="1280:pt-0 flex justify-center pt-20">
                  {component.image && (
                    <Image
                      src={component.image.url}
                      alt={component.image.alternativeText ?? ""}
                      width={component.image.width}
                      height={component.image.height}
                      sizes="100vw, (min-width: 1280px) 50vw"
                    />
                  )}
                </div>
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </ViewTransitionTipinPage>
  );
}
