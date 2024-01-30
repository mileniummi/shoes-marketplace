'use client';

import Link from 'next/link';
import Image from 'next/image';
import {LayoutGrid} from 'lucide-react';

import {
    NavigationMenu,
    NavigationMenuItem, NavigationMenuLink,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {routes} from '@/components/navigation/navigation.constants';
import {Button} from '@/components/ui/button';
import {cn} from '@/lib/utils';
import logo from '@/assets/logo.png';

export const Navbar = () => (
    <div className="flex px-6 py-4 justify-between w-full">
        <div className="flex gap-3 items-center">
            <Image
                priority
                src={logo}
                alt="logo"
            />
            OpenLake
        </div>
        <Button className="bg-gradient-yellow">
            <LayoutGrid className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 mr-2.5" /> <p>EXPLORE</p>
        </Button>
        <NavigationMenu>
            {routes.map(({name, href}) => (
                <NavigationMenuItem key={name}>
                    <Link
                        href={href}
                        legacyBehavior
                        passHref
                    >
                        <NavigationMenuLink
                            className={cn(navigationMenuTriggerStyle(), 'text-secondary-color uppercase')}
                        >
                            {name}
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            ))}
        </NavigationMenu>
    </div>
);
