import type { Meta, StoryObj } from '@storybook/react';

import { RadioGroup, RadioGroupItem } from '@/package/ui/components/ui/radio-group';
import { Label } from '@/package/ui/components/ui/label';

const meta: Meta<typeof RadioGroup> = {
    component: RadioGroup,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: ({ ...args }) => (
        <RadioGroup defaultValue="value2" {...args}>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="value1" id="r1" />
                <Label htmlFor="r1">First element</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="value2" id="r2" />
                <Label htmlFor="r2">Second Element</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="value3" id="r3" />
                <Label htmlFor="r3">Third element</Label>
            </div>
        </RadioGroup>
    ),
    args: {
        defaultValue: 'value2',
    }
};
