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
