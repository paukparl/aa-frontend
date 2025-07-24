import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DTATooltipCard } from "@/components/DTA/components/Map/DTATooltipCard";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DTA/03 Components/Tooltip/Tooltip Card",
  component: DTATooltipCard,
  parameters: {
    docs: {
      description: {
        component: "To do: style for mobile, confirm with Kyla",
      },
    },
    backgrounds: {
      options: {
        light: { name: "Light", value: "#ffffff" },
        dark: { name: "Dark", value: "#7C6D5A" },
      },
    },
    layout: "centered",
  },
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    className: { control: "text" },
  },
} satisfies Meta<typeof DTATooltipCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    items: [
      {
        type: "person",
        name: "George Bernard Finch",
        practice: "London City Council",
      },
      {
        type: "event",
        eventInfo:
          "In 1972, Handel Kitchiner becomes the Dean of the University of Edinburgh.",
        person: "John Doe",
        practice: "Turkish Architecture",
      },
    ],
  },
  globals: {
    backgrounds: { value: "dark" },
  },
};
