import { DateRangePicker } from '@/package/ui/components/ui/date-range-picker';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';


const meta: Meta<typeof DateRangePicker> = {
    component: DateRangePicker,
};
export default meta;

type Story = StoryObj<typeof meta>;

function DefaultStoryComponent({ ...args }) {
    const [value, setValue] = useState<DateRange | undefined>(undefined)
    return (
        <DateRangePicker value={value} onChange={(v) => setValue(v)} {...args} />
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
                const [value, setValue] = useState<DateRange | undefined>(undefined)
return (
    <DateRangePicker value={value} onChange={(v) => setValue(v)} placeholder="Pick a range" />
)
                `,
            }
        }
    }
};