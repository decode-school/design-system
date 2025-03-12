import type { Meta, StoryObj } from '@storybook/react';

import { Toaster, toast } from '../../package/ui/components/ui/sonner';
import { Button } from '@/package/ui/components/ui/button';

const meta = {
    component: Toaster,
    argTypes: {
        expand: {
            control: { type: 'boolean' },
        },
        position: {
            control: { type: 'select' },
            options: ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'],
        },
        closeButton: {
            control: { type: 'boolean' },
        },
        richColors: {
            control: { type: 'boolean' },
        }
    },
    parameters: {
        docs: {
            description: {
                story: 'EE'
            },
        }
    }
} satisfies Meta<typeof Toaster>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: ({ ...args }) => (
        <div>
            <Toaster {...args} />
            <Button onClick={() => toast('This is a Toast')}>Toast</Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: `${"`toast('This is a Toast')`"}`
            },
        },
    }
};

export const Message: Story = {
    render: ({ ...args }) => (
        <div>
            <Toaster {...args} />
            <Button onClick={() => toast.message('Event has been created', {
                description: 'Monday, January 3rd at 6:00pm',
            })}>Toast</Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: `${"`toast.message('Event has been created', { description: 'Monday, January 3rd at 6:00pm' })`"}`
            },
        }
    }
};

export const Success: Story = {
    render: ({ ...args }) => (
        <div>
            <Toaster {...args} />
            <Button onClick={() => toast.success('Event has been created')}>Toast</Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: `${"`toast.success('Event has been created')`"}`
            },
        }
    }
};


export const Info: Story = {
    render: ({ ...args }) => (
        <div>
            <Toaster {...args} />
            <Button onClick={() => toast.info('Class coming soon')}>Toast</Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: `${"`toast.info('Class coming soon')`"}`
            },
        }
    }
};


export const Warning: Story = {
    render: ({ ...args }) => (
        <div>
            <Toaster {...args} />
            <Button onClick={() => toast.warning('Forbidden acess')}>Toast</Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: `${"`toast.warning('Forbidden acess')`"}`
            },
        }
    }
};


export const Error: Story = {
    render: ({ ...args }) => (
        <div>
            <Toaster {...args} />
            <Button onClick={() => toast.error('Event has not been created')}>Toast</Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: `${"`toast.error('Event has not been created')`"}`
            },
        }
    }
};


export const Action: Story = {
    render: ({ ...args }) => (
        <div>
            <Toaster {...args} />
            <Button onClick={() => toast('Event has been created', {
                action: {
                    label: 'Undo',
                    onClick: () => console.log('Undo clicked'),
                },
            })}>Toast</Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: `${"`toast('Event has been created', {action: { label: 'Undo',  onClick: () => console.log('Undo clicked'),},})`"}`
            },
        }
    }
};

// @ts-expect-error - This is a fake promise
const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Sonner' }), 2000));

export const Promise: Story = {
    render: ({ ...args }) => (
        <div>
            <Toaster {...args} />
            <Button onClick={() => toast.promise(promise, {
                loading: 'Loading...',
                success: (data: { name: string }) => {
                    return `${data.name} toast has been added`;
                },
                error: 'Error',
            })}>Toast</Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: `${"```toast.promise(promise, { loading: 'Loading...', success: (data: { name: string }) => { return `${data.name} toast has been added`; }, error: 'Error', }))```"}`
            },
        }
    }
};

