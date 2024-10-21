export type THeaderItems = {
    title: string
    path: string
    subMenuItems?: THeaderItems[]
}

export interface MenuItem {
    label: string;
    href?: string;
    subItems?: MenuItem[];
}

export type TMarket = {
    id: string;
    security_name: string;
    symbol: string;
    market: number;
    price: number;
    open: number;
    close: number;
    change: number;
    volume: number;
    slug: string
    isin: number
    address: string
    description: string
    logo?: {
        formats?: {
            thumbnail?: {
                url: string;
            };
            // Add other formats if needed
        };
    };
};


export type TBlog = {
    id: number
    title: string
    slug: string
    description: string
    createdAt: string,
    documentId: string
    publishedAt: string
    cover?: {
        formats?: {
            large?: {
                url: string;
            };
        };
    };
}
export type TEvent = {
    id: number
    title: string
    slug: string
    venue: string
    date: Date
    time: Date
    description: string
    createdAt: string,
    publishedAt: string
    cover?: {
        formats?: {
            small?: {
                url: string;
            };
        };
    };
}
export type TNominated = {
    id: number
    title: string
    name: string
    slug: string
    tel: string
    email: string
    contact_persons: string
    service_supported: string
    country_office: string
    language: string
    createdAt: string,
    publishedAt: string
    logo?: {
        formats?: {
            medium?: {
                url: string;
            };
        };
    };
}