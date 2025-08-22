import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DTASearchBar } from "@/components/dta/components/DTASearchBar";

const meta = {
  title: "Global/Search Bar",
  component: DTASearchBar,
} satisfies Meta<typeof DTASearchBar>;

export default meta;

type Story = StoryObj<typeof DTASearchBar>;

export const Primary: Story = {
  args: {
    className: "p-10 700:p-30",
  },
};
