import * as React from 'react';
import { cn } from '@/lib/utils';

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

const Layout = React.forwardRef<HTMLDivElement, LayoutProps>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn('relative flex w-full min-h-svh flex-col', className)}
            {...props}
        />
    )
);
Layout.displayName = 'Layout';

interface LayoutHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const LayoutHeader = React.forwardRef<HTMLDivElement, LayoutHeaderProps>(
    ({ className, ...props }, ref) => (
        <header ref={ref} className={cn(className)} {...props} />
    )
);

LayoutHeader.displayName = 'LayoutHeader';

interface LayoutBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

const LayoutBody = React.forwardRef<HTMLDivElement, LayoutBodyProps>(
    ({ className, ...props }, ref) => (
        <main ref={ref} className={cn('flex-1', className)} {...props} />
    )
);
LayoutBody.displayName = 'LayoutBody';

const LayoutFooter = React.forwardRef<HTMLDivElement, LayoutHeaderProps>(
    ({ className, ...props }, ref) => (
        <footer ref={ref} className={cn(className)} {...props} />
    )
);

LayoutFooter.displayName = 'LayoutFooter';

export { Layout, LayoutHeader, LayoutBody, LayoutFooter };
