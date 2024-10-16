import { MenuItem } from "@/types/types";

export const menuList: MenuItem[] = [
    {
        label: 'About us',
        href: 'about-us',
    },
    {
        label: 'Products and Services',
        subItems: [
            {
                label: 'Shares',
                href: '/shares'
            },
            {
                label: 'Bonds/Sukuk',
                href: '/bonds-sukuk'
            },
            {
                label: 'Commodities',
                href:'/commodities'
            },
        ]
    },
    {
        label: 'Listing',
        subItems: [
            {
                label: 'Listed Companies',
                href: '/listed-companies'
            },
            {
                label: 'Nominated Advisers',
                href: '/nominated-advisers'
            },
            {
                label: 'Membership',
                href: '/membership'
            },
        ],
    },
    {
        label: 'Market Statistics',
        subItems: [
            {
                label: 'Market Snapshot',
                href: '/market-snapshot'
            },
            {
                label: 'Market Data',
                href: '/market-data'
            },
        ],
    },
    {
        label: 'Media Centre',
        subItems: [
            {
                label: 'News',
                href: '/news'
            },
            {
                label: 'Publications',
                subItems: [
                    {
                        label: 'Reports',
                        href: '/reports'
                    },
                    {
                        label: 'Links',
                        href: '/links'
                    },
                ],
            },
            {
                label: 'Events',
                href: '/events'
            },
        ],
    },
];