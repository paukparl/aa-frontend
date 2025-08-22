import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ProgrammeTableVisitingSchool } from "@/components/school/components/ProgrammeTableVisitingSchool";

const meta = {
  title: "School/Tables/Visiting School Courses Table",
  component: ProgrammeTableVisitingSchool,
} satisfies Meta<typeof ProgrammeTableVisitingSchool>;

export default meta;

type Story = StoryObj<typeof ProgrammeTableVisitingSchool>;

export const Primary: Story = {
  args: {
    className: "p-10 700:p-30",
    units: [
      {
        representativeImage: "/storybook/Programmes/programmes-diploma1.jpg",
        imgAlt: "alt",
        title: "Metropolitan Landscapes",
        dateTextOverride: "13 March - 17 March 2025",
        location: "Online / Latin America",
        theme: "Urban and Landscape Ecologies",
        documentId: "12344",
        slug: "slug",
      },
      {
        representativeImage: "",
        imgAlt: "alt",
        title: "Metropolitan Landscapes",
        dateTextOverride: "13 March - 17 March 2025",
        location: "Online / Latin America",
        theme: "Urban and Landscape Ecologies",
        documentId: "12344",
        slug: "slug",
      },
      {
        representativeImage: "",
        imgAlt: "alt",
        title: "Metropolitan Landscapes",
        dateTextOverride: "13 March - 17 March 2025",
        location: "Online / Latin America",
        theme: "Urban and Landscape Ecologies",
        documentId: "12344",
        slug: "slug",
      },
      {
        representativeImage: "/storybook/Programmes/programmes-student1.jpg",
        imgAlt: "alt",
        title: "Metropolitan Landscapes",
        dateTextOverride: "13 March - 17 March 2025",
        location: "Online / Latin America",
        theme: "Urban and Landscape Ecologies",
        documentId: "12344",
        slug: "slug",
      },
      {
        representativeImage: "",
        imgAlt: "alt",
        title: "Metropolitan Landscapes",
        dateTextOverride: "13 March - 17 March 2025",
        location: "Online / Latin America",
        theme: "Urban and Landscape Ecologies",
        documentId: "12344",
        slug: "slug",
      },
      {
        representativeImage: "",
        imgAlt: "alt",
        title: "Metropolitan Landscapes",
        dateTextOverride: "13 March - 17 March 2025",
        location: "Online / Latin America",
        theme: "Urban and Landscape Ecologies",
        documentId: "12344",
        slug: "slug",
      },
      {
        representativeImage: "",
        imgAlt: "alt",
        title: "Metropolitan Landscapes",
        dateTextOverride: "13 March - 17 March 2025",
        location: "Online / Latin America",
        theme: "Urban and Landscape Ecologies",
        documentId: "12344",
        slug: "slug",
      },
      {
        representativeImage: "",
        imgAlt: "alt",
        title: "Metropolitan Landscapes",
        dateTextOverride: "13 March - 17 March 2025",
        location: "Online / Latin America",
        theme: "Urban and Landscape Ecologies",
        documentId: "12344",
        slug: "slug",
      },
    ],
  },
};
