import React from 'react';
import {
    Layout as LayoutWrapper,
    LayoutHeader,
    LayoutBody,
    LayoutFooter
} from '@/components/custom/layout';
import { Outlet } from 'react-router-dom';
import Logo from '@/components/custom/logo';
import { links } from '@/links';
import Nav from '@/components/custom/nav';
import UserMenu from '@/components/custom/user-menu';
import { cn } from '@/lib/utils';
import ThemeSwitch from '@/components/custom/theme-switch';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

const Layout: React.FC = () => {
    return (
        <LayoutWrapper>
            <LayoutHeader
                className={cn(
                    'border-grid border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
                )}
            >
                <div
                    className={cn(
                        'flex items-center justify-between px-2 md:px-6 py-2'
                    )}
                >
                    {/** left-entry */}
                    <div className={cn('flex items-center gap-2 select-none')}>
                        <Logo size="2.5rem" />
                        <Avatar className={cn('w-40')}>
                            <AvatarImage
                                src="./logo.png"
                                className={cn('object-contain')}
                            />
                        </Avatar>
                        <Nav className={cn('md:block hidden')} links={links} />
                    </div>
                    {/** right-entry */}
                    <div className={cn('flex items-center gap-4 select-none')}>
                        <ThemeSwitch className={cn('md:flex hidden')} />
                        <UserMenu />
                    </div>
                </div>
            </LayoutHeader>
            <LayoutBody>
                <Outlet />
            </LayoutBody>
            <LayoutFooter className="border-grid border-t">
                <div className="h-14">Footer</div>
            </LayoutFooter>
        </LayoutWrapper>
    );
};

export default Layout;
