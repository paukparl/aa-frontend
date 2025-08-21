import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DTACarousel } from "@/components/dta/components/DTACarousel";

const mockCollectionsData = [
  {
    id: 471,
    documentId: "uyo4npma6voi2o68x1xy19fw",
    createdAt: "2025-07-21T08:01:18.426Z",
    updatedAt: "2025-07-28T11:19:32.470Z",
    publishedAt: "2025-07-28T11:19:32.576Z",
    slug: null,
    title: "Title",
    image: [
      {
        id: 318,
        documentId: "par1wvurvi9826zxdwms9fik",
        createdAt: "2025-07-21T08:00:25.116Z",
        updatedAt: "2025-07-21T08:00:25.116Z",
        publishedAt: "2025-07-21T08:00:25.116Z",
        url: "https://ethical-flame-ab7a35f827.media.strapiapp.com/d77995911362be9118a52703d61fb2f62c49da87_900a9ce8af.png",
        alternativeText: null,
        caption: null,
        mime: "image/png",
        width: 1497,
        height: 1082,
        formats: {
          thumbnail: {
            url: "https://ethical-flame-ab7a35f827.media.strapiapp.com/thumbnail_d77995911362be9118a52703d61fb2f62c49da87_900a9ce8af.png",
            width: 216,
            height: 156,
            mime: "image/png",
          },
          small: {
            url: "https://ethical-flame-ab7a35f827.media.strapiapp.com/small_d77995911362be9118a52703d61fb2f62c49da87_900a9ce8af.png",
            width: 500,
            height: 361,
            mime: "image/png",
          },
          medium: {
            url: "https://ethical-flame-ab7a35f827.media.strapiapp.com/medium_d77995911362be9118a52703d61fb2f62c49da87_900a9ce8af.png",
            width: 750,
            height: 542,
            mime: "image/png",
          },
          large: {
            url: "https://ethical-flame-ab7a35f827.media.strapiapp.com/large_d77995911362be9118a52703d61fb2f62c49da87_900a9ce8af.png",
            width: 1000,
            height: 723,
            mime: "image/png",
          },
        },
      },
      {
        id: 317,
        documentId: "uuk2dpuzk6dqwqg4zx6zj529",
        createdAt: "2025-07-21T07:58:10.910Z",
        updatedAt: "2025-07-21T07:58:10.910Z",
        publishedAt: "2025-07-21T07:58:10.910Z",
        url: "https://ethical-flame-ab7a35f827.media.strapiapp.com/58a3d6daf8f4428322be56f6a4bb0a57f36a631f_67cc2a3014.png",
        alternativeText: null,
        caption: null,
        mime: "image/png",
        width: 857,
        height: 486,
        formats: {
          thumbnail: {
            url: "https://ethical-flame-ab7a35f827.media.strapiapp.com/thumbnail_58a3d6daf8f4428322be56f6a4bb0a57f36a631f_67cc2a3014.png",
            width: 245,
            height: 139,
            mime: "image/png",
          },
          small: {
            url: "https://ethical-flame-ab7a35f827.media.strapiapp.com/small_58a3d6daf8f4428322be56f6a4bb0a57f36a631f_67cc2a3014.png",
            width: 500,
            height: 284,
            mime: "image/png",
          },
          medium: {
            url: "https://ethical-flame-ab7a35f827.media.strapiapp.com/medium_58a3d6daf8f4428322be56f6a4bb0a57f36a631f_67cc2a3014.png",
            width: 750,
            height: 425,
            mime: "image/png",
          },
        },
      },
    ],
  },
  {
    id: 474,
    documentId: "pcwfhcub0ihz96iptibzulmq",
    createdAt: "2025-08-07T19:32:42.005Z",
    updatedAt: "2025-08-08T18:30:12.696Z",
    publishedAt: "2025-08-08T18:30:12.792Z",
    slug: "dta-object",
    title: "Koenigsberger’s frog’s-eye photograph",
    image: [
      {
        id: 332,
        documentId: "kzhm8yuv00llklwtxrk200qw",
        createdAt: "2025-08-08T18:29:29.150Z",
        updatedAt: "2025-08-08T18:29:29.150Z",
        publishedAt: "2025-08-08T18:29:29.150Z",
        url: "https://ethical-flame-ab7a35f827.media.strapiapp.com/baweja2018_08_b570bb4a2e.jpg",
        alternativeText: null,
        caption: null,
        mime: "image/jpeg",
        width: 960,
        height: 738,
        formats: {
          thumbnail: {
            url: "https://ethical-flame-ab7a35f827.media.strapiapp.com/thumbnail_baweja2018_08_b570bb4a2e.jpg",
            width: 203,
            height: 156,
            mime: "image/jpeg",
          },
          small: {
            url: "https://ethical-flame-ab7a35f827.media.strapiapp.com/small_baweja2018_08_b570bb4a2e.jpg",
            width: 500,
            height: 384,
            mime: "image/jpeg",
          },
          medium: {
            url: "https://ethical-flame-ab7a35f827.media.strapiapp.com/medium_baweja2018_08_b570bb4a2e.jpg",
            width: 750,
            height: 577,
            mime: "image/jpeg",
          },
        },
      },
    ],
  },
  {
    id: 476,
    documentId: "j1l5r7l6qa9ep0d9sa8r2mau",
    createdAt: "2025-08-08T21:11:39.861Z",
    updatedAt: "2025-08-08T21:11:39.861Z",
    publishedAt: "2025-08-08T21:11:40.030Z",
    slug: "dta-object-1",
    title: "Documentary image of the Municipal Swimming Pool",
    image: [
      {
        id: 342,
        documentId: "fx6p2a9dwkzizrijkrr3012p",
        createdAt: "2025-08-08T21:10:58.845Z",
        updatedAt: "2025-08-08T21:10:58.845Z",
        publishedAt: "2025-08-08T21:10:58.846Z",
        url: "https://ethical-flame-ab7a35f827.media.strapiapp.com/Screenshot_2025_08_08_at_17_10_52_9ee0d1630e.png",
        alternativeText: null,
        caption: null,
        mime: "image/png",
        width: 938,
        height: 682,
        formats: {
          thumbnail: {
            url: "https://ethical-flame-ab7a35f827.media.strapiapp.com/thumbnail_Screenshot_2025_08_08_at_17_10_52_9ee0d1630e.png",
            width: 215,
            height: 156,
            mime: "image/png",
          },
          small: {
            url: "https://ethical-flame-ab7a35f827.media.strapiapp.com/small_Screenshot_2025_08_08_at_17_10_52_9ee0d1630e.png",
            width: 500,
            height: 364,
            mime: "image/png",
          },
          medium: {
            url: "https://ethical-flame-ab7a35f827.media.strapiapp.com/medium_Screenshot_2025_08_08_at_17_10_52_9ee0d1630e.png",
            width: 750,
            height: 545,
            mime: "image/png",
          },
        },
      },
    ],
  },
  {
    id: 478,
    documentId: "l8qjp6wtcanpqgnfn47o96f6",
    createdAt: "2025-08-08T21:13:07.527Z",
    updatedAt: "2025-08-08T21:13:07.527Z",
    publishedAt: "2025-08-08T21:13:07.626Z",
    slug: "dta-object-2",
    title: "Diving Board, Municipal Swimming Pool (1940)",
    image: [
      {
        id: 343,
        documentId: "hqvqn6pimfus619jm2pi7owb",
        createdAt: "2025-08-08T21:12:43.871Z",
        updatedAt: "2025-08-08T21:12:43.871Z",
        publishedAt: "2025-08-08T21:12:43.872Z",
        url: "https://ethical-flame-ab7a35f827.media.strapiapp.com/Screenshot_2025_08_08_at_17_12_36_fe96efb346.png",
        alternativeText: null,
        caption: null,
        mime: "image/png",
        width: 944,
        height: 731,
        formats: {
          thumbnail: {
            url: "https://ethical-flame-ab7a35f827.media.strapiapp.com/thumbnail_Screenshot_2025_08_08_at_17_12_36_fe96efb346.png",
            width: 201,
            height: 156,
            mime: "image/png",
          },
          small: {
            url: "https://ethical-flame-ab7a35f827.media.strapiapp.com/small_Screenshot_2025_08_08_at_17_12_36_fe96efb346.png",
            width: 500,
            height: 387,
            mime: "image/png",
          },
          medium: {
            url: "https://ethical-flame-ab7a35f827.media.strapiapp.com/medium_Screenshot_2025_08_08_at_17_12_36_fe96efb346.png",
            width: 750,
            height: 581,
            mime: "image/png",
          },
        },
      },
    ],
  },
  {
    id: 480,
    documentId: "rtygxekim4p4r6huzv17etdc",
    createdAt: "2025-08-08T21:14:34.196Z",
    updatedAt: "2025-08-08T21:14:34.196Z",
    publishedAt: "2025-08-08T21:14:34.269Z",
    slug: "dta-object-3",
    title: "Plan for the new capital of Orissa at Bhubaneswar",
    image: [
      {
        id: 344,
        documentId: "vsuftcsdoty7m5gwz9caftyq",
        createdAt: "2025-08-08T21:14:01.457Z",
        updatedAt: "2025-08-08T21:14:01.457Z",
        publishedAt: "2025-08-08T21:14:01.457Z",
        url: "https://ethical-flame-ab7a35f827.media.strapiapp.com/Screenshot_2025_08_08_at_17_13_55_484602f5c9.png",
        alternativeText: null,
        caption: null,
        mime: "image/png",
        width: 385,
        height: 254,
        formats: {
          thumbnail: {
            url: "https://ethical-flame-ab7a35f827.media.strapiapp.com/thumbnail_Screenshot_2025_08_08_at_17_13_55_484602f5c9.png",
            width: 236,
            height: 156,
            mime: "image/png",
          },
        },
      },
    ],
  },
  {
    id: 478,
    documentId: "l8qjp6wtcanpqgnfn47o96f6",
    createdAt: "2025-08-08T21:13:07.527Z",
    updatedAt: "2025-08-08T21:13:07.527Z",
    publishedAt: "2025-08-08T21:13:07.626Z",
    slug: "dta-object-2",
    title: "Diving Board, Municipal Swimming Pool (1940)",
    image: [
      {
        id: 343,
        documentId: "hqvqn6pimfus619jm2pi7owb",
        createdAt: "2025-08-08T21:12:43.871Z",
        updatedAt: "2025-08-08T21:12:43.871Z",
        publishedAt: "2025-08-08T21:12:43.872Z",
        url: "https://ethical-flame-ab7a35f827.media.strapiapp.com/Screenshot_2025_08_08_at_17_12_36_fe96efb346.png",
        alternativeText: null,
        caption: null,
        mime: "image/png",
        width: 944,
        height: 731,
        formats: {
          thumbnail: {
            url: "https://ethical-flame-ab7a35f827.media.strapiapp.com/thumbnail_Screenshot_2025_08_08_at_17_12_36_fe96efb346.png",
            width: 201,
            height: 156,
            mime: "image/png",
          },
          small: {
            url: "https://ethical-flame-ab7a35f827.media.strapiapp.com/small_Screenshot_2025_08_08_at_17_12_36_fe96efb346.png",
            width: 500,
            height: 387,
            mime: "image/png",
          },
          medium: {
            url: "https://ethical-flame-ab7a35f827.media.strapiapp.com/medium_Screenshot_2025_08_08_at_17_12_36_fe96efb346.png",
            width: 750,
            height: 581,
            mime: "image/png",
          },
        },
      },
    ],
  },
];

const meta = {
  title: "DTA/Carousel",
  component: DTACarousel,
} satisfies Meta<typeof DTACarousel>;

export default meta;

type Story = StoryObj<typeof DTACarousel>;

export const Primary: Story = {
  args: {
    className: "p-10 700:p-30",
    carouselSlides: [
      {
        imgSrc: "storybook/DTA/components/Carousel/dta_carousel_1.png",
        imgAlt: "",
        caption: "Caption Lorem Ipsum 1",
      },
      {
        imgSrc: "storybook/DTA/components/Carousel/dta_carousel_2.png",
        imgAlt: "",
        caption: "Caption Lorem Ipsum 2",
      },
      {
        imgSrc: "storybook/DTA/components/Carousel/dta_carousel_3.jpg",
        imgAlt: "",
        caption: "Caption Lorem Ipsum 3",
      },
      {
        imgSrc: "storybook/DTA/components/Carousel/dta_carousel_4.jpg",
        imgAlt: "",
        caption: "Caption Lorem Ipsum 4",
      },
      {
        imgSrc: "storybook/DTA/components/Carousel/dta_carousel_5.jpg",
        imgAlt: "",
        caption: "Caption Lorem Ipsum 5",
      },
      {
        imgSrc: "storybook/DTA/components/Carousel/dta_carousel_6.jpg",
        imgAlt: "",
        caption: "Caption Lorem Ipsum 6",
      },
    ],
  },
};
