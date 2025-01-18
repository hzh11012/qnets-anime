import React, { useState } from 'react';
import AnimeGuideCard from '@/pages/home/anime-guide-card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { DAY_MAP } from '@/lib/consts';
import { useRequest } from 'ahooks';
import { getAnimeGuideList } from '@/apis/home';
import { AnimeGuideItem } from '@/apis/models/home-model';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '@/components/ui/carousel';
import { useNavigate } from 'react-router-dom';

const AnimeGuide: React.FC = () => {
    const [day, setDay] = useState(new Date().getDay());
    const [data, setData] = useState<AnimeGuideItem[]>([]);
    const navigate = useNavigate();

    const { run, loading } = useRequest(getAnimeGuideList, {
        defaultParams: [
            {
                page: 1,
                pageSize: 8,
                update_day: [day],
                order: 'ASC',
                orderBy: 'update_time'
            }
        ],
        onSuccess(data) {
            const { rows } = data.data;
            setData(rows);
        },
        refreshDeps: [day],
        refreshDepsAction: () => {
            run({
                page: 1,
                pageSize: 8,
                update_day: [day],
                order: 'ASC',
                orderBy: 'update_time'
            });
        }
    });

    return (
        <div>
            <div
                className={cn(
                    'mt-6 md:mt-16 xl:mt-20 flex flex-col md:flex-row gap-2 max-w-common xl:w-[calc(100%-10rem)] mx-auto md:w-[calc(100%-7.5rem)] w-[calc(100%-3rem)]'
                )}
            >
                <div className={cn('flex items-center w-full gap-2')}>
                    <img
                        className={cn('size-10 block')}
                        src="./anime-guide-icon.png"
                        alt=""
                    />
                    <h3
                        className={cn(
                            'flex items-center text-xl md:2xl font-bold gap-1 cursor-pointer'
                        )}
                        onClick={() => navigate('/timeline')}
                    >
                        新番时间表
                    </h3>
                </div>
                <Tabs
                    className={cn('overflow-auto md:overflow-visible')}
                    defaultValue={`${day}`}
                    onValueChange={value => setDay(parseInt(value))}
                >
                    <TabsList className="bg-transparent p-0">
                        {[1, 2, 3, 4, 5, 6, 0].map(item => {
                            return (
                                <TabsTrigger
                                    key={item}
                                    value={`${item}`}
                                    className="data-[state=active]:bg-secondary data-[state=active]:shadow-none"
                                >
                                    {DAY_MAP[item]}
                                </TabsTrigger>
                            );
                        })}
                    </TabsList>
                </Tabs>
            </div>
            <div className={cn('relative w-full overflow-hidden')}>
                <div
                    className={cn(
                        'absolute left-0 bottom-0 border-t-2 border-solid border-[#e3efcd] h-[calc(100%-2rem)] xl:w-[calc(50%-55.625rem)] xl:min-w-20 md:w-[3.75rem] w-6',
                        {
                            'border-anime-guide-1 bg-anime-guide-l-1':
                                day === 1,
                            'border-anime-guide-2 bg-anime-guide-l-2':
                                day === 2,
                            'border-anime-guide-3 bg-anime-guide-l-3':
                                day === 3,
                            'border-anime-guide-4 bg-anime-guide-l-4':
                                day === 4,
                            'border-anime-guide-5 bg-anime-guide-l-5':
                                day === 5,
                            'border-anime-guide-6 bg-anime-guide-l-6':
                                day === 6,
                            'border-anime-guide-7 bg-anime-guide-l-7': day === 0
                        }
                    )}
                ></div>
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
                                    anime_id,
                                    title,
                                    remark,
                                    status,
                                    update_day,
                                    update_time,
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
                                                'relative mt-8 pt-5 px-1 md:px-3 border-t-2 border-solid',
                                                {
                                                    'border-anime-guide-1 bg-anime-guide-l-1':
                                                        day === 1,
                                                    'border-anime-guide-2 bg-anime-guide-l-2':
                                                        day === 2,
                                                    'border-anime-guide-3 bg-anime-guide-l-3':
                                                        day === 3,
                                                    'border-anime-guide-4 bg-anime-guide-l-4':
                                                        day === 4,
                                                    'border-anime-guide-5 bg-anime-guide-l-5':
                                                        day === 5,
                                                    'border-anime-guide-6 bg-anime-guide-l-6':
                                                        day === 6,
                                                    'border-anime-guide-7 bg-anime-guide-l-7':
                                                        day === 0
                                                }
                                            )}
                                        >
                                            <AnimeGuideCard
                                                className="w-full"
                                                title={title}
                                                description={
                                                    remark || description
                                                }
                                                update_day={update_day}
                                                update_time={update_time}
                                                remark={update_tip}
                                                cover_url={cover_url}
                                                link={`/detail/${anime_id}`}
                                                loading={loading}
                                            />
                                        </div>
                                    </CarouselItem>
                                );
                            })}
                            <CarouselItem
                                className={cn(
                                    'pl-0 flex-1 mt-8 pt-5 border-t-2 border-solid',
                                    {
                                        'border-anime-guide-1 bg-anime-guide-l-1':
                                            day === 1,
                                        'border-anime-guide-2 bg-anime-guide-l-2':
                                            day === 2,
                                        'border-anime-guide-3 bg-anime-guide-l-3':
                                            day === 3,
                                        'border-anime-guide-4 bg-anime-guide-l-4':
                                            day === 4,
                                        'border-anime-guide-5 bg-anime-guide-l-5':
                                            day === 5,
                                        'border-anime-guide-6 bg-anime-guide-l-6':
                                            day === 6,
                                        'border-anime-guide-7 bg-anime-guide-l-7':
                                            day === 0
                                    }
                                )}
                            ></CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious
                            variant="secondary"
                            className={cn('z-10 -left-3 md:-left-1')}
                        />
                        <CarouselNext
                            variant="secondary"
                            className={cn('z-10 -right-3 md:-right-1')}
                        />
                    </Carousel>
                </div>
                <div
                    className={cn(
                        'absolute right-0 bottom-0 border-t-2 border-solid h-[calc(100%-2rem)] xl:w-[calc(50%-55.625rem)] xl:min-w-20 md:w-[3.75rem] w-6',
                        {
                            'border-anime-guide-1 bg-anime-guide-l-1':
                                day === 1,
                            'border-anime-guide-2 bg-anime-guide-l-2':
                                day === 2,
                            'border-anime-guide-3 bg-anime-guide-l-3':
                                day === 3,
                            'border-anime-guide-4 bg-anime-guide-l-4':
                                day === 4,
                            'border-anime-guide-5 bg-anime-guide-l-5':
                                day === 5,
                            'border-anime-guide-6 bg-anime-guide-l-6':
                                day === 6,
                            'border-anime-guide-7 bg-anime-guide-l-7': day === 0
                        }
                    )}
                ></div>
            </div>
        </div>
    );
};
export default AnimeGuide;
