
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
    youtubeObj?: YoutubeObj;
    isMobile?:boolean
}

export interface Fallback {
    item: [string, GeneralSiteProps]
}


//youtube
export interface Default {
    url: string;
    width: number;
    height: number;
}

export interface Medium {
    url: string;
    width: number;
    height: number;
}

export interface High {
    url: string;
    width: number;
    height: number;
}

export interface Standard {
    url: string;
    width: number;
    height: number;
}

export interface Maxres {
    url: string;
    width: number;
    height: number;
}

export interface Thumbnails {
    default: Default;
    medium: Medium;
    high: High;
    standard: Standard;
    maxres: Maxres;
}

export interface ResourceId {
    kind: string;
    videoId: string;
}

export interface Snippet {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    playlistId: string;
    position: number;
    resourceId: ResourceId;
    videoOwnerChannelTitle: string;
    videoOwnerChannelId: string;
}

export interface YoutubeItem {
    kind: string;
    etag: string;
    id: string;
    snippet: Snippet;
}

export interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
}

export interface YoutubeObj {
    kind: string;
    etag: string;
    items: YoutubeItem[];
    pageInfo: PageInfo;
}

//end od youtube

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

export const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

