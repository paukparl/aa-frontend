import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { UnitTableInfo } from "@/components/school/components/UnitTableInfo";

const meta = {
  title: "School/Tables/Unit Info Table",
  component: UnitTableInfo,
} satisfies Meta<typeof UnitTableInfo>;

export default meta;

type Story = StoryObj<typeof UnitTableInfo>;

export const Primary: Story = {
  args: {
    className: "p-10 700:p-30",
    items: [
      { type: "Course Tutors", content: "Miraj Ahmed, Martin Jameson" },
      { type: "Status", content: "Choose 1 of 21 units" },
      { type: "Terms", content: "1,2,3" },
    ],
  },
};
