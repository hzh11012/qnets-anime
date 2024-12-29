import { createBrowserRouter, redirect, RouteObject } from 'react-router-dom';
import Layout from '@/layout';
import Exception404 from '@/pages/404';
import { LOGIN_URL } from '@/lib/config';
import { GENERAL_SCOPE } from '@/lib/consts';
import { userStore } from '@/store/user';
import { getUserInfo } from '@/apis/user';

const tokenLoader = async () => {
    const { data, code, errorCode } = await getUserInfo();
    if (!code && errorCode === 10005) {
        // 禁止访问
        return redirect('/404');
    }
    userStore.setState({
        userInfo: data
    });
    if (!data?.scope) {
        return redirect(
            `${LOGIN_URL}/?redirect=${encodeURIComponent(window.location.href)}`
        );
    }
    if (data?.scope < GENERAL_SCOPE) {
        return redirect('/entry');
    }
    return null;
};

const staticRoutes: RouteObject[] = [
    {
        path: '/',
        loader: tokenLoader,
        element: <Layout />,
        // TODO
        hydrateFallbackElement: <>Loading</>,
        children: [
            {
                index: true,
                path: '',
                lazy: async () => ({
                    Component: (await import('@/pages/home/index')).default
                })
            }
        ]
    },
    {
        path: '*',
        Component: Exception404
    }
];

const router = createBrowserRouter(staticRoutes);

export default router;
