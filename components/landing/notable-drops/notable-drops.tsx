import React from 'react';

import {IDrop} from '@/components/drops/drops.constant';
import ragnarok from '@/assets/ragnarok.png';
import relationship from '@/assets/relationship.png';
import {DropCard} from '@/components/drops';
import {Typography} from '@/components/typography';

const drops: IDrop[] = [
    {
        id: '1',
        name: 'Ragnarok',
        floorPrice: 0.51,
        image: ragnarok,
        isLive: true,
    },
    {
        id: '7',
        name: 'Relationship',
        floorPrice: 1.54,
        image: relationship,
        isLive: false,
    },
    {
        id: '7',
        name: 'Ragnarok',
        floorPrice: 0.51,
        image: ragnarok,
        isLive: true,
    },
    {
        id: '6',
        name: 'Ragnarok',
        floorPrice: 0.51,
        image: ragnarok,
        isLive: true,
    },
    {
        id: '5',
        name: 'Ragnarok',
        floorPrice: 0.51,
        image: ragnarok,
        isLive: true,
    },
    {
        id: '4',
        name: 'Ragnarok',
        floorPrice: 0.51,
        image: ragnarok,
        isLive: true,
    },
    {
        id: '3',
        name: 'Ragnarok',
        floorPrice: 0.51,
        image: ragnarok,
        isLive: true,
    },
    {
        id: '2',
        name: 'Ragnarok',
        floorPrice: 0.51,
        image: ragnarok,
        isLive: true,
    },
];

export const NotableDrops = () => (
    <div className="mt-32 pb-11">
        <div className="flex gap-2 pb-11">
            <Typography
                className="text-5xl font-semibold text-white"
                shadow="0px_2px_10px_rgba(255,255,255,0.40)"
            >
                Notable
            </Typography>
            <Typography
                className="text-5xl font-semibold text-primary"
                shadow="0px_2px_10px_rgba(245,247,82,0.40)"
            >
                drops
            </Typography>
        </div>
        <div className="flex gap-5 overflow-x-auto pb-12">
            {
                drops.map(drop => (
                    <DropCard
                        drop={drop}
                        key={drop.id}
                    />
                ))
            }
        </div>
    </div>
);
