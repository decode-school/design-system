import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '../../package/ui/components/ui/input';

const meta = {
  component: Input,
  argTypes: {
    icon: {
      control: { type: 'text' },
    }
  }
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Placeholder",
  }
};

export const WithIcon: Story = {
  args: {
    icon: "search",
    placeholder: "Search",
  }
};