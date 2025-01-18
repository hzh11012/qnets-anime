export interface BannerItem {
    id: number;
    aid: number;
    title: string;
    description: string;
    banner_url: string;
    is_collected: boolean;
    latest_video?: {
        id: number;
        episode: number;
        title: string;
    };
}

export interface CategoryItem {
    id: number;
    name: string;
    created_at: string;
}

export interface CategoryListRes {
    count: number;
    rows: CategoryItem[];
}

export interface AnimeGuideListReq {
    page?: number;
    pageSize?: number;
    order?: string;
    orderBy?: string;
    update_day?: number[];
}

export interface AnimeGuideItem {
    id: number;
    anime_id: number;
    title: string;
    description: string;
    update_day: number;
    update_time: string;
    status: number;
    cover_url: string;
    remark: string | null;
    latest_video?: {
        id: number;
        episode: number;
    };
    created_at: string;
}

export interface AnimeGuideListRes {
    count: number;
    rows: AnimeGuideItem[];
}

export interface AnimeHotItem {
    id: number;
    title: string;
    description: string;
    status: number;
    cover_url: string;
    remark: string | null;
    play_count: string;
    latest_video?: {
        id: number;
        episode: number;
    };
}

export interface AnimeListReq {
    page?: number;
    pageSize?: number;
    order?: string;
    orderBy?: string;
    keyword?: string;
    type?: number[];
    status?: number[];
    year?: number[];
    month?: number[];
    category?: number[];
}

export interface AnimeListRes {
    count: number;
    rows: AnimeItem[];
}

export interface AnimeItem {
    id: number;
    series_id: number;
    name: string;
    description: string;
    cover_url: string;
    banner_url: string;
    season: number;
    season_name: string | null;
    created_at: string;
    remark: string | null;
    status: number;
    type: number;
    director: string | null;
    cv: string | null;
    year: number;
    month: number;
    is_swiper: number;
    is_anime_guide: number;
    categories: {
        id: number;
        name: string;
    }[];
    latest_video: {
        id: number;
        episode: number;
    };
}
