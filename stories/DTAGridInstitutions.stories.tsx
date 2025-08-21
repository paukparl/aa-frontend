import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  DTAInstitutionsGrid,
  DTAInstitutionsGridItem,
} from "@/components/dta/components/DTAInstitutionsGrid";

const mockInstitutionsData = [
  {
    id: 57,
    documentId: "xv3x5v3y9tac706b44g1po78",
    createdAt: "2025-08-08T21:02:00.834Z",
    updatedAt: "2025-08-08T21:02:00.834Z",
    publishedAt: "2025-08-08T21:02:00.948Z",
    slug: "dta-institution",
    Name: "Architectural Association",
    Display: {
      id: 340,
      documentId: "ghlnfusfhzpovnes748w33f5",
      createdAt: "2025-08-08T21:01:56.805Z",
      updatedAt: "2025-08-08T21:01:56.805Z",
      publishedAt: "2025-08-08T21:01:56.805Z",
      url: "https://ethical-flame-ab7a35f827.media.strapiapp.com/Screenshot_2025_08_08_at_17_01_49_a7ad716ce9.png",
      alternativeText: null,
      caption: null,
      mime: "image/png",
      width: 557,
      height: 345,
      formats: {
        thumbnail: {
          url: "https://ethical-flame-ab7a35f827.media.strapiapp.com/thumbnail_Screenshot_2025_08_08_at_17_01_49_a7ad716ce9.png",
          width: 245,
          height: 152,
          mime: "image/png",
        },
        small: {
          url: "https://ethical-flame-ab7a35f827.media.strapiapp.com/small_Screenshot_2025_08_08_at_17_01_49_a7ad716ce9.png",
          width: 500,
          height: 310,
          mime: "image/png",
        },
      },
    },
  },
  {
    id: 70,
    documentId: "xjjqza433sgftjrzeh0ppa54",
    createdAt: "2025-08-08T21:06:31.889Z",
    updatedAt: "2025-08-08T21:06:31.889Z",
    publishedAt: "2025-08-08T21:06:31.952Z",
    slug: "dta-institution-3",
    Name: "University of the West Indies",
    Display: null,
  },
  {
    id: 73,
    documentId: "smqx5q4acsp8xvnna1l0agb0",
    createdAt: "2025-08-08T21:06:58.438Z",
    updatedAt: "2025-08-08T21:06:58.438Z",
    publishedAt: "2025-08-08T21:06:58.496Z",
    slug: "university-of-ibadan",
    Name: "University of Ibadan",
    Display: null,
  },
  {
    id: 59,
    documentId: "jpfwyx1pzlee8ej8snjgec6p",
    createdAt: "2025-08-08T21:05:02.752Z",
    updatedAt: "2025-08-08T21:05:02.752Z",
    publishedAt: "2025-08-08T21:05:02.837Z",
    slug: "dta-institution-1",
    Name: "École des Beaux-Arts",
    Display: null,
  },
  {
    id: 68,
    documentId: "pai4krn0olrq9pt8zh4er373",
    createdAt: "2025-08-08T21:05:20.929Z",
    updatedAt: "2025-08-08T21:06:15.493Z",
    publishedAt: "2025-08-08T21:06:15.575Z",
    slug: "dta-institution-2",
    Name: "University of Ceylon",
    Display: null,
  },
  {
    id: 76,
    documentId: "vh8xtwbhbx12mgpgql3adcqq",
    createdAt: "2025-08-08T21:07:25.483Z",
    updatedAt: "2025-08-08T21:07:25.483Z",
    publishedAt: "2025-08-08T21:07:25.556Z",
    slug: "kumasi-college-of-technology-kwame-nkrumah-university-of-science-and-technology-knust",
    Name: "Kumasi College of Technology / Kwame Nkrumah University of Science and Technology (KNUST)",
    Display: null,
  },
  {
    id: 83,
    documentId: "swsykgf7zhp6san4wfpkvtpf",
    createdAt: "2025-08-08T21:08:53.762Z",
    updatedAt: "2025-08-08T21:08:53.762Z",
    publishedAt: "2025-08-08T21:08:53.834Z",
    slug: "massachusetts-institute-of-technology-mit-school-of-architecture",
    Name: "Massachusetts Institute of Technology (MIT) School of Architecture",
    Display: {
      id: 341,
      documentId: "tzp8pim8rd04swxsm19jiuim",
      createdAt: "2025-08-08T21:08:41.875Z",
      updatedAt: "2025-08-08T21:08:41.875Z",
      publishedAt: "2025-08-08T21:08:41.875Z",
      url: "https://ethical-flame-ab7a35f827.media.strapiapp.com/Screenshot_2025_08_08_at_17_08_35_ae47fa389f.png",
      alternativeText: null,
      caption: null,
      mime: "image/png",
      width: 482,
      height: 370,
      formats: {
        thumbnail: {
          url: "https://ethical-flame-ab7a35f827.media.strapiapp.com/thumbnail_Screenshot_2025_08_08_at_17_08_35_ae47fa389f.png",
          width: 203,
          height: 156,
          mime: "image/png",
        },
      },
    },
  },
  {
    id: 55,
    documentId: "vr59ihc1zbyeo87ldjb1tcrn",
    createdAt: "2025-07-21T07:48:55.214Z",
    updatedAt: "2025-08-08T16:23:12.292Z",
    publishedAt: "2025-08-08T16:23:12.362Z",
    slug: "ministry-of-works",
    Name: "Jamaica College",
    Display: {
      id: 315,
      documentId: "jsi54nx3ctxwbth0sqww07vo",
      createdAt: "2025-07-21T07:50:06.965Z",
      updatedAt: "2025-07-21T07:50:06.965Z",
      publishedAt: "2025-07-21T07:50:06.966Z",
      url: "https://ethical-flame-ab7a35f827.media.strapiapp.com/image_71_494d055f22.png",
      alternativeText: null,
      caption: null,
      mime: "image/png",
      width: 534,
      height: 412,
      formats: {
        thumbnail: {
          url: "https://ethical-flame-ab7a35f827.media.strapiapp.com/thumbnail_image_71_494d055f22.png",
          width: 202,
          height: 156,
          mime: "image/png",
        },
        small: {
          url: "https://ethical-flame-ab7a35f827.media.strapiapp.com/small_image_71_494d055f22.png",
          width: 500,
          height: 386,
          mime: "image/png",
        },
      },
    },
  },
  {
    id: 80,
    documentId: "b2mncbsww3vv6shzzdcoawto",
    createdAt: "2025-08-08T21:07:52.082Z",
    updatedAt: "2025-08-08T21:07:52.082Z",
    publishedAt: "2025-08-08T21:07:52.177Z",
    slug: "yale-school-of-architecture",
    Name: "Yale School of Architecture",
    Display: null,
  },
];

const meta = {
  title: "DTA/Grids/Institutions Grid",
  component: DTAInstitutionsGrid,
} satisfies Meta<typeof DTAInstitutionsGrid>;

export default meta;

type Story = StoryObj<typeof DTAInstitutionsGrid>;

export const Primary: Story = {
  args: {
    className: "p-10 700:p-30",
    children: (
      <>
        {mockInstitutionsData.map((institution) => (
          <DTAInstitutionsGridItem
            key={institution.documentId}
            institution={institution}
          />
        ))}
      </>
    ),
  },
};
