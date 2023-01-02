
    export interface Item {
        key: string;
        value: string;
    }

    export interface GeneralSiteProps {
        locale?: string;
        locales?: string[];
        menuItems: Item[];
        pageName?:string;
    }
