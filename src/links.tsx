import { JSX } from 'react';
import { Tv, Clapperboard, ChartColumn } from 'lucide-react';

export interface NavLink {
    title: string;
    href: string;
    icon?: JSX.Element;
    scope?: number;
}

export const links: NavLink[] = [
    {
        title: '日番',
        href: '/search?type=1',
        icon: <Tv size={18} />
    },
    {
        title: '剧场版',
        href: '/search?type=0',
        icon: <Clapperboard size={18} />
    },
    {
        title: '排行榜',
        href: '/rank',
        icon: <ChartColumn size={18} />
    }
];
