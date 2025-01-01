import { HttpClient } from '@/lib/request';
import { BannerItem } from '@/apis/models/home-model';

const prefix = '/v1/api/';

export const getBannerList = () => {
    return HttpClient.get<BannerItem[]>(`${prefix}/banner/list`);
};

export const collectionCreate = (params: { id: number }) => {
    return HttpClient.post(`${prefix}/collection/create`, params);
};

export const collectionDelete = (params: { id: number }) => {
    return HttpClient.post(`${prefix}/collection/delete`, params);
};
