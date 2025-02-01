import type { Meta, StoryObj } from '@storybook/react';

import { Calendar } from '../../package/ui/components/ui/calendar';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';

const meta = {
    component: Calendar,
    argTypes: {

    }
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

function SingleCalendarStory() {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
    return (
        <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} />
    )
}

function RangeCalendarStory() {
    const [selectedDate, setSelectedDate] = useState<DateRange | undefined>(undefined);
    return (
        <Calendar mode="range" selected={selectedDate} onSelect={setSelectedDate} />
    )
}

function MultipleCalendarStory() {
    const [selectedDate, setSelectedDate] = useState<Date[] | undefined>([]);
    return (
        <Calendar mode="multiple" selected={selectedDate} onSelect={setSelectedDate} />
    )
}

export const Single: Story = {
    render: ({ ...args }) => <SingleCalendarStory />,
    args: {
    }
};

export const Range: Story = {
    render: () => <RangeCalendarStory />,
    args: {
        mode: "range",
    }
};

export const Multiple: Story = {
    render: () => <MultipleCalendarStory />,
    args: {
        mode: "range",
    }
};