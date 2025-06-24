import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { DTAHeader } from '../components/DTA/DTAHeader';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'DTA/Typography/Header',
  component: DTAHeader,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    title: { control: 'text' },
    tipInRoute: { control: 'select',
    options: ['people', 'practices', 'institutions', 'collections', 'about', 'search'], },
    tipInLevel: {table: {
      disable: true,
    },}
  },
} satisfies Meta<typeof DTAHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Level1: Story = {
  args: {
    tipInLevel: 'first',
    title: 'About the Archive',
    tipInRoute: 'practices',
  },
};

export const Level2: Story = {
  args: {
    tipInLevel: 'second',
    title: 'Ministry of Works',
    tipInRoute: 'practices',
  },
};