import type { Meta, StoryObj } from '@storybook/react';

import { Combobox } from '../../package/ui/components/ui/combobox';

const meta = {
    component: Combobox,
    argTypes: {
    }
} satisfies Meta<typeof Combobox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: "Search for a framework...",
        noResultsText: "No results found.",
        items: [
            { value: "react", label: "React" },
            { value: "vue", label: "Vue" },
            { value: "angular", label: "Angular" },
            { value: "svelte", label: "Svelte" },
        ],
        value: "",
        onChange: (value: string) => console.log(value),
    }
};