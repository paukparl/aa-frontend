import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ProgrammeGridStudentWork } from "@/components/school/components/ProgrammeGridStudentWork";

const meta = {
  title: "School/Student Work Grid",
  component: ProgrammeGridStudentWork,
} satisfies Meta<typeof ProgrammeGridStudentWork>;

export default meta;

type Story = StoryObj<typeof ProgrammeGridStudentWork>;

export const Primary: Story = {
  args: {
    className: "p-10 700:p-30 text-dta-people-foreground",
    items: [
      {
        title: "The Scarred Landscape",
        artist: "Solveig Jappy",
        imgSrc: "/storybook/Programmes/programmes-student1.jpg",
      },
      {
        title: "The Scarred Landscape",
        artist: "Solveig Jappy",
        imgSrc: "/storybook/Programmes/programmes-student2.jpg",
      },
      {
        title: "The Scarred Landscape",
        artist: "Solveig Jappy",
        imgSrc: "/storybook/Programmes/programmes-student3.jpg",
      },
      {
        title: "The Scarred Landscape",
        artist: "Solveig Jappy",
        imgSrc: "/storybook/Programmes/programmes-student4.jpg",
      },
      {
        title: "The Scarred Landscape",
        artist: "Solveig Jappy",
        imgSrc: "/storybook/Programmes/programmes-student2.jpg",
      },
    ],
  },
};
