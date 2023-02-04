
export interface Item {
    key: string;
    value: string;
}

export interface MenuItems {
    items: Item[];
}


export interface GeneralSiteProps {
    locale?: string;
    locales?: string[];
    menuItems?: string[];
    title?: string;
    pageName?: string;
}

export interface Fallback {
    item: [string, GeneralSiteProps]
}

export const generalSiteProps: GeneralSiteProps = {
    menuItems: [
        "home",
        "concerts",
        "lectures",
        "workshops",
        "book",
        "bio",
        "videos",
        "gallery",
        "communities",
        "news",
        "contact"
    ],
}
