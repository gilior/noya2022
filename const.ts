
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
        menuItems: MenuItems;
        pageName?:string;
    }

    export interface Fallback{
       item: [string,GeneralSiteProps]
    }
