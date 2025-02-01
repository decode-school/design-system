import type { Meta, StoryObj } from '@storybook/react';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../package/ui/components/ui/card';
import { Button } from '../../package/ui/components/ui/button';

const meta = {
    component: Card,
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['default', 'dark']
        },
        decoration: {
            control: { type: 'select' },
            options: ['none', 'tr', 'bl', 'both']
        },
    }
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: ({ ...args }) => (
        <Card {...args} style={{ width: '300px' }}>
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter className='justify-between'>
                <Button variant="link">Cancel</Button>
                <Button variant="primary">Create</Button>
            </CardFooter>
        </Card>
    ),
    args: {
        variant: 'default',
        decoration: 'none',
    }
};

export const Dark: Story = {
    render: ({ ...args }) => (
        <Card style={{ width: '300px' }} {...args}>
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter className='justify-between'>
                <Button variant="link">Cancel</Button>
                <Button variant="primary">Create</Button>
            </CardFooter>
        </Card>
    ),
    args: {
        variant: 'dark',
        decoration: 'none',
    }
};

export const Decorations: Story = {
    render: ({ ...args }) => (
        <Card style={{ width: '300px' }} {...args}>
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter className='justify-between'>
                <Button variant="link">Cancel</Button>
                <Button variant="primary">Create</Button>
            </CardFooter>
        </Card>
    ),
    args: {
        variant: 'dark',
        decoration: 'both',
    }
};

export const CenteredWithIcon: Story = {
    render: ({ ...args }) => (
        <Card style={{ width: '300px' }} className='text-center'{...args}>
            <CardHeader icon='info'>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter className='justify-center'>
                <Button variant="primary">Create</Button>
            </CardFooter>
        </Card>
    ),
    args: {
        variant: 'dark',
        decoration: 'both',
    }
};

