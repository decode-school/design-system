import type { Meta, StoryObj } from '@storybook/react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/package/ui/components/ui/command';


const meta = {
    component: Command,
    argTypes: {
    }
} satisfies Meta<typeof Command>;

export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {
    render: ({ ...args }) => (
        <Command {...args}>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                    <CommandItem>Calendar</CommandItem>
                    <CommandItem>Search Emoji</CommandItem>
                    <CommandItem>Calculator</CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                    <CommandItem>Profile</CommandItem>
                    <CommandItem>Billing</CommandItem>
                    <CommandItem>Settings</CommandItem>
                </CommandGroup>
            </CommandList>
        </Command>
    ),
};

