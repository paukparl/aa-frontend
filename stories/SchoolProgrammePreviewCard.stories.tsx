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

export const Primary: Story = {
  args: {
    className: "700:w-[50%] 1280:w-[33%]",
    programmeTitle: "Foundation Course",
    description:
      "The Foundation Course is a one-year introduction to an art and design education. Students are encouraged to develop their conceptual ideas through experiments with a wide range of media in an intimate, studio-based environment. Through exposure to the wealth of academic offerings and intellectual resources at the AA, Foundation students are given access to the tools, strategies and methodologies that are developed within the school.",
    documentId: "1234",
    applyLink: "",
    degreeAwarded: "AA Foundation Award in Architecture",
    durationText: "One year, full time",
    durationValue: 20,
    fullTime: true,
    rightAlign: false,
    slug: "slug",
  },
};
