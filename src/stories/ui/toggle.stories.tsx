import type { Meta, StoryObj } from '@storybook/react';

import { Toggle } from '../../package/ui/components/ui/toggle';
import { Bold } from 'lucide-react';

const meta = {
  component: Toggle,
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: <Bold />,
    }
};
