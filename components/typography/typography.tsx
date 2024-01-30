import React from 'react';

import {cn} from '@/lib/utils';
import {RalewayFont} from '@/app/fonts';

export interface TypographyProps {
    children: React.ReactNode;
    variant?: 'title' | 'subtitle' | 'body' | 'caption';
    className?: string;
    shadow?: string;
}

export const Typography = ({
    children, variant = 'body', className, shadow,
}: TypographyProps) => {
    switch (variant) {
    case 'title':
        return (
            <h1 className={cn(
                'text-5xl font-semibold',
                shadow ? `[text-shadow:${shadow.replaceAll(' ', '_')}]` : '',
                RalewayFont.className,
                className,
            )}
            >
                {children}
            </h1>
        );
    default:
        return (
            <p className={cn(
                'text-secondary',
                shadow ? `[text-shadow:${shadow.replaceAll(' ', '_')}]` : '',
                className,
            )}
            >
                {children}
            </p>
        );
    }
};
