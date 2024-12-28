import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Exception404 from '@/pages/404';

const staticRoutes: RouteObject[] = [
    {
        path: '/',
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
