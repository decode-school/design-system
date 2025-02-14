import type { Meta, StoryObj } from '@storybook/react';

import FormExemple from '@/components/FormExemple';

const meta: Meta<typeof FormExemple> = {
    component: FormExemple,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BaseForm: Story = {
};