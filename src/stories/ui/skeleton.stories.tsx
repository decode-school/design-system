import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from '../../package/ui/components/ui/skeleton';

const meta = {
  component: Skeleton,
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        className: 'w-32 h-32',
    }
};
