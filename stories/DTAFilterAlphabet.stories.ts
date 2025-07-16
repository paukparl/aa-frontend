import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DTAFilterAlphabet } from "@/components/DTA/components/DTAFilterAlphabet";

const meta = {
  title: "DTA/03 Components/Filter/Alphabet Filter",
  component: DTAFilterAlphabet,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
  argTypes: {
    className: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof DTAFilterAlphabet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    colorTheme: "people",
    className: "px-[40px] pt-[30vh]",
  },
  globals: {
    backgrounds: { value: "light" },
  },
};
