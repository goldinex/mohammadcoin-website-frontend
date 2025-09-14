// tailwind.config.js
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'green-gradient': 'linear-gradient(125deg, #946613 0%, #E2A631 100%)'
      },
      colors: {
        primary: {
          '100': '#FAF6CF',
          '200': '#E8DDA4',
          '210' : '#E8DDA4',
          '300': '#E6CE71',
          '400': '#EDEAE7',
          '500': '#C58112',
          '600': '#946613',
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          '100': '#F3F5F0',
          '200': '#DCE0D1',
          '300': '#C5CCB3',
          '400': '#ADB894',
          '500': '#96A375',
          '600': '#7D8A5C',
          '800': '#454D33',
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        neutral: {
          '100': '#F2F5F7',
          '200': '#DCE3E8',
          '300': '#C1CCD6',
          '400': '#9FB1BD',
          '500': '#7A909E',
          '600': '#5B7282',
          '700': '#3E5463',
          '800': '#2A3F4D',
          '900': '#1C2B36',
          '1000': '#0E171F',

        },
        danger: {
          '100': '#fdeaea',
          '200': '#f9c0c1',
          '300': '#f69697',
          '400': '#f26c6e',
          '500': '#ee4245',
          '600': '#ec2d30'
        },
        warning: {
          '100': 'rgb(255, 252, 229)',
          '200': 'rgb(255, 247, 178)',
          '300': 'rgb(255, 242, 128)',
          '400': 'rgb(255, 237, 76)',
          '500': 'rgb(255, 232, 25)',
          '600': 'rgb(255, 229, 0)'
        },
        success: {
          '100': '#e7f5ef',
          '200': '#b6e2d0',
          '300': '#85ceb0',
          '400': '#55ba90',
          '500': '#24a771',
          '600': '#0c9d61'
        },
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
        border: 'hsl(var(--border))',
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
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
}
