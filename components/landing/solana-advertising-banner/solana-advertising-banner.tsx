import React from 'react';
import Image from 'next/image';
import {Instagram, Twitter} from 'lucide-react';

import background from '@/assets/banners/advertising-background.png';
import {Button} from '@/components/ui/button';
import {Typography} from '@/components/typography';

import telegramIcon from '@/assets/telegram.svg';
import discordIcon from '@/assets/discord.svg';

export const SolanaAdvertisingBanner = () => (
    <div className="mt-32 bg-gradient-yellow-light rounded-lg flex justify-between max-h-[275px]">
        <div className="py-16 px-24 flex flex-col gap-8">
            <Typography
                variant="title"
                className="text-black text-4xl"
            >
                Solana is in beta on OpenLake
            </Typography>
            <div className="flex gap-4 items-center">
                <Button className="bg-black text-white rounded-lg hover:bg-white hover:text-black">
                    EXPLORE
                </Button>
                <Button
                    size="icon"
                    className="bg-transparent border-black border-2 rounded-lg max-w-[55px]"
                >
                    <Image
                        src={telegramIcon}
                        alt="telegram"
                        width={20}
                        height={20}
                    />
                </Button>
                <Button
                    size="icon"
                    className="bg-transparent border-black border-2 rounded-lg"
                >
                    <Image
                        src={discordIcon}
                        alt="discord"
                        width={20}
                        height={20}
                    />
                </Button>
                <Button
                    size="icon"
                    className="bg-transparent border-black border-2 rounded-lg"
                >
                    <Twitter />
                </Button>
                <Button
                    size="icon"
                    className="bg-transparent border-black border-2 rounded-lg"
                >
                    <Instagram />
                </Button>
            </div>
        </div>
        <Image
            height={275}
            src={background}
            alt="background"
        />
    </div>
);
