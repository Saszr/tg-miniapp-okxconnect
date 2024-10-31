import containerQueriesPlugin from '@tailwindcss/container-queries'
import formsPlugin from '@tailwindcss/forms'
import typographyPlugin from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'
import animatePlugin from 'tailwindcss-animate'
import debugPlugin from 'tailwindcss-debug-screens'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
      screens: {
        xl: '1400px',
      },
    },
    screens: {
      xs: '480px', // 额外小屏幕，如较小的手机
      sm: '640px', // 小屏幕，如大号手机
      md: '768px', // 中等屏幕，如平板
      lg: '1024px', // 大屏幕，如笔记本电脑
      xl: '1280px', // 超大屏幕，如台式机
      '2xl': '1536px', // 特大屏幕，如大型显示器
    },
    extend: {
      backgroundImage: {
        'merlin-gradient': 'linear-gradient(91deg, #2A2CBF -5.71%, #6335FF 50.8%, #AA68FF 103.89%)',
        'merlin-staking-gradient': 'linear-gradient(91deg, #0066FF -5.71%, #00AAFF 103.89%)',
        'merlin-gradient-v2':
          'radial-gradient(87.66% 141.12% at 51.25% -1.28%, #C192FF 0%, #6335FF 100%), #6335FF',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
          foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        xl: `calc(var(--radius) + 4px)`,
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        gilroy: ['var(--font-gilroy)'],
        manrope: ['var(--font-manrope)'],
        oxanium: ['var(--font-oxanium)'],
        archivo: ['var(--font-archivo)'],
        rankenmitron: ['var(--font-rankenmitron)'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    containerQueriesPlugin,
    typographyPlugin,
    formsPlugin({
      strategy: 'class',
    }),
    animatePlugin,
    debugPlugin,
  ],
}
export default config
