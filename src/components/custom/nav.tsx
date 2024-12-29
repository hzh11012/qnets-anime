import { NavLink } from '@/links';
import React from 'react';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavProps {
    links: NavLink[];
}

const Nav: React.FC<NavProps> = ({ links }) => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {links.map((link, index) => {
                    return (
                        <NavigationMenuItem key={`${link.href}-${index}`}>
                            <Link
                                to={link.href}
                                className={cn('flex items-center')}
                            >
                                <div className={navigationMenuTriggerStyle()}>
                                    {link.icon && (
                                        <div className={cn('mr-2')}>
                                            {link.icon}
                                        </div>
                                    )}
                                    {link.title}
                                </div>
                            </Link>
                        </NavigationMenuItem>
                    );
                })}
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default Nav;
