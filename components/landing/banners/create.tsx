import React from 'react';
import Image from 'next/image';

import {Button} from '@/components/ui/button';
import create from '@/assets/banners/create.jpg';
import {Typography} from '@/components/typography';

export const CreateBanner = () => (
    <div className="flex gap-4 min-h-[511px]">
        <div className="mt-16 ml-20 mb-8 w-1/3">
            <Typography
                variant="title"
                shadow="0px_2px_10px_rgba(255,255,255,0.40)"
            >
                Create And Sell Your NFTs
            </Typography>
            <Typography className="mt-8">
                Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to
                sell your NFTs, and we help you sell them!
            </Typography>
            <Button
                className="mt-10 bg-slate-900"
                variant="outline"
            >
                LEARN MORE
            </Button>
        </div>
        <Image
            src={create}
            alt="create"
            className="w-2/3"
            objectFit="cover"
        />
    </div>
);
