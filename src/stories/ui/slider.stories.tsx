import type { Meta, StoryObj } from '@storybook/react';

import { Slider } from '../../package/ui/components/ui/slider';

const meta = {
  component: Slider,
  argTypes: {
    defaultValue: {
        type: 'number[]',
    },
    max: {
        type: 'number',
    },
    step: {
        type: 'number',
    },
  }
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        max: 100,
        step: 1,
        defaultValue: [30],
    }
};
