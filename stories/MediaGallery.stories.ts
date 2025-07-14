import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import MediaGallery from "../components/globals/components/MediaGallery";

const mockSlideData = [
  {
    src: "/storybook/Globals/components/mediagallery/slide1.jpg",
    caption:
      "Miller J Frampton K, Health Centre Iraq, 1955, Otto Koenigsberger Collection",
  },
  {
    src: "/storybook/Globals/components/mediagallery/slide2.jpg",
    caption:
      "Miller K Frampton, Health Centre Iraq, 1955, Otto Koenigsberger Collection",
  },
  {
    src: "/storybook/Globals/components/mediagallery/slide3.jpg",
    caption:
      "Hal J Lawson, Health Centre Iraq, 1955, Otto Koenigsberger Collection",
  },
  {
    src: "/storybook/Globals/components/mediagallery/slide4.jpg",
    caption:
      "Miller J Frampton K, Health Centre Iraq, 1955, Otto Koenigsberger Collection",
  },
  {
    src: "/storybook/Globals/components/mediagallery/slide5.jpg",
    caption:
      "Miller J Frampton K, Health Centre Iraq, 1955, Otto Koenigsberger Collection",
  },
];
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Globals/Components/Media Gallery",
  component: MediaGallery,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    className: {
      table: { disable: true },
    },
    slides: {
      table: { disable: true },
    },
    colorTheme: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof MediaGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    slides: mockSlideData,
    className: "p-[30px]",
    colorTheme: "dta-collections",
  },
  globals: {
    backgrounds: { value: "light" },
  },
};
