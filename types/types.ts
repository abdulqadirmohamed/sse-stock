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