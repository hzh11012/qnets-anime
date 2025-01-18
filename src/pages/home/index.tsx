import React from 'react';
import { cn } from '@/lib/utils';
import { BannerItem, CategoryItem } from '@/apis/models/home-model';
import { useLoaderData } from 'react-router-dom';
import Banner from '@/pages/home/banner';
import ModCard from '@/pages/home/mod-card';
import AnimeGuide from '@/pages/home/anime-guide';
import AnimeHot from '@/pages/home/anime-hot';
import Anime from '@/pages/home/anime';
import { userStore } from '@/store/user';

const Home: React.FC = () => {
    const {
        bannerList,
        categoryList
    }: {
        bannerList: BannerItem[];
        categoryList: CategoryItem[];
    } = useLoaderData();

    const userInfo = userStore(state => state.userInfo);

    const getYearsList = () => {
        const currentYear = new Date().getFullYear();
        const years = [];
        for (let i = 0; i < 8; i++) {
            years.push({
                label: `${currentYear - i}`,
                link: `/search?year=${currentYear - i}`
            });
        }
        return years;
    };

    return (
        <div className={cn('-mt-14 mb-8')}>
            <Banner bannerList={bannerList} />
            <div
                className={cn(
                    'flex flex-col gap-6 md:gap-16 xl:gap-20 mt-6 md:mt-16 xl:mt-20 max-w-common xl:w-[calc(100%-10rem)] mx-auto md:w-[calc(100%-7.5rem)] w-[calc(100%-3rem)]'
                )}
            >
                <div className={cn('flex flex-wrap gap-6')}>
                    <ModCard
                        className={cn(
                            'flex-1 bg-search-index bg-no-repeat bg-contain bg-right'
                        )}
                        title={{ label: '番剧索引', link: '/search' }}
                        list={[
                            {
                                label: '追番人数',
                                link: '/search?order=3'
                            },
                            {
                                label: '最高评分',
                                link: '/search?order=4'
                            },
                            {
                                label: '更新时间',
                                link: '/search?order=0'
                            },
                            {
                                label: '播放数量',
                                link: '/search?order=5'
                            }
                        ]}
                    />
                    <ModCard
                        className={cn(
                            'flex-1 bg-search-category bg-no-repeat bg-contain bg-right md:block hidden'
                        )}
                        title={{ label: '类型风格', link: '/search' }}
                        list={categoryList.map(item => {
                            return {
                                label: item.name,
                                link: `/search?category_id=${item.id}`
                            };
                        })}
                    />
                    <ModCard
                        className={cn(
                            'flex-1 bg-search-time bg-no-repeat bg-contain bg-right md:block hidden'
                        )}
                        title={{ label: '首播时间', link: '/search' }}
                        list={getYearsList()}
                    />
                    <ModCard
                        className={cn(
                            'flex-1 bg-search-hot bg-no-repeat bg-contain bg-right xl:block hidden'
                        )}
                        title={{ label: '热搜', link: '/search' }}
                        list={[]}
                    />
                </div>
            </div>
            <AnimeGuide />
            <AnimeHot />
            <Anime title="日番" icon="./anime-jap-icon.png" type={1} />
            <Anime title="剧场版" icon="./anime-movie-icon.png" type={0} />
            <Anime title="国番" icon="./anime-chn-icon.png" type={3} />
            <Anime title="美番" icon="./anime-eng-icon.png" type={2} />
            {userInfo.scope > 1 && (
                <Anime title="里番" icon="./anime-hentai-icon.png" type={4} />
            )}
        </div>
    );
};

export default Home;
