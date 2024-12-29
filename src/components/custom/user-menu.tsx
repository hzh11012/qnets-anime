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

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className={cn('size-10 cursor-pointer')}>
                    <AvatarImage
                        src={userInfo.avatar}
                        className={cn('object-cover')}
                    />
                    <AvatarFallback>
                        {userInfo.nickname?.slice(0, 1)}
                    </AvatarFallback>
                </Avatar>
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
                        <p
                            className={cn('text-base text-center/*  */', {
                                'text-theme-pink':
                                    userInfo.scope > GENERAL_SCOPE
                            })}
                        >
                            {userInfo.nickname}
                        </p>
                        <p
                            className={cn(
                                'text-xs leading-none text-muted-foreground'
                            )}
                        >
                            <Badge
                                variant="secondary"
                                className={cn('tracking-[0.15rem]', {
                                    'bg-theme-pink hover:bg-theme-pink text-[10px]':
                                        userInfo.scope > GENERAL_SCOPE
                                })}
                            >
                                {SCOPE_MAP[userInfo.scope]}
                            </Badge>
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuItem
                    className={cn('cursor-pointer justify-between py-2')}
                    onClick={() => {
                        navigate('/profile');
                    }}
                >
                    <div className={cn('flex items-center gap-2')}>
                        <UserRound size={16} />
                        个人中心
                    </div>
                    <ChevronRight size={16} />
                </DropdownMenuItem>
                <DropdownMenuItem
                    className={cn('cursor-pointer justify-between py-2')}
                    onClick={() => {
                        navigate('/message');
                    }}
                >
                    <div className={cn('flex items-center gap-2')}>
                        <Mail size={16} />
                        消息管理
                    </div>
                    <ChevronRight size={16} />
                </DropdownMenuItem>
                <DropdownMenuItem
                    className={cn('cursor-pointer justify-between py-2')}
                    onClick={() => {
                        navigate('/collect');
                    }}
                >
                    <div className={cn('flex items-center gap-2')}>
                        <Star size={16} />
                        我的追番
                    </div>
                    <ChevronRight size={16} />
                </DropdownMenuItem>
                <DropdownMenuItem
                    className={cn('cursor-pointer justify-between py-2')}
                    onClick={() => {
                        navigate('/history');
                    }}
                >
                    <div className={cn('flex items-center gap-2')}>
                        <Clock3 size={16} />
                        历史记录
                    </div>
                    <ChevronRight size={16} />
                </DropdownMenuItem>
                {userInfo.scope === GENERAL_SCOPE && (
                    <DropdownMenuItem
                        className={cn('cursor-pointer justify-between py-2')}
                        onClick={() => {
                            // TODO
                        }}
                    >
                        <div className={cn('flex items-center gap-2')}>
                            <UserRound size={16} />
                            开通正式会员
                        </div>
                        <ChevronRight size={16} />
                    </DropdownMenuItem>
                )}
                <DropdownMenuSeparator className="bg-border" />
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
    );
};

export default UserMenu;
