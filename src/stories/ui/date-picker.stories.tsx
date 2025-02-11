import { DatePicker } from '@/package/ui/components/ui/date-picker';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';


const meta: Meta<typeof DatePicker> = {
    component: DatePicker,
};
export default meta;

type Story = StoryObj<typeof meta>;

function DefaultStoryComponent({ ...args }) {
    const [value, setValue] = useState<Date | undefined>(undefined)
    return (
        <DatePicker value={value} onChange={(v) => setValue(v)} {...args} />
    )
}

export const Default: Story = {
    render: ({ ...args }) => (
        <DefaultStoryComponent {...args} />
    ),
    args: {
        placeholder: "Pick a date"
    },
    parameters: {
        docs: {
            source: {
                code: `
                const [value, setValue] = useState<Date | undefined>(undefined)
return (
    <DatePicker value={value} onChange={(v) => setValue(v)} placeholder="Pick a date" />
)
                `,
            }
        }
    }
};