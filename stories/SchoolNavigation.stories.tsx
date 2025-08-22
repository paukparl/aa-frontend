import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SchoolNav } from "@/components/school/components/SchoolNav";

const meta = {
  title: "School/Navigation Grid",
  component: SchoolNav,
} satisfies Meta<typeof SchoolNav>;

export default meta;

type Story = StoryObj<typeof SchoolNav>;

export const Primary: Story = {
  args: {
    className: "p-10 700:p-30",
  },
};
