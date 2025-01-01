import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { userStore } from '@/store/user';
import { logout } from '@/apis/user';
import { LOGIN_URL } from '@/lib/config';
import { useRequest } from 'ahooks';
import { cn } from '@/lib/utils';
import { GENERAL_SCOPE, SCOPE_MAP } from '@/lib/consts';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import {
    UserRound,
    ChevronRight,
    LogOut,
    Mail,
    Star,
    Clock3
} from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import ThemeSwitch from '@/components/custom/theme-switch';

const UserMenuLink = [
    {
        label: '个人中心',
        link: '/profile',
        icon: <UserRound size={16} />
    },
    {
        label: '消息管理',
        link: '/message',
        icon: <Mail size={16} />
    },
    {
        label: '我的追番',
        link: '/star',
        icon: <Star size={16} />
    },
    {
        label: '历史记录',
        link: '/history',
        icon: <Clock3 size={16} />
    },
    {
        label: '开通正式会员',
        link: '/pay',
        scope: GENERAL_SCOPE,
        icon: <Clock3 size={16} />
    }
];

const UserMenu: React.FC = () => {
    const navigate = useNavigate();
    const userInfo = userStore(state => state.userInfo);

    const { run: runLogout } = useRequest(logout, {
        manual: true,
        debounceWait: 300,
        onSuccess() {
            window.location.reload();
            window.location.href = `${LOGIN_URL}/?redirect=${encodeURIComponent(window.location.href)}`;
        }
    });

    const trigger = (
        <Avatar className={cn('size-10 cursor-pointer')}>
            <AvatarImage src={userInfo.avatar} className={cn('object-cover')} />
            <AvatarFallback>{userInfo.nickname?.slice(0, 1)}</AvatarFallback>
        </Avatar>
    );

    return (
        <>
            {/** > md */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild className={cn('md:block hidden')}>
                    {trigger}
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    className={cn('w-60 px-4')}
                    align="end"
                    forceMount
                >
                    <DropdownMenuLabel className={cn('font-normal')}>
                        <div
                            className={cn(
                                'flex flex-col text-center space-y-4 -mt-10 mb-2'
                            )}
                        >
                            <Avatar
                                className={cn(
                                    'size-14 left-1/2 -translate-x-1/2 text-base'
                                )}
                            >
                                <AvatarImage
                                    src={userInfo.avatar}
                                    className={cn('object-cover')}
                                />
                                <AvatarFallback>
                                    {userInfo.nickname?.slice(0, 1)}
                                </AvatarFallback>
                            </Avatar>
                            <h3
                                className={cn('text-base text-center/*  */', {
                                    'text-theme-pink':
                                        userInfo.scope > GENERAL_SCOPE
                                })}
                            >
                                {userInfo.nickname}
                            </h3>
                            <div
                                className={cn(
                                    'text-xs leading-none text-muted-foreground'
                                )}
                            >
                                <Badge
                                    variant="secondary"
                                    className={cn(
                                        'tracking-[0.15rem] text-white text-[0.625rem]',
                                        {
                                            'bg-theme-pink hover:bg-theme-pink':
                                                userInfo.scope > GENERAL_SCOPE
                                        }
                                    )}
                                >
                                    {SCOPE_MAP[userInfo.scope || 0]}
                                </Badge>
                            </div>
                        </div>
                    </DropdownMenuLabel>
                    {UserMenuLink.map((item, index) => {
                        const { label, link, icon, scope } = item;
                        return (
                            (!scope || userInfo.scope === scope) && (
                                <DropdownMenuItem
                                    key={`${label}-${index}`}
                                    className={cn(
                                        'cursor-pointer justify-between py-2'
                                    )}
                                    onClick={() => navigate(link)}
                                >
                                    <div
                                        className={cn(
                                            'flex items-center gap-2'
                                        )}
                                    >
                                        {icon}
                                        {label}
                                    </div>
                                    <ChevronRight size={16} />
                                </DropdownMenuItem>
                            )
                        );
                    })}
                    <DropdownMenuSeparator className={cn('bg-border')} />
                    <DropdownMenuGroup>
                        <DropdownMenuItem
                            className={cn('cursor-pointer py-2')}
                            onClick={() => {
                                runLogout();
                            }}
                        >
                            <div className={cn('flex items-center gap-2')}>
                                <LogOut size={16} />
                                退出登录
                            </div>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
            {/** <= md */}
            <Sheet>
                <SheetTrigger className={cn('md:hidden block')}>
                    {trigger}
                </SheetTrigger>
                <SheetContent className={cn('w-60')} side="left">
                    <SheetHeader>
                        <SheetTitle
                            className={cn(
                                'flex flex-col text-center space-y-4 mb-4'
                            )}
                        >
                            <Avatar
                                className={cn(
                                    'size-14 left-1/2 -translate-x-1/2 text-base'
                                )}
                            >
                                <AvatarImage
                                    src={userInfo.avatar}
                                    className={cn('object-cover')}
                                />
                                <AvatarFallback>
                                    {userInfo.nickname?.slice(0, 1)}
                                </AvatarFallback>
                            </Avatar>
                            <SheetDescription asChild>
                                <div className={cn('space-y-4')}>
                                    <h3
                                        className={cn('text-base text-center', {
                                            'text-theme-pink':
                                                userInfo.scope > GENERAL_SCOPE
                                        })}
                                    >
                                        {userInfo.nickname}
                                    </h3>
                                    <div
                                        className={cn(
                                            'text-xs leading-none text-muted-foreground'
                                        )}
                                    >
                                        <Badge
                                            variant="secondary"
                                            className={cn(
                                                'tracking-[0.15rem] text-white text-[0.625rem]',
                                                {
                                                    'bg-theme-pink hover:bg-theme-pink':
                                                        userInfo.scope >
                                                        GENERAL_SCOPE
                                                }
                                            )}
                                        >
                                            {SCOPE_MAP[userInfo.scope || 0]}
                                        </Badge>
                                    </div>
                                </div>
                            </SheetDescription>
                        </SheetTitle>
                    </SheetHeader>
                    <Separator className={cn('my-2')} />
                    <div>
                        {UserMenuLink.map((item, index) => {
                            const { label, link, icon, scope } = item;
                            return (
                                (!scope || userInfo.scope === scope) && (
                                    <div
                                        key={`${label}-${index}`}
                                        className={cn(
                                            'relative flex items-center gap-2 px-2 text-sm justify-between py-2 cursor-pointer'
                                        )}
                                        onClick={() => navigate(link)}
                                    >
                                        <div
                                            className={cn(
                                                'flex items-center gap-2'
                                            )}
                                        >
                                            {icon}
                                            {label}
                                        </div>
                                        <ChevronRight size={16} />
                                    </div>
                                )
                            );
                        })}
                        <Separator className={cn('my-2')} />
                        <div
                            className={cn(
                                'relative flex items-center gap-2 px-2 text-sm justify-between py-2 cursor-pointer'
                            )}
                            onClick={() => {
                                runLogout();
                            }}
                        >
                            <div className={cn('flex items-center gap-2')}>
                                <LogOut size={16} />
                                退出登录
                            </div>
                        </div>
                    </div>
                    <div className={cn('absolute top-4 right-4')}>
                        <ThemeSwitch
                            className={cn(
                                'size-5 hover:bg-transparent focus-visible:bg-transparent'
                            )}
                        />
                    </div>
                </SheetContent>
            </Sheet>
        </>
    );
};

export default UserMenu;
