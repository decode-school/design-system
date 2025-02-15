import type { Meta, StoryObj } from '@storybook/react';

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationPrevious,
    PaginationNext,
    PaginationEllipsis,
    PaginationLink
} from '@/package/ui/components/ui/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ClassAttributes, AnchorHTMLAttributes } from 'react';
import { JSX } from 'react/jsx-runtime';

const meta: Meta<typeof Pagination> = {
    component: Pagination,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: ({ ...args }) => (
        <Pagination {...args}>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" >1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext href="#" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
};

// this is a fake next/link component for documentation purposes
const Link = (
    props: JSX.IntrinsicAttributes
        & ClassAttributes<HTMLAnchorElement>
        & AnchorHTMLAttributes<HTMLAnchorElement>
) => <a {...props} />;

export const Nextjs: Story = {
    render: ({ ...args }) => (
        <Pagination {...args}>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#" asChild>
                        <Link>
                            <ChevronLeft className="h-4 w-4" />
                            Précédent
                        </Link>

                    </PaginationPrevious>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" asChild>
                        <Link>1</Link>
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext href="#" asChild>
                        <Link>
                            Suivant
                            <ChevronRight className="h-4 w-4" />
                        </Link>
                    </PaginationNext>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
};

