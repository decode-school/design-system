import type { Meta, StoryObj } from '@storybook/react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../../package/ui/components/ui/collapsible';
import { Button } from '@/package/ui/components/ui/button';


const meta = {
    component: Collapsible,
    argTypes: {
    }
} satisfies Meta<typeof Collapsible>;

export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {
    render: ({ ...args }) => (
        <Collapsible {...args}>
            <CollapsibleTrigger>
                <Button>Whatever can be a trigger</Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
                Actual content of the collapsible, can be placed anywhere within the scope of <code>{`<Collapsible>`}</code>, just like the trigger.
            </CollapsibleContent>
        </Collapsible>
    ),
};

