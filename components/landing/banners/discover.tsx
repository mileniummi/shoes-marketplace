'use client';

import React from 'react';
import Image from 'next/image';

import {Button} from '@/components/ui/button';
import discover from '@/assets/banners/digital-avatar.png';
import {Typography} from '@/components/typography';

export const DiscoverBanner = () => (
    <div className="flex gap-4 min-h-[511px]">
        <div className="mt-16 ml-20 mb-8 w-1/3">
            <Typography
                variant="title"
                shadow="0px_2px_10px_rgba(255,255,255,0.40)"
            >
                Discover the Exclusive NFT Collection
            </Typography>
            <Typography className="mt-8">
                Click My Collections and set up your collection. Add social links,
                a description, profile & banner images, and set a secondary sales fee.
            </Typography>
            <Button
                className="mt-10 bg-slate-900"
                variant="outline"
            >
                LEARN MORE
            </Button>
        </div>
        <Image
            src={discover}
            priority
            alt="discover"
            className="w-2/3"
            objectFit="cover"
        />
    </div>
);
