import { Meta, StoryObj } from '@storybook/react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/package/ui/components/ui/sheet';
import { Button } from '@/package/ui/components/ui/button';

const meta: Meta<typeof Sheet> = {
    component: Sheet,
};


export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: ({ ...args }) => (
        <Sheet { ...args }>
            <SheetTrigger>
                <Button>Open</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    ),
};