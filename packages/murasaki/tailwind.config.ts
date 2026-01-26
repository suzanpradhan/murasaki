import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/core/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			gridAutoColumns: {
				'2fr': 'minmax(0, 2fr)',
			},
			backgroundImage: {
				'diamond-gradient': 'radial-gradient(77.75% 88.85% at 76.01% 16.01%, rgba(18, 18, 18, 0.3) 0%, #121212 100%)',
				'custom-radial': 'radial-gradient(circle at bottom left, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.1) 100%)',
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			colors: {
				grayDark: '#1F1F1F',
				grayPrimary: '#131212',
				grayText: '#8E8F99',
				grayTableHead: '#282828',
				borderColor: 'hsla(0,0,100%,16%)',
				dark: '#0d0d0d',
				blackPrimary: 'rgba(19, 18, 18, 1)',
				blackShade: 'rgb(31,31,31)',
				error: '#BB1111',
				paragraph: '#B3B3B3',
				success: '#8AF265',
				type: '#0D92F4',
				count: '#FFC700',
				releaseType: '#D91656',
				label: '#72BAA9',
				blueLabel: '#074799',
				border: 'hsl(var(--border))',
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
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			height: {
				'vh-20': 'calc(100vh - 20%)'
			},
			fontFamily: {
				iosevka: ['var(--font-iosevka)'],
				satoshi: ['var(--font-satoshi)'],
				scratchy: ['var(--font-scratchy)'],
				helvetica: ['var(--font-helvetica)'],
				abel: ['var(--font-abel)'],
				abhayaLibre: ['var(--font-abhaya-libre)'],
			},
			animation: {
				slideLeftToRight: 'slideLeftToRight 2s ease-in-out forwards',
				spin360pos: 'spin360 10s linear infinite',
				spin360Slide: 'spin360Slide 2s ease-in-out forwards',
				'meteor-effect': 'meteor 2s linear infinite',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
			keyframes: {
				slideLeftToRight: {
					'0%': { right: '20%' },
					'100%': { right: '5%' },
				},
				spin360: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				spin360Slide: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(100deg)' },
				},
				meteor: {
					'0%': {
						transform: 'rotate(215deg) translateX(0)',
						opacity: '1'
					},
					'70%': {
						opacity: '1'
					},
					'100%': {
						transform: 'rotate(215deg) translateX(-500px)',
						opacity: '0'
					}
				},
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
		}
	},
	plugins: [require("tailwindcss-animate"),
	require('@tailwindcss/container-queries'),
	],
};
export default config;
