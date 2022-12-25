
    export interface Item {
        key: string;
        value: string;
    }

    export interface MenuItems {
        items: Item[];
    }

    export interface NavBarProps {
        locale?: string;
        locales?: string[];
        menuItems: MenuItems;
    }
