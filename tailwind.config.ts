import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            screens: {
                common: '111.25rem'
            },
            spacing: {
                common: '111.25rem'
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                'theme-pink': {
                    DEFAULT: '#fb7299'
                },
                'theme-blue': {
                    DEFAULT: '#23ade5'
                },
                'theme-orange': {
                    DEFAULT: '#fbbc09'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))'
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                'collapsible-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-collapsible-content-height)' }
                },
                'collapsible-up': {
                    from: { height: 'var(--radix-collapsible-content-height)' },
                    to: { height: '0' }
                },
                'rotate-in': {
                    '0%': {
                        transform: 'rotate(0deg) scale(0.2)',
                        opacity: '0'
                    },
                    '100%': {
                        transform: 'rotate(360deg)  scale(1)',
                        opacity: '1'
                    }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'collapsible-down': 'collapsible-down 0.2s ease-out',
                'collapsible-up': 'collapsible-up 0.2s ease-out',
                '404': 'rotate-in 0.5s ease-out'
            },
            backgroundImage: {
                404: "url('./404.png')",
                banner: 'linear-gradient(180deg, hsl(var(--background) / 0%), hsl(var(--background) / 7%) 11.79%, hsl(var(--background) / 8%) 21.38%, hsl(var(--background) / 7.04%) 29.12%, hsl(var(--background) / 12.07%) 35.34%, hsl(var(--background) / 18.15%) 40.37%, hsl(var(--background) / 25.12%) 44.56%, hsl(var(--background) / 32.81%) 48.24%, hsl(var(--background) / 41.05%) 51.76%, hsl(var(--background) / 49.68%) 55.44%, hsl(var(--background) / 58.52%) 59.63%, hsl(var(--background) / 67.4%) 64.66%, hsl(var(--background) / 76.16%) 70.88%, hsl(var(--background) / 84.63%) 78.62%, hsl(var(--background) / 92.63%) 88.21%, hsl(var(--background)));'
            }
        }
    },
    plugins: [require('tailwindcss-animate')]
};

export default config;
