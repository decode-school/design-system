import type { Meta, StoryObj } from '@storybook/react';

import { Badge, badgeVariants } from '../../package/ui/components/ui/badge';

const meta = {
    component: Badge,
    argTypes: {
        variant: {
            options: ["default", "secondary", "destructive", "outline"],
            control: {
                type: 'select',
            },
        },
    }
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: ({ ...args }) => (
        <Badge {...args}>Badge</Badge>
    ),
    args: {
        variant: "default",
    }
};

export const LinkAsBadge: Story = {
    parameters: {
        docs: {
            description: {
                story: `Use the imported cva (class-variance-authority) from the badge component to apply the style to the link tag.  
                Usage: ${"`className={badgeVariants({ variant: args.variant })}`"}
                `
            }
        }
    },
    render: ({ ...args }) => (
        <a href="#" className={badgeVariants({ variant: args.variant })}>Link badge</a>
    ),
    args: {
        variant: "default",
    }
};

