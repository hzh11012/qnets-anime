import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@/components/custom/theme-provider';
import router from '@/routes';
import '@/style/index.css';
import '@/style/global.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider defaultTheme="system" storageKey="qnets-ui-theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    </StrictMode>
);
