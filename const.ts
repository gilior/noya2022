
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
    title?: string;
    pageName?: string;
}

export interface Fallback {
    item: [string, GeneralSiteProps]
}

export const enDevGeneralSiteProps: GeneralSiteProps = {
    menuItems: {
        items: [

            { "key": "home", "value": "Home" },
            { "key": "concerts", "value": "Concerts" },
            { "key": "lectures", "value": "Lectures" },
            { "key": "workshops", "value": "Workshops" },
            { "key": "book", "value": "Book" },
            { "key": "bio", "value": "Bio" },
            { "key": "videos", "value": "Videos" },
            { "key": "gallery", "value": "Gallery" },
            { "key": "communities", "value": "Communities" },
            { "key": "news", "value": "News" },
            { "key": "contact", "value": "Contact" }
        ],
    },
    title: "Noya Schleien"
}

export const hebDevGeneralSiteProps: GeneralSiteProps = {
       menuItems: {
        items: [
            { "key": "home", "value": "בית" },
            { "key": "concerts", "value": "קונצרטים" },
            { "key": "lectures", "value": "הרצאות" },
            { "key": "workshops", "value": "סדנאות" },
            { "key": "book", "value": "ספר" },
            { "key": "bio", "value": "ביו" },
            { "key": "videos", "value": "וידאו" },
            { "key": "gallery", "value": "גלריה" },
            { "key": "communities", "value": "קהילות" },
            { "key": "news", "value": "חדשת" },
            { "key": "contact", "value": "קשר" }
        ],
    },
    title: "נויה שליין"
}

export const getPropsByLocale=(locale:string|undefined)=>{
    switch(locale){
        case 'en':
            return enDevGeneralSiteProps;
        case 'he':
            return hebDevGeneralSiteProps;
        default:
            return enDevGeneralSiteProps;
    }
}
