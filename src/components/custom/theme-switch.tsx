import { useTheme } from 'next-themes';
import { Moon, Sun, Tv2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const themeOptions: Record<string, 'system' | 'light' | 'dark'> = {
    dark: 'system',
    system: 'light',
    light: 'dark'
};

const ThemeSwitch = () => {
    const { theme, setTheme } = useTheme();

    const Icon = theme === 'light' ? Sun : theme === 'dark' ? Moon : Tv2;

    return (
        <Button
            size="icon"
            variant="ghost"
            className={cn('rounded-full size-10')}
            onClick={() => {
                theme && setTheme(themeOptions[theme]);
            }}
        >
            <Icon size={20} />
        </Button>
    );
};

export default ThemeSwitch;