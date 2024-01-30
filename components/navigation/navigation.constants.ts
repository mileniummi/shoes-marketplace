export interface IRoute {
    name: string;
    href: string;
}

export const routes: IRoute[] = [
    {
        name: 'stats',
        href: '/stats',
    },
    {
        name: 'resources',
        href: '/resources',
    },
    {
        name: 'create',
        href: '/create',
    },
];
