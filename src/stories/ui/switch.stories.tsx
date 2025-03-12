import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from '../../package/ui/components/ui/switch';

const meta = {
  component: Switch,
  argTypes: {
    checked: {
        control: {
            type: 'boolean',
        },
    },
    onCheckedChange: {
        type: "function"
    }
  }
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        checked: false,
    }
};
