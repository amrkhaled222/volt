/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './app/**/*.{js,jsx}',
        './src/**/*.{js,jsx}',
    ],

    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
                plusj: ['Plus Jakarta Sans', 'sans-serif'],
                rubik: ['Rubik', 'sans-serif'],
                openSans: ['Open Sans', 'sans-serif'],
            },
            backgroundImage: {
                uploasImg: 'url(./_assets/image.png)',
                pcMainModels: 'url(./_assets/pcModelsPic.jpg)',
                HeroImage: 'url(./_assets/HeroImage.png)',
                MainModels: 'url(./_assets/ModelsPic.png)',
                casual: "url('./_assets/casual.png')",
                mobileCasual: "url('./_assets/mobile-casual.png')",
                formal: "url('./_assets/formal.png')",
                mobileFormal: "url('./_assets/mobile-formal.png')",
                party: "url('./_assets/party.png')",
                mobileParty: "url('./_assets/mobile-party.png')",
                gym: "url('./_assets/gym.png')",
                mobileGym: "url('./_assets/mobile-gym.png')",
                search: "url('./_assets/magnifying-glass.png')",
            },
            gridTemplateColumns: {
                // added new 4 column grid as new4
                table: 'repeat(1, minmax(0, 1fr))',
                orderStats: ' repeat(auto-fill, minmax(280px, 300px));',
                autoFlow: ' repeat(auto-fill, minmax(280px, 370px));',
                autoFlowMobile: ' repeat(auto-fill, minmax(280px, 300px));',
            },
            gridTemplateRows: {
                layout: '100px 1fr',
                mobilelayout: '76px 1fr',
                allproduct_row: ' repeat(auto-fill, minmax(280px, 300px)) ',
            },
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',

                darkGrey: '#232321',
                seconderyItemColor: '#70706E',
                darkBlue: '#003F62',
                overlay: 'rgba(35, 35, 33, 0.2)',
                mainBg: ' rgb(237 235 235)',

                lightgrey: '#f0f0f0',
                hrColor: '#00000',
                discountColor: '#FF3333',
                main_gray: '#F2F0F1',
                dark_grey: '#232321',
                brown_grey: '#70706E',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
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
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
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
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [require('tailwindcss-animate'), require('@tailwindcss/forms')],
}
