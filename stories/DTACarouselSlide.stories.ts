import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DTACarouselSlide } from "../components/DTA/components/DTACarouselSlide";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DTA/03 Components/Carousel Slide",
  component: DTACarouselSlide,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    imgSrc: {
      table: { disable: true },
    },
    imgAlt: {
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
    caption: { control: "text" },
  },
} satisfies Meta<typeof DTACarouselSlide>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    imgSrc: "/storybook/DTA/components/Carousel/dta_carousel_1.png",
    imgAlt: "",
    className: "",
    caption: "Caption Lorem Ipsum",
  },
  globals: {
    backgrounds: { value: "light" },
  },
};
