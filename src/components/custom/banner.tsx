import React, { useRef, useState } from 'react';
import Hashids from 'hashids';
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';
import { BannerItem } from '@/apis/models/home-model';
import { Button } from '@/components/ui/button';
import { CirclePlay, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { collectionCreate, collectionDelete } from '@/apis/home';

interface BannerProps {
    className?: string;
    bannerList: BannerItem[];
}

const BannerItemWrapper: React.FC<BannerItem> = ({
    aid,
    title,
    description,
    banner_url,
    is_collected,
    latest_video
}) => {
    const hashids = new Hashids('', 10);
    const navigate = useNavigate();
    const [collected, setCollected] = useState<boolean>(is_collected);

    const handlePlay = () => {
        if (!latest_video) return;
        navigate(`/play/${hashids.encode(latest_video.id)}`);
    };

    const handleDetail = () => {
        navigate(`/detail/${hashids.encode(aid)}`);
    };

    const handleCollect = async () => {
        const action = collected ? collectionDelete : collectionCreate;
        const { code } = await action({ id: aid });
        if (code === 200) {
            setCollected(!collected);
        }
    };

    return (
        <CarouselItem className={cn('pl-0')}>
            <div className={cn('md:block hidden')}>
                <AspectRatio ratio={2 / 1} asChild>
                    <div
                        className={cn('w-full h-full bg-cover bg-center')}
                        style={{
                            backgroundImage: `url("${banner_url}")`
                        }}
                    >
                        <div
                            className={cn(
                                'absolute bottom-0 w-full bg-banner pt-64'
                            )}
                        >
                            <div className="grid gap-6 max-w-common xl:w-[calc(100%-10rem)] mx-auto w-[calc(100%-7.5rem)]">
                                <div
                                    className={cn(
                                        'text-4xl common:text-5xl font-bold line-clamp-1 xl:text-[2.5rem]'
                                    )}
                                >
                                    {title}
                                </div>
                                <div
                                    className={cn(
                                        'text-base max-w-[45rem] line-clamp-2'
                                    )}
                                >
                                    {description}
                                </div>
                                <div
                                    className={cn(
                                        'flex items-center justify-between mt-2'
                                    )}
                                >
                                    <div className={cn('flex gap-2')}>
                                        <Button
                                            className={cn(
                                                'h-10 bg-theme-pink hover:bg-theme-pink/80 font-semibold text-white gap-2'
                                            )}
                                            disabled={!latest_video}
                                            onClick={handlePlay}
                                        >
                                            {latest_video ? (
                                                <>
                                                    <CirclePlay
                                                        size={16}
                                                        strokeWidth={3}
                                                    />
                                                    立即播放
                                                </>
                                            ) : (
                                                '即将上映'
                                            )}
                                        </Button>

                                        {latest_video && (
                                            <Button
                                                className={cn(
                                                    'h-10 bg-theme-blue hover:bg-theme-blue/80 font-semibold text-white'
                                                )}
                                                onClick={handleDetail}
                                            >
                                                影片详情
                                            </Button>
                                        )}
                                    </div>
                                    <Button
                                        size="icon"
                                        className={cn(
                                            'size-10 bg-foreground/25 hover:bg-foreground/25 font-medium text-white'
                                        )}
                                        onClick={handleCollect}
                                    >
                                        <Heart
                                            size={16}
                                            strokeWidth={3}
                                            className={cn({
                                                'fill-theme-pink': collected,
                                                'text-theme-pink': collected
                                            })}
                                        />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </AspectRatio>
            </div>

            <div className={cn('md:hidden block')}>
                <AspectRatio ratio={1.2 / 1} asChild>
                    <div
                        className={cn('w-full h-full bg-cover bg-center')}
                        style={{
                            backgroundImage: `url("${banner_url}")`
                        }}
                    >
                        <div
                            className={cn(
                                'absolute grid bottom-0 w-full bg-banner p-4 pt-32 gap-2'
                            )}
                        >
                            <div
                                className={cn('text-xl font-bold line-clamp-1')}
                            >
                                {title}
                            </div>
                            <div className={cn('text-sm line-clamp-2')}>
                                {description}
                            </div>
                            <div
                                className={cn(
                                    'flex items-center justify-between mt-2'
                                )}
                            >
                                <div className={cn('flex gap-2')}>
                                    <Button
                                        className={cn(
                                            'bg-theme-pink hover:bg-theme-pink/80 font-semibold text-white gap-2'
                                        )}
                                        disabled={!latest_video}
                                        onClick={handlePlay}
                                    >
                                        {latest_video ? (
                                            <>
                                                <CirclePlay
                                                    size={16}
                                                    strokeWidth={3}
                                                />
                                                立即播放
                                            </>
                                        ) : (
                                            '即将上映'
                                        )}
                                    </Button>

                                    {latest_video && (
                                        <Button
                                            className={cn(
                                                'bg-theme-blue hover:bg-theme-blue/80 font-semibold text-white'
                                            )}
                                            onClick={handleDetail}
                                        >
                                            影片详情
                                        </Button>
                                    )}
                                </div>
                                <Button
                                    size="icon"
                                    className={cn(
                                        'bg-foreground/25 hover:bg-foreground/25 font-medium text-white'
                                    )}
                                    onClick={handleCollect}
                                >
                                    <Heart
                                        size={16}
                                        strokeWidth={3}
                                        className={cn({
                                            'fill-theme-pink': collected,
                                            'text-theme-pink': collected
                                        })}
                                    />
                                </Button>
                            </div>
                        </div>
                    </div>
                </AspectRatio>
            </div>
        </CarouselItem>
    );
};

const Banner: React.FC<BannerProps> = ({ className, bannerList }) => {
    const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));

    return (
        <div className={cn('relative w-full h-auto', className)}>
            <Carousel
                className={cn('relative')}
                opts={{ loop: true }}
                plugins={[plugin.current]}
            >
                <CarouselContent className={cn('ml-0')}>
                    {bannerList.map(item => (
                        <BannerItemWrapper key={item.id} {...item} />
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default Banner;
