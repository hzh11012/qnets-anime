import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface ModCardItem {
    label: string;
    link: string;
}

interface ModCardProps {
    className?: string;
    title: ModCardItem;
    list: ModCardItem[];
}

const ModCard: React.FC<ModCardProps> = ({ title, className, list }) => {
    const navigate = useNavigate();
    return (
        <div
            className={cn('relative px-5 py-4 rounded-lg space-y-2', className)}
        >
            <div
                className={cn('inline-flex items-center gap-1 cursor-pointer')}
                onClick={() => navigate(title.link)}
            >
                <span className={cn('text-xl font-bold')}>{title.label}</span>
                <ChevronRight size={24} />
            </div>
            <div
                className={cn(
                    'grid auto-cols-max grid-rows-2 grid-flow-col gap-x-8 gap-y-2'
                )}
            >
                {list.map(({ label, link }, index) => {
                    return (
                        <Link
                            key={index}
                            to={link}
                            className={cn('text-sm text-secondary-foreground')}
                        >
                            {label}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default ModCard;
