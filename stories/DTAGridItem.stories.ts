import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import DTAGridItem from "../components/DTA/components/DTAGridItem";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DTA/03 Components/Grid Item",
  component: DTAGridItem,
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
    image: { control: "boolean" },
    imgSrc: {
      table: {
        disable: true,
      },
    },
    imgAlt: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    title: {
      table: {
        disable: true,
      },
    },
    type: {
      table: {
        disable: true,
      },
    },
    context: {
      table: {
        disable: true,
      },
    },
    uid: {
      table: {
        disable: true,
      },
    },
    date: {
      table: {
        disable: true,
      },
    },
    country: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof DTAGridItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const People: Story = {
  args: {
    className: "w-[150px] sm:w-[200px] text-dta-people-foreground",
    image: true,
    imgSrc: "/storybook/DTA/components/Grid/dta_grid_people_1.jpg",
    imgAlt: "A portrait of hal lawson, blakc and white",
    title: "Handel Kitchiner (Hal) Lawson",
    type: "people",
    date: "1928-1985",
  },
  globals: {
    backgrounds: { value: "light" },
  },
};
export const Institutions: Story = {
  args: {
    className: "w-[230px] sm:w-[420px] text-dta-institutions-foreground",
    image: true,
    imgSrc: "/storybook/DTA/components/Grid/dta_grid_institutions_1.jpg",
    imgAlt: "An image of a college building",
    title: "College TKTK",
    type: "institutions",
  },
  globals: {
    backgrounds: { value: "light" },
  },
};
export const PracticesGrid: Story = {
  args: {
    className:
      "w-[350px] h-fit sm:h-[145px] w-[300px] text-dta-about-foreground",
    title: "Ministry of Works",
    country: "Sierra Leone",
    type: "practicesgrid",
  },
  argTypes: {
    image: {
      table: {
        disable: true,
      },
    },
  },
  globals: {
    backgrounds: { value: "light" },
  },
};
export const PracticesTable: Story = {
  args: {
    className: "w-[90vw] text-dta-practices-foreground",
    title: "Ministry of Works",
    country: "Sierra Leone",
    type: "practicestable",
  },
  argTypes: {
    image: {
      table: {
        disable: true,
      },
    },
  },
  globals: {
    backgrounds: { value: "light" },
  },
};
export const Collections: Story = {
  args: {
    className: "w-[200px] sm:w-[250px] text-dta-collections-foreground",
    image: true,
    imgSrc: "/storybook/DTA/components/Grid/dta_grid_collections_1.jpg",
    imgAlt: "Collection: Otto Koenigsberger Collection",
    title: "Name of Object",
    type: "collections",
    date: "1928-1985",
  },
  globals: {
    backgrounds: { value: "light" },
  },
};
