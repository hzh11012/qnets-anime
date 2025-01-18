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
                <div className="flex flex-col items-center text-center gap-2 my-4 max-w-common xl:w-[calc(100%-10rem)] mx-auto md:w-[calc(100%-7.5rem)] w-[calc(100%-3rem)] text-sm text-muted-foreground">
                    <p>权属说明： 欢迎各位小伙伴来到小站！</p>
                    <p>Welcome to the small station! </p>
                    <p>
                        为了躲避某种不可抗力的影响，我们开设了这间网站，希望有良好的番剧体验。
                    </p>
                    <p>
                        In order to escape the influence of some kind of force
                        majeure, we opened this website in the hope of having a
                        good fan experience.
                    </p>
                    <p>
                        目前我们没有提供什么大不了的服务，小站所有作品均来自网络和公开引用资源，仅供海外华人学习交流使用，如有侵犯您的相关权益，请联系邮箱,我们会在24小时内核对权属进行处理。
                    </p>
                    <p>
                        At present, we do not provide any big deal, all works of
                        the small site are from the Internet and public citation
                        sources, if there is any infringement, feel free to
                        leave a message on the small site, we will process the
                        ownership within 24 hours.
                    </p>
                    <p>
                        本站内容基于AGPLv3国际协议，在非商业领域，则基于《知识共享
                        署名-非商业性使用-相同方式共享4.0国际协议 (CC BY-NC-SA
                        4.0)》。
                    </p>
                    <p>
                        This site is licensed based on the AGPLv3 international
                        agreement; In the non-commercial domain, it is licensed
                        under the Creative Commons Attribution-NonCommercial
                        Use-ShareAlike 4.0 International Agreement (CC BY-NC-SA
                        4.0).
                    </p>
                    <p>
                        你可以：共享、演绎；你应当：署名、非商业性使用、以相同方式共享。
                    </p>
                    <p>
                        You can: share, interpret; You should: attribute,
                        non-commercialize, share in the same way.
                    </p>
                </div>
            </LayoutFooter>
        </LayoutWrapper>
    );
};

export default Layout;
