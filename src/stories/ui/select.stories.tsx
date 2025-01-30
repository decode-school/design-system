// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import type { Meta, StoryObj } from '@storybook/react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../package/ui/components/ui/select';

const meta = {
    component: Select,
    argTypes: {
        placeholder: {
            control: { type: 'text' },
        }
    }
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: ({ ...args }) => <Select>
        <SelectTrigger>
            <SelectValue placeholder={args.placeholder} />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="2023">2023/2024</SelectItem>
            <SelectItem value="2024">2024/2025</SelectItem>
            <SelectItem value="2025">2025/2026</SelectItem>
            <SelectItem value="2026">2026/2027</SelectItem>
        </SelectContent>
    </Select>,
    args: {
        placeholder: "Choose a year",
    }
};