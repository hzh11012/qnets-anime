import React, { useState } from 'react';
import AnimeCard from '@/components/custom/anime-card';
import { cn } from '@/lib/utils';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '@/components/ui/carousel';
import { useNavigate } from 'react-router-dom';
import { AnimeHotItem } from '@/apis/models/home-model';
import { getAnimeHotList } from '@/apis/home';
import { useRequest } from 'ahooks';

const AnimeHot: React.FC = () => {
    const [data, setData] = useState<AnimeHotItem[]>([]);
    const navigate = useNavigate();

    const { loading } = useRequest(getAnimeHotList, {
        onSuccess(data) {
            setData(data.data);
        }
    });
    return (
        <div>
            <div
                className={cn(
                    'mt-6 mb-6 md:mt-16 xl:mt-20 flex flex-col md:flex-row gap-2 max-w-common xl:w-[calc(100%-10rem)] mx-auto md:w-[calc(100%-7.5rem)] w-[calc(100%-3rem)]'
                )}
            >
                <div className={cn('flex items-center w-full gap-2')}>
                    <img
                        className={cn('size-10 block')}
                        src="./anime-hot-icon.png"
                        alt=""
                    />
                    <h3
                        className={cn(
                            'flex items-center text-xl md:2xl font-bold cursor-pointer'
                        )}
                        onClick={() => navigate('/rank')}
                    >
                        番剧热播榜
                    </h3>
                </div>
            </div>
            <div className={cn('relative w-full overflow-hidden')}>
                <div
                    className={cn(
                        'max-w-common xl:w-[calc(100%-10rem)] mx-auto md:w-[calc(100%-7.5rem)] w-[calc(100%-3rem)]'
                    )}
                >
                    <Carousel
                        className={cn('relative Carousel')}
                        opts={{
                            loop: false,
                            align: 'start',
                            slidesToScroll: 'auto',
                            watchDrag: false
                        }}
                    >
                        <CarouselContent
                            className={cn('ml-0 flex flex-nowrap w-full')}
                        >
                            {data.map((item, index) => {
                                const {
                                    id,
                                    title,
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
                                    <CarouselItem
                                        key={index}
                                        className={cn(
                                            'pl-0 basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 common:basis-[12.5%]'
                                        )}
                                    >
                                        <div
                                            className={cn(
                                                'relative px-1 md:px-3'
                                            )}
                                        >
                                            <AnimeCard
                                                className="w-full"
                                                title={title}
                                                description={
                                                    remark || description
                                                }
                                                remark={update_tip}
                                                cover_url={cover_url}
                                                link={`/detail/${id}`}
                                                loading={loading}
                                            />
                                        </div>
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>
                        <CarouselPrevious
                            variant="secondary"
                            className={cn(
                                'z-10 -left-3 md:-left-1 top-[calc(50%-24px)] -translate-y-1/2'
                            )}
                        />
                        <CarouselNext
                            variant="secondary"
                            className={cn(
                                'z-10 -right-3 md:-right-1 top-[calc(50%-24px)] -translate-y-1/2'
                            )}
                        />
                    </Carousel>
                </div>
            </div>
        </div>
    );
};
export default AnimeHot;
