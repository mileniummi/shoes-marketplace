import {Roboto} from 'next/font/google';
import {ReactNode} from 'react';

import type {Metadata} from 'next';
import './globals.css';

import {ThemeProvider} from '@/components/theme-provider';
import {Navbar} from '@/components/navigation/navbar';
import {cn} from '@/lib/utils';

const roboto = Roboto({subsets: ['latin', 'cyrillic'], weight: ['100', '300', '400', '500', '700', '900']});

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

// eslint-disable-next-line import/no-default-export
export default function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <html lang="en">
            <body className={cn(roboto.className, 'bg-main-gradient')}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <main className="flex flex-col min-h-screen px-20">
                        <Navbar />
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
