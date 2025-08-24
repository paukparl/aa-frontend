import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ProgrammePreviewCard } from "@/components/school/components/ProgrammePreviewCard";

const meta = {
  title: "School/Programme Preview Card",
  component: ProgrammePreviewCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ProgrammePreviewCard>;

export default meta;

type Story = StoryObj<typeof ProgrammePreviewCard>;

const mockProgrammeData = {
  id: 40,
  documentId: "r7dma409n99a73estax9jcxf",
  createdAt: "2025-08-07T18:08:40.182Z",
  updatedAt: "2025-08-24T01:17:46.833Z",
  publishedAt: "2025-08-24T01:17:46.918Z",
  slug: "intermediate-programme",
  programmeTitle: "Intermediate Programme",
  representativeImage: null,
  degreeAwarded: "BA (Hons) Architecture",
  studyMode: "full-time" as const,
  durationValue: 75,
  durationText:
    "Three years, full time (years one to three of the five-years course in architecture)",
  rightAlign: null,
  applyLink: "https://www.linkedbyair.net/",
  shortDescription:
    "<p>The Intermediate Programme empowers students to question how architecture manifests in the world. The First Year focuses on learning through making within a shared, open studio, and provides students with the academic and technical tools to develop their interest in architecture. Students are encouraged to focus on the challenges of the 21st century, while interrogating the foundational principles of architecture. They create an end-of-year portfolio comprising work in a range of media that is informed by various modes of argumentation and representation.</p>",
};

export const Primary: Story = {
  args: {
    className: "700:w-[50%] 1280:w-[33%]",
    programme: mockProgrammeData,
  },
};
