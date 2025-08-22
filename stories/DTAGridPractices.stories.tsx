import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  DTAPracticesGrid,
  DTAPracticesGridItem,
} from "@/components/dta/components/DTAPracticesGrid";

const mockPracticesData = [
  {
    id: 57,
    documentId: "tt5cw6cnropwlwesrm09e784",
    createdAt: "2025-08-08T16:54:05.477Z",
    updatedAt: "2025-08-08T16:54:05.477Z",
    publishedAt: "2025-08-08T16:54:05.533Z",
    slug: "dta-practice-3",
    name: "Norman Cherner",
    dta_location_news: [],
  },
  {
    id: 64,
    documentId: "icl6r29b5z80bw8j5kzhrm4x",
    createdAt: "2025-08-08T16:55:20.490Z",
    updatedAt: "2025-08-08T16:55:20.490Z",
    publishedAt: "2025-08-08T16:55:20.537Z",
    slug: "chartered-surveyors",
    name: "Chartered surveyors",
    dta_location_news: [],
  },
  {
    id: 55,
    documentId: "pcp26utwhf8oxo4cdfxmfdub",
    createdAt: "2025-08-08T16:28:17.099Z",
    updatedAt: "2025-08-08T16:53:52.627Z",
    publishedAt: "2025-08-08T16:53:52.674Z",
    slug: "dta-practice-1",
    name: "Associated Design Forum, Aspen, Colorado",
    dta_location_news: [
      {
        id: 39,
        documentId: "n2zfme01haqbocrnr4jp9ei8",
        createdAt: "2025-08-08T16:27:53.528Z",
        updatedAt: "2025-08-08T16:27:53.528Z",
        publishedAt: "2025-08-08T16:27:53.606Z",
        longitude: null,
        latitude: null,
        city: "Aspen, Colorado",
        country: "United States",
      },
    ],
  },
  {
    id: 61,
    documentId: "qrvpxyq4rfq25mzrnci2udlr",
    createdAt: "2025-08-08T16:54:56.868Z",
    updatedAt: "2025-08-08T16:54:56.868Z",
    publishedAt: "2025-08-08T16:54:56.914Z",
    slug: "quine-and-newberry",
    name: "Quine and Newberry",
    dta_location_news: [],
  },
  {
    id: 68,
    documentId: "paf15x2jf0tvcf4zivz2ti5x",
    createdAt: "2025-08-08T16:55:40.094Z",
    updatedAt: "2025-08-08T16:55:40.094Z",
    publishedAt: "2025-08-08T16:55:40.170Z",
    slug: "ghana-architectural-and-civil-engineering-company",
    name: "Ghana Architectural and Civil Engineering Company",
    dta_location_news: [],
  },
  {
    id: 70,
    documentId: "p7djj96issxo5a15fdobr2i6",
    createdAt: "2025-08-08T16:56:07.685Z",
    updatedAt: "2025-08-08T16:56:07.685Z",
    publishedAt: "2025-08-08T16:56:07.763Z",
    slug: "chartered-surveyors-1",
    name: "Chartered Surveyors",
    dta_location_news: [],
  },
  {
    id: 49,
    documentId: "r7w8al29dvcx8uvg5he6x3j8",
    createdAt: "2025-07-21T07:48:08.504Z",
    updatedAt: "2025-08-08T16:25:33.028Z",
    publishedAt: "2025-08-08T16:25:33.081Z",
    slug: "ministry-of-works",
    name: "Ministry of Works",
    dta_location_news: [
      {
        id: 35,
        documentId: "rokck2j85ghypwkcz4lga6h3",
        createdAt: "2025-08-08T16:25:14.433Z",
        updatedAt: "2025-08-08T16:25:14.433Z",
        publishedAt: "2025-08-08T16:25:14.488Z",
        longitude: 51.5072,
        latitude: 0.1276,
        city: "London",
        country: "United Kingdom",
      },
    ],
  },
  {
    id: 51,
    documentId: "k9hvy00pbl38qoexs0uci3u7",
    createdAt: "2025-08-08T16:27:06.559Z",
    updatedAt: "2025-08-08T16:27:06.559Z",
    publishedAt: "2025-08-08T16:27:06.642Z",
    slug: "dta-practice",
    name: "Federal Ministry of Works and Housing, Headquarters",
    dta_location_news: [
      {
        id: 37,
        documentId: "pvgx2spsxvwlcfbrghq13w3n",
        createdAt: "2025-08-08T16:26:44.526Z",
        updatedAt: "2025-08-08T16:26:44.526Z",
        publishedAt: "2025-08-08T16:26:44.595Z",
        longitude: null,
        latitude: null,
        city: "Lagos",
        country: "Nigeria",
      },
    ],
  },
  {
    id: 54,
    documentId: "zcgwyh0732jw5z6vek52rjah",
    createdAt: "2025-08-08T16:53:11.157Z",
    updatedAt: "2025-08-08T16:53:14.911Z",
    publishedAt: "2025-08-08T16:53:14.967Z",
    slug: "dta-practice-2",
    name: "Lyles, Bissett, Carlyle and Wolff",
    dta_location_news: [],
  },
  {
    id: 66,
    documentId: "wrnm3np60sgq4vjwtfogb9om",
    createdAt: "2025-08-08T16:55:30.240Z",
    updatedAt: "2025-08-08T16:55:30.240Z",
    publishedAt: "2025-08-08T16:55:30.303Z",
    slug: "public-works-department",
    name: "Public Works Department",
    dta_location_news: [],
  },
];

const meta = {
  title: "DTA/Grids/Practices Grid",
  component: DTAPracticesGrid,
} satisfies Meta<typeof DTAPracticesGrid>;

export default meta;

type Story = StoryObj<typeof DTAPracticesGrid>;

export const Primary: Story = {
  args: {
    className: "p-10 700:p-30",
    children: (
      <>
        {mockPracticesData.map((practice) => (
          <DTAPracticesGridItem key={practice.documentId} practice={practice} />
        ))}
      </>
    ),
  },
};
