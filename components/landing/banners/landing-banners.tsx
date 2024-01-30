'use client';

import React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import {
    Carousel, CarouselApi, CarouselContent, CarouselItem,
} from '@/components/ui/carousel';
import {DiscoverBanner} from '@/components/landing/banners/discover';
import {CreateBanner} from '@/components/landing/banners/create';
import {cn} from '@/lib/utils';

export const Banners = () => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <div className="flex flex-col items-center">
            <Carousel
                setApi={setApi}
                plugins={[Autoplay({delay: 3000, stopOnLastSnap: false})]}
                className={'max-w-[1788px] max-h-[511px] mx-auto mt-16 mb-8 overflow-hidden rounded-2xl white'
                    + ' bg-slate-900 '}
            >
                <CarouselContent>
                    <CarouselItem><DiscoverBanner /></CarouselItem>
                    <CarouselItem><CreateBanner /></CarouselItem>
                </CarouselContent>
            </Carousel>
            <div className="flex gap-2">
                {Array.from({length: count}).map((_, index) => (
                    <div
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        className={cn(
                            'w-[9px] h-[9px] rounded-sm',
                            current === index + 1
                                ? 'bg-primary'
                                : 'bg-slate-900',
                        )}
                    />
                ))}
            </div>
        </div>
    );
};
