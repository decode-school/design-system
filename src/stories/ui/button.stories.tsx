import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../package/ui/components/ui/button';
import { Trash } from 'lucide-react';

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    children: {
      type: "string",
      description: "ReactNode",
      control: { type: 'text' },
    },
    variant: {
      options: [
        'primary',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
      control: { type: 'select' },
    },
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: { type: 'select' },
    }
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ ...args }) => <Button {...args}>{args.children}</Button>,
  args: {
    children: "Default",
    variant: "primary",
    size: "default",
  },
};

export const Link: Story = {
  render: ({ ...args }) => <Button {...args}>{args.children}</Button>,
  args: {
    children: "Link as a button",
    variant: "link",
    size: "default",
  },
};

export const Icon: Story = {
  render: ({ ...args }) => <Button {...args}><Trash /></Button>,
  args: {
    children: "Default",
    variant: "destructive",
    size: "icon",
  },
};

export const IconWithText: Story = {
  render: ({ ...args }) => <Button {...args}><Trash />{args.children}</Button>,
  args: {
    children: "Delete",
    variant: "destructive",
    size: "default",
  },
};