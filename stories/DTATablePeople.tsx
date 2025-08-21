import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DTAPeopleTable } from "@/components/dta/components/DTAPeopleTable";

const mockPersonData = {
  id: 89,
  documentId: "hu5j7r9p30sg6w2w3jr5b6w4",
  createdAt: "2025-07-21T07:44:47.259Z",
  updatedAt: "2025-08-08T22:07:23.752Z",
  publishedAt: "2025-08-08T22:07:23.854Z",
  slug: "lawson",
  firstName: "Handel Kitchiner (Hal)",
  lastName: "Lawson",
  displayStudyYear: "1948-1985",
  headshot: {
    id: 314,
    documentId: "oqdl1d54jdb6e7nw1e99xtg5",
    createdAt: "2025-07-21T07:49:28.362Z",
    updatedAt: "2025-07-21T07:49:28.362Z",
    publishedAt: "2025-07-21T07:49:28.363Z",
    url: "https://ethical-flame-ab7a35f827.media.strapiapp.com/image_71_65c5be3b95.png",
    alternativeText: null,
    caption: null,
    mime: "image/png",
    width: 534,
    height: 668,
    formats: {
      thumbnail: {
        url: "https://ethical-flame-ab7a35f827.media.strapiapp.com/thumbnail_image_71_65c5be3b95.png",
        width: 125,
        height: 156,
        mime: "image/png",
      },
      small: {
        url: "https://ethical-flame-ab7a35f827.media.strapiapp.com/small_image_71_65c5be3b95.png",
        width: 400,
        height: 500,
        mime: "image/png",
      },
    },
  },
  bioRichText: null,
  studyYear: null,
  dateBirth: "1928",
  dateDeath: "1985",
  placeOfBirth: "London",
  Eduction: [
    {
      id: 124,
      institution: "Institution",
      country: "Country",
      dateRange: "1948-1958",
      courseName: "Course",
    },
    {
      id: 125,
      institution: "Institution",
      country: "Country",
      dateRange: "1958-1968",
      courseName: "Course",
    },
  ],
  Career: [
    {
      id: 239,
      institution: "Institution",
      country: "Country",
      dateRange: "1948-1958",
      jobRole: "Role",
    },
    {
      id: 240,
      institution: "Institution",
      country: "Country",
      dateRange: "1958-1968",
      jobRole: "Role",
    },
  ],
  dta_practicesNew: [
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
  ],
  dtaInstitutionsNew: [
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
  ],
  dta_objects: [
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
  ],
  dtaLocation: null,
};

const meta = {
  title: "DTA/Tables/People Table",
  component: DTAPeopleTable,
} satisfies Meta<typeof DTAPeopleTable>;

export default meta;

type Story = StoryObj<typeof DTAPeopleTable>;

export const Primary: Story = {
  args: {
    className: "p-10 700:p-30",
    content: mockPersonData.Eduction.map((row) => ({
      info: `${row.courseName ? `${row.courseName}, ` : ""}${row.institution ? `${row.institution}, ` : ""}${row.country ?? ""}`,
      year: row.dateRange ?? "",
    })),
  },
};
