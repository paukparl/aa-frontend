import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ButtonViewMore } from "@/components/globals/ButtonDefault";

const meta = {
  title: "Global/Buttons/Default Button",
  component: ButtonViewMore,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ButtonViewMore>;

export default meta;

type Story = StoryObj<typeof ButtonViewMore>;

export const Primary: Story = {
  args: {
    href: "",
    children: "Read More",
  },
};
