import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../../package/ui/components/ui/checkbox';


const meta = {
    component: Checkbox,
    argTypes: {
    }
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {
    render: ({ ...args }) => (
        <Checkbox {...args} />
    ),
};