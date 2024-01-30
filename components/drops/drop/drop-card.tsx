import React from 'react';
import Image from 'next/image';

import {IDrop} from '@/components/drops/drops.constant';
import {Card, CardContent} from '@/components/ui/card';
import {Typography} from '@/components/typography';
import {Badge} from '@/components/ui/badge';

import currency from '@/assets/currency.svg';
import fire from '@/assets/fire.svg';

export interface DropCardProps {
    drop: IDrop;
}

export const DropCard = ({
    drop: {
        name, image, floorPrice, isLive,
    },
}: DropCardProps) => (
    <Card className="w-fit rounded-2xl bg-card-gradient p-4 border-0 min-w-[370px]">
        <CardContent className="p-0">
            <div className="relative">
                <Image
                    className="rounded-2xl"
                    src={image}
                    alt="drop"
                    width={340}
                    height={507}
                    objectFit="cover"
                />
                {isLive && (
                    <Badge
                        variant="secondary"
                        className={'absolute top-3 right-3 text-primary bg-badge opacity-90 tracking-widest text-sm'
                            + ' py-1.5 px-2.5 rounded-lg flex gap-1.5 items-center'}
                    >
                        <Image
                            src={fire}
                            alt="fire"
                        />
                        <div>
                            LIVE
                        </div>
                    </Badge>
                )}
            </div>
            <Typography
                variant="title"
                className="text-2xl mt-6"
            >
                {name}
            </Typography>
            <div className="flex align-baseline gap-3">
                <Image
                    src={currency}
                    alt="currency"
                />
                <Typography className="mt-2 text-base mb-2">Floor price: {floorPrice}</Typography>
            </div>
        </CardContent>
    </Card>
);
