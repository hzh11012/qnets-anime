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
                ring: 'hsl(var(--ring))',
                'anime-guide-1': '#e3efcd',
                'anime-guide-2': '#cdefd7',
                'anime-guide-3': '#cdeeef',
                'anime-guide-4': '#d1eaf2',
                'anime-guide-5': '#dce1f9',
                'anime-guide-6': '#ecddfb',
                'anime-guide-7': '#fbdbf4',
                'anime-guide-text-1': '#71ad00',
                'anime-guide-text-2': '#00ad34',
                'anime-guide-text-3': '#00abad',
                'anime-guide-text-4': '#0298c1',
                'anime-guide-text-5': '#3459ee',
                'anime-guide-text-6': '#9f50ee',
                'anime-guide-text-7': '#ea3ec7'
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
                'anime-card':
                    'linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,.00386607) 8.07%,rgba(0,0,0,.0152486) 15.54%,rgba(0,0,0,.033824) 22.5%,rgba(0,0,0,.0592687) 29.04%,rgba(0,0,0,.0912593) 35.26%,rgba(0,0,0,.129472) 41.25%,rgba(0,0,0,.173583) 47.1%,rgba(0,0,0,.22327) 52.9%,rgba(0,0,0,.278208) 58.75%,rgba(0,0,0,.338074) 64.74%,rgba(0,0,0,.402545) 70.96%,rgba(0,0,0,.471296) 77.5%,rgba(0,0,0,.544005) 84.46%,rgba(0,0,0,.620347) 91.93%,rgba(0,0,0,.7))',
                banner: 'linear-gradient(180deg, hsl(var(--background) / 0%), hsl(var(--background) / 7%) 11.79%, hsl(var(--background) / 8%) 21.38%, hsl(var(--background) / 7.04%) 29.12%, hsl(var(--background) / 12.07%) 35.34%, hsl(var(--background) / 18.15%) 40.37%, hsl(var(--background) / 25.12%) 44.56%, hsl(var(--background) / 32.81%) 48.24%, hsl(var(--background) / 41.05%) 51.76%, hsl(var(--background) / 49.68%) 55.44%, hsl(var(--background) / 58.52%) 59.63%, hsl(var(--background) / 67.4%) 64.66%, hsl(var(--background) / 76.16%) 70.88%, hsl(var(--background) / 84.63%) 78.62%, hsl(var(--background) / 92.63%) 88.21%, hsl(var(--background)));',
                'search-index':
                    'linear-gradient(83.84deg, rgba(255, 139, 244, 0.12) 0%, rgba(255, 139, 244, 0.07) 100%), url("../search-index.png")',
                'search-category':
                    'linear-gradient(83.84deg, rgba(108, 226, 169, 0.12) 0%, rgba(108, 226, 169, 0.07) 100%), url("../search-category.png")',
                'search-time':
                    'linear-gradient(83.84deg, rgba(114, 184, 255, 0.12) 0%, rgba(114, 184, 255, 0.07) 100%), url("../search-time.png")',
                'search-hot':
                    'linear-gradient(83.84deg, rgba(255, 122, 122, 0.12) 0%, rgba(255, 122, 122, 0.07) 100%), url("../search-hot.png")',
                'anime-guide-l-1':
                    'linear-gradient(rgba(113, 173, 0, 0.08), rgba(113, 173, 0, 0))',
                'anime-guide-l-2':
                    'linear-gradient(rgba(0, 173, 52, 0.08), rgba(0, 173, 52, 0))',
                'anime-guide-l-3':
                    'linear-gradient(rgba(0, 171, 173, 0.08), rgba(0, 171, 173, 0))',
                'anime-guide-l-4':
                    'linear-gradient(rgba(2, 152, 193, 0.08), rgba(2, 152, 193, 0))',
                'anime-guide-l-5':
                    'linear-gradient(rgba(52, 89, 238, 0.08), rgba(52, 89, 238, 0))',
                'anime-guide-l-6':
                    'linear-gradient(rgba(159, 80, 238, 0.08), rgba(159, 80, 238, 0))',
                'anime-guide-l-7':
                    'linear-gradient(rgba(234, 62, 199, 0.08), rgba(234, 62, 199, 0))'
            }
        }
    },
    plugins: [require('tailwindcss-animate')]
};

export default config;
