// import { getEvent } from "@/api/getEvent";
// import { getEvents } from "@/api/getEvents";
import DTACarousel from "../components/DTA/DTACarousel";
import { H2 } from "../components/Typography/H2";
import { Mono } from "../components/Typography/Mono";

// import { notFound } from "next/navigation";
const mockCarouselSlides = [
  {
    imgSrc: "/storybook/DTA/components/Carousel/dta_carousel_1.png",
    imgAlt: "Image of a person",
    caption: "Caption Lorem Ipsum Dolor",
  },
  {
    imgSrc: "/storybook/DTA/components/Carousel/dta_carousel_2.png",
    imgAlt: "Image of a person",
    caption: "Caption Lorem Ipsum Dolor",
  },
  {
    imgSrc: "/storybook/DTA/components/Carousel/dta_carousel_3.jpg",
    imgAlt: "Image of a person",
    caption: "Caption Lorem Ipsum Dolor",
  },
  {
    imgSrc: "/storybook/DTA/components/Carousel/dta_carousel_4.jpg",
    imgAlt: "Image of a person",
    caption: "Caption Lorem Ipsum Dolor",
  },
  {
    imgSrc: "/storybook/DTA/components/Carousel/dta_carousel_5.jpg",
    imgAlt: "Image of a person",
    caption: "Caption Lorem Ipsum Dolor",
  },
  {
    imgSrc: "/storybook/DTA/components/Carousel/dta_carousel_6.jpg",
    imgAlt: "Image of a person",
    caption: "Caption Lorem Ipsum Dolor",
  },
];

export default async function HomePage() {
  // const events = await getEvents();
  // const event = await getEvent("0ti9pv2j81biuysjih7v7ilx1");

  // if (!event) notFound()

  return (
    <div>
      <h1 className="h1">Welcome to the Home Page</h1>
      <H2 children="heree" />
      <Mono children="momnooooo" />
      <p className="font-nhg-text italic">
        This is the main entry point of the application.
      </p>
      <pre className="font-diatype overflow-scroll">
        {/* {JSON.stringify(events, null, 2)} */}
      </pre>
      <pre className="font-diatype overflow-scroll">
        {/* {JSON.stringify(event, null, 2)} */}
      </pre>
      <DTACarousel carouselSlides={mockCarouselSlides} />
    </div>
  );
}
