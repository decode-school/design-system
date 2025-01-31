import type { Meta, StoryObj } from '@storybook/react';

import { Avatar, AvatarFallback, AvatarImage } from '@/package/ui/components/ui/avatar';

const meta = {
    component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/12610160?v=4" alt="avatar" />
            <AvatarFallback>AM</AvatarFallback>
        </Avatar>
    )
};

export const Fallback: Story = {
    name: 'Fallback (or no image)',
    render: ({ ...args }) => (
        <Avatar { ...args }>
            <AvatarImage src="/dead-image-link" alt="avatar" />
            <AvatarFallback>AM</AvatarFallback>
        </Avatar>
    )
};