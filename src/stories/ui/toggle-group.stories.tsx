import type { Meta, StoryObj } from '@storybook/react';

import { ToggleGroup, ToggleGroupItem } from '../../package/ui/components/ui/toggle-group';

const meta = {
    component: ToggleGroup,
    argTypes: {
        type: {
            options: [
                'single',
                'multiple',
              ],
              control: { type: 'select' },
        },
    }
} satisfies Meta<typeof ToggleGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        type: 'single',
        children: <>
            <ToggleGroupItem value="a">A</ToggleGroupItem>
            <ToggleGroupItem value="b">B</ToggleGroupItem>
            <ToggleGroupItem value="c">C</ToggleGroupItem>
        </>,
    }
};
