import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ButtonCTA } from "@/components/globals/components/ButtonCTA";

const meta = {
  title: "Global/Buttons/CTA Button",
  component: ButtonCTA,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ButtonCTA>;

export default meta;

type Story = StoryObj<typeof ButtonCTA>;

export const Primary: Story = {
  args: {
    link: "",
    label: "Download extended brief ↗",
  },
};
