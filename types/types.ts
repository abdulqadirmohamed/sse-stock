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
    cover?: {
        formats?: {
            thumbnail?: {
                url: string;
            };
        };
    };
}