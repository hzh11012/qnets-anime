import React from 'react';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Skeleton } from '@/components/ui/skeleton';

interface AnimeCardProps {
    className?: string;
    title: string;
    remark: string;
    description: string;
    cover_url: string;
    link: string;
    loading?: boolean;
}

const AnimeCard: React.FC<AnimeCardProps> = ({
    className,
    title,
    remark,
    description,
    link,
    cover_url,
    loading
}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(link);
    };

    return (
        <div className={cn('space-y-2 w-48 group', className)}>
            <AspectRatio
                ratio={3 / 4}
                className={cn(
                    'rounded-lg overflow-hidden cursor-pointer before:absolute before:w-full before:h-20 before:z-10 before:bottom-0',
                    {
                        'before:bg-anime-card': !loading
                    }
                )}
                title={title}
                onClick={handleClick}
            >
                {loading ? (
                    <Skeleton className={cn('size-full')} />
                ) : (
                    <>
                        <div
                            className={cn(
                                'relative w-full h-full bg-cover bg-center brightness-90 transition ease-in-out duration-300 scale-100 group-hover:scale-125 before:transition before:ease-in-out before:duration-300 before:opacity-0 group-hover:before:opacity-100 before:absolute before:inset-0 before:bg-black/25'
                            )}
                            style={{
                                backgroundImage: `url("${cover_url}")`
                            }}
                        ></div>
                        <div
                            className={cn(
                                'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition ease-in-out duration-300 opacity-0 group-hover:opacity-100'
                            )}
                        >
                            <div
                                className={cn(
                                    'flex items-center justify-center size-12 bg-theme-blue rounded-full'
                                )}
                            >
                                <Play color="#fff" fill="#fff" size={20} />
                            </div>
                        </div>
                        <div
                            className={cn(
                                'absolute text-xs z-30 text-white bottom-1 right-1.5 transition ease-in-out duration-300 line-clamp-1 max-w-[80%]'
                            )}
                        >
                            {remark}
                        </div>
                    </>
                )}
            </AspectRatio>
            <div className={cn('flex flex-col items-center gap-1')}>
                {loading ? (
                    <>
                        <Skeleton className={cn('w-full h-6')} />
                        <Skeleton className={cn('w-full h-5')} />
                    </>
                ) : (
                    <>
                        <div
                            className={cn(
                                'font-bold line-clamp-1 cursor-pointer transition ease-in-out duration-300 hover:text-theme-blue'
                            )}
                            onClick={handleClick}
                            title={title}
                        >
                            {title}
                        </div>
                        <div
                            className={cn('text-sm line-clamp-1')}
                            title={description}
                        >
                            {description}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default AnimeCard;
