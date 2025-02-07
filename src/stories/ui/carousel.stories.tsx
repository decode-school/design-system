import type { Meta, StoryObj } from '@storybook/react';

import { Carousel, CarouselContent, CarouselIndicators, CarouselItem, CarouselNext, CarouselPrevious } from '../../package/ui/components/ui/carousel';

const meta = {
    component: Carousel,
    argTypes: {
    }
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: ({ ...args }) => (
        <Carousel {...args}>
            <CarouselContent>
                <CarouselItem>
                    <div className='flex items-center justify-center border rounded-xl h-48'>
                        <span>Slide</span>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className='flex items-center justify-center border rounded-xl h-48'>
                        <span>Slide</span>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className='flex items-center justify-center border rounded-xl h-48'>
                        <span>Slide</span>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselIndicators />
        </Carousel>
    ),
};

export const WithArrows: Story = {
    render: ({ ...args }) => (
        <div className='p-8'>
            <Carousel {...args}>
                <CarouselContent>
                    <CarouselItem>
                        <div className='flex items-center justify-center border rounded-xl h-48'>
                            <span>Slide</span>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className='flex items-center justify-center border rounded-xl h-48'>
                            <span>Slide</span>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className='flex items-center justify-center border rounded-xl h-48'>
                            <span>Slide</span>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
                <CarouselIndicators />
            </Carousel>
        </div>
    ),
};

export const CustomBasis: Story = {
    render: ({ ...args }) => (
        <Carousel {...args}>
            <CarouselContent>
                <CarouselItem className='basis-1/2'>
                    <div className='flex items-center justify-center border rounded-xl h-48'>
                        <span>Slide</span>
                    </div>
                </CarouselItem>
                <CarouselItem className='basis-1/2'>
                    <div className='flex items-center justify-center border rounded-xl h-48'>
                        <span>Slide</span>
                    </div>
                </CarouselItem>
                <CarouselItem className='basis-1/2'>
                    <div className='flex items-center justify-center border rounded-xl h-48'>
                        <span>Slide</span>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselIndicators />
        </Carousel>
    ),
};