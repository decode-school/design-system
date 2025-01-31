import type { Meta, StoryObj } from '@storybook/react';

import { AspectRatio } from '../../package/ui/components/ui/aspect-ratio';

const meta = {
    component: AspectRatio,
    argTypes: {
        ratio: {
            options: [1, 16 / 9, 4 / 3],
            control: {
                type: 'select',
            },
        },
    }
} satisfies Meta<typeof AspectRatio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: 'Default 16/9',
    render: ({ ...args }) => (
        <div className='w-1/2'>
            <AspectRatio {...args}>
                <img src="https://images.unsplash.com/photo-1735627062325-c978986b1871" alt="placeholder" className="rounded-md object-cover w-full h-full" />
            </AspectRatio>
        </div>
    ),
    args: {
        ratio: 16 / 9,
    }
};

export const Square: Story = {
    name: 'Square 1/1',
    render: ({ ...args }) => (
        <div className='w-1/2'>
            <AspectRatio {...args}>
                <img src="https://images.unsplash.com/photo-1735627062325-c978986b1871" alt="placeholder" className="rounded-md object-cover w-full h-full" />
            </AspectRatio>
        </div>
    ),
    args: {
        ratio: 1/1,
    }
};