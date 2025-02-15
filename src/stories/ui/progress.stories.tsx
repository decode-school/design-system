import type { Meta, StoryObj } from '@storybook/react';

import { Progress } from '@/package/ui/components/ui/progress';

const meta: Meta<typeof Progress> = {
    component: Progress,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 35,
    },
};