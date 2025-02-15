import type { Meta, StoryObj } from '@storybook/react';

import { ScrollArea, ScrollBar } from '@/package/ui/components/ui/scroll-area';

const meta: Meta<typeof ScrollArea> = {
    component: ScrollArea,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: ({ ...args }) => (
        <ScrollArea {...args} className='h-[400px] w-1/2 rounded-md border'>
            {Array.from({ length: 50 }).map((_, i) => (
                <div key={i} className="h-16 bg-muted mb-2">
                    {i}
                </div>
            ))}
        </ScrollArea>
    ),
};

export const Horizontal: Story = {
    render: ({ ...args }) => (
        <ScrollArea {...args} className='w-1/2 rounded-md border'>
            <div className='flex'>
                {Array.from({ length: 50 }).map((_, i) => (
                    <div key={i} className="size-32 bg-muted mr-2">
                        {i}
                    </div>
                ))}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    ),
};