import React from 'react';
import Banner from '@/components/custom/banner';
import { cn } from '@/lib/utils';
import { BannerItem } from '@/apis/models/home-model';
import { useLoaderData } from 'react-router-dom';

const Home: React.FC = () => {
    const { bannerList }: { bannerList: BannerItem[] } = useLoaderData();

    return (
        <div className={cn('-mt-14')}>
            <Banner bannerList={bannerList} />
        </div>
    );
};

export default Home;
