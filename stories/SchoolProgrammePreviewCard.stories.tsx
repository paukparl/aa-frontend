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
  id: 42,
  documentId: "vkfwii6hmced1blgj99c5e99",
  createdAt: "2025-08-07T21:24:49.073Z",
  updatedAt: "2025-08-24T01:18:19.695Z",
  publishedAt: "2025-08-24T01:18:19.787Z",
  slug: "taught-postgraduate",
  programmeTitle: "Taught Postgraduate",
  hexValue: "#D3C2DA",
  representativeImage: null,
  degreeAwarded: "MA, MSc, MArch, MFA, Taught MPhil",
  studyMode: "full-time" as const,
  durationValue: 25,
  durationText: "12 or 18 months, full-time",
  rightAlign: null,
  shortDescription:
    "<p>The AA offers nine full-time Taught Postgraduate Programmes – advanced studies for students with prior academic and professional experience:<br><br>Architecture and Urbanism (DRL)&nbsp;<br>Design and Make<br>Emergent Technologies and Design<br>History and Critical Thinking<br>Housing and Urbanism<br>Landscape Urbanism<br>Spatial Performance and Design (AAIS)<br>Sustainable Environmental Design<br>Architecture and Urban Design (Projective Cities)</p>",
  schoolApply: {
    slug: "taught-postgraduate",
  },
};

export const Primary: Story = {
  args: {
    className: "700:w-[50%] 1280:w-[33%]",
    programme: mockProgrammeData,
  },
};
