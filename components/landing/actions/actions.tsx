import React from 'react';
import {Plus} from 'lucide-react';

import {Button} from '@/components/ui/button';
import {Typography} from '@/components/typography';

export const LandingActions = () => (
    <div className="flex flex-col items-center mt-36">
        <div className="flex gap-2">
            <Typography
                className="text-5xl font-semibold text-white"
                shadow="0px_2px_10px_rgba(255,255,255,0.40)"
            >
                Discover, Collect and sell
            </Typography>
            <Typography
                className="text-5xl font-semibold text-primary"
                shadow="0px_2px_10px_rgba(245,247,82,0.40)"
            >
                extraordinary NFTs
            </Typography>
        </div>
        <Typography className="mt-8">
            OpenLake is the world&apos;s first and largest NFT marketplace
        </Typography>
        <div className="flex align-middle gap-8 mt-12">
            <Button className="bg-gradient-yellow">
                EXPLORE
            </Button>
            <Button variant="outline">
                <Plus className="h-[1rem] w-[1rem] rotate-0 scale-100 mr-2.5" />
                CREATE
            </Button>
        </div>
    </div>
);
