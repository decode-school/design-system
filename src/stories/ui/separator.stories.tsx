import { Meta, StoryObj } from '@storybook/react';
import { Separator } from '@/package/ui/components/ui/separator';

const meta: Meta<typeof Separator> = {
    component: Separator,
};


export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: ({ ...args }) => (
        <Separator {...args} />
    ),
};

export const Vertical: Story = {
    render: ({ ...args }) => (
        <div className='h-8'>
            <Separator orientation='vertical' {...args} />
        </div>
    ),
};