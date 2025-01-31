import type { Meta, StoryObj } from '@storybook/react';

import { Alert, AlertDescription, AlertTitle } from '@/package/ui/components/ui/alert';
import { AlertCircle, Terminal } from 'lucide-react';

const meta = {
    component: Alert,
    argTypes: {
        variant: {
            options: ['default', 'destructive'],
            control: { type: 'select' },
        }
    }
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: ({ ...args }) => (
        <Alert {...args}>
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
                You can add components and dependencies to your app using the cli.
            </AlertDescription>
        </Alert>
    ),
};

export const WithIcon: Story = {
    render: ({ ...args }) => (
        <Alert {...args}>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
                You can add components and dependencies to your app using the cli.
            </AlertDescription>
        </Alert>
    ),
};


export const DestructiveWithIcon: Story = {
    render: ({ ...args }) => (
        <Alert {...args}>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
                You can add components and dependencies to your app using the cli.
            </AlertDescription>
        </Alert>
    ),
    args: {
        variant: 'destructive',
    }
};
