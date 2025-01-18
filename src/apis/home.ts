import { HttpClient } from '@/lib/request';
import {
    BannerItem,
    CategoryListRes,
    AnimeGuideListReq,
    AnimeGuideListRes,
    AnimeHotItem,
    AnimeListReq,
    AnimeListRes
} from '@/apis/models/home-model';

const prefix = '/v1/api';

export const getBannerList = () => {
    return HttpClient.get<BannerItem[]>(`${prefix}/anime_banner/list`);
};

export const collectionCreate = (params: { id: number }) => {
    return HttpClient.post(`${prefix}/collection/create`, params);
};

export const collectionDelete = (params: { id: number }) => {
    return HttpClient.post(`${prefix}/collection/delete`, params);
};

export const getCategoryList = () => {
    return HttpClient.get<CategoryListRes>(`${prefix}/category/list`);
};

export const getAnimeGuideList = (params: AnimeGuideListReq) => {
    return HttpClient.post<AnimeGuideListRes>(
        `${prefix}/anime_guide/list`,
        params
    );
};

export const getAnimeHotList = (params?: { type: string }) => {
    return HttpClient.post<AnimeHotItem[]>(`${prefix}/anime/hot/list`, params);
};

export const getAnimeList = (params: AnimeListReq) => {
    return HttpClient.post<AnimeListRes>(`${prefix}/anime/list`, params);
};
