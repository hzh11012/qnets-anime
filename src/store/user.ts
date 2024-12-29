import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface State {
    userInfo: {
        id: number;
        nickname: string;
        phone: string;
        scope: number;
        avatar?: string;
        created_at: string;
    };
}

interface Action {
    setUserInfo: (value: State['userInfo']) => void;
}

const userStore = create(
    persist<State & Action>(
        set => ({
            userInfo: {
                id: 0,
                nickname: '',
                phone: '',
                // 权限等级 -1-封禁 0-游客 1-普通用户 2-正式会员 3-管理员
                scope: -999,
                avatar: '',
                created_at: ''
            },
            setUserInfo: value => {
                set(() => ({ userInfo: value }));
            }
        }),
        {
            name: 'user-store',
            storage: createJSONStorage(() => localStorage)
        }
    )
);

export { userStore };
