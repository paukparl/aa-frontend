import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ButtonWindow } from "@/components/globals/components/ButtonWindow";

const meta = {
  title: "Global/Buttons/Window Button",
  component: ButtonWindow,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ButtonWindow>;

export default meta;

type Story = StoryObj<typeof ButtonWindow>;

export const Primary: Story = {
  args: {
    context: "school",
    colorTheme: "school",
    links: [
      { displayText: "Apply", link: "" },
      { displayText: "Enquire to Study", link: "" },
      { displayText: "Download Program Guide", link: "" },
    ],
  },
};
