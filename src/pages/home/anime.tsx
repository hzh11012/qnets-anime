import React, { useState } from 'react';
import AnimeCard from '@/components/custom/anime-card';
import { cn } from '@/lib/utils';
import { AnimeItem } from '@/apis/models/home-model';
import { getAnimeList } from '@/apis/home';
import { useRequest } from 'ahooks';

interface AnimeProps {
    title: string;
    icon: string;
    type: number;
}

const Anime: React.FC<AnimeProps> = ({ title, icon, type }) => {
    const [data, setData] = useState<AnimeItem[]>([]);

    const { loading } = useRequest(getAnimeList, {
        defaultParams: [
            {
                page: 1,
                pageSize: 16,
                type: [type],
                orderBy: 'year'
            }
        ],
        onSuccess(data) {
            const { rows } = data.data;
            setData(rows);
        }
    });

    const renderItem = (item: AnimeItem, index: number) => {
        const {
            id,
            name,
            remark,
            status,
            latest_video,
            description,
            cover_url
        } = item;

        const update_tip =
            status === 0 || !latest_video
                ? '即将上映'
                : status === 1
                  ? `更新至${latest_video?.episode}话`
                  : `全${latest_video?.episode}话`;

        return (
            <div
                key={index}
                className={cn(
                    'pl-0 basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 common:basis-[12.5%] [&:nth-child(n+16)]:hidden md:[&:nth-child(n+16)]:block lg:[&:nth-child(n+15)]:hidden xl:[&:nth-child(n+12)]:hidden common:[&:nth-child(n+12)]:block common:[&:nth-child(n+15)]:block'
                )}
            >
                <div className={cn('relative px-1 md:px-3')} role="list">
                    <AnimeCard
                        className="w-full"
                        title={name}
                        description={remark || description}
                        remark={update_tip}
                        cover_url={cover_url}
                        link={`/detail/${id}`}
                        loading={loading}
                    />
                </div>
            </div>
        );
    };

    return (
        !!data?.length && (
            <div>
                <div
                    className={cn(
                        'mt-6 mb-6 md:mt-16 xl:mt-20 flex flex-col md:flex-row gap-2 max-w-common xl:w-[calc(100%-10rem)] mx-auto md:w-[calc(100%-7.5rem)] w-[calc(100%-3rem)]'
                    )}
                >
                    <div className={cn('flex items-center w-full gap-2')}>
                        <img
                            className={cn('size-10 block')}
                            src={icon}
                            alt=""
                        />
                        <h3
                            className={cn(
                                'flex items-center text-xl md:2xl font-bold'
                            )}
                        >
                            {title}
                        </h3>
                    </div>
                </div>

                <div
                    className={cn(
                        'max-w-common xl:w-[calc(100%-10rem)] mx-auto md:w-[calc(100%-7.5rem)] w-[calc(100%-3rem)]'
                    )}
                >
                    <div className={cn('ml-0 flex flex-wrap w-full gap-y-6')}>
                        {data.map(renderItem)}
                    </div>
                </div>
            </div>
        )
    );
};
export default Anime;
