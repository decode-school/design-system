import type { Meta, StoryObj } from '@storybook/react';

import { WeekCalendar } from '../../package/ui/components/ui/week-calendar';
import { useState } from 'react';

const meta = {
    component: WeekCalendar,
} satisfies Meta<typeof WeekCalendar>;

export default meta;

type Story = StoryObj<typeof meta>;

function WeekCalendarStory() {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    return (
        <WeekCalendar selected={selectedDate} onSelect={setSelectedDate} />
    )
}


export const Default: Story = {
    render: ({ ...args }) => (
        <WeekCalendarStory />
    ),
    args: {
        selected: new Date(),
        onSelect: () => {},
    },
};
