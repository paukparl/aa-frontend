import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ProgrammeTableInfo } from "@/components/school/components/ProgrammeTableInfo";

const meta = {
  title: "School/Tables/Programme Info Table",
  component: ProgrammeTableInfo,
} satisfies Meta<typeof ProgrammeTableInfo>;

export default meta;

type Story = StoryObj<typeof ProgrammeTableInfo>;

export const Primary: Story = {
  args: {
    className: "p-10 700:p-30",
    degreeAwarded: "BA (Hons) in Architecture",
    durationText:
      "Three years, full time (years one to three of the five-years course in architecture)",
  },
};
