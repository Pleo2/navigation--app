/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
        "./presentation/**/*.{js,jsx,ts,tsx}"
    ],
    presets: [require("nativewind/preset")],
    theme: {
      extend: {
        fontFamily: {
            'poppins-medium': ['Poppins-Medium', 'font-sans'],
            'poppins-medium-italic': ['Poppins-MediumItalic', 'font-sans'],

            'comorant-g-regular': ['CormorantGaramond-Regular', 'font-serif'],
            'comorant-g-italic': ['CormorantGaramond-italic', 'font-serif'],
            'comorant-g-medium': ['CormorantGaramond-Medium', 'font-serif'],
            'comorant-g-medium-italic': ['CormorantGaramond-MediumItalic', 'font-serif'],
            'comorant-g-bold': ['CormorantGaramond-Bold', 'font-serif'],
            'comorant-g-bold-italic': ['CormorantGaramond-BoldItalic', 'font-serif'],

            'space-grotesk-regular': ['SpaceGrotesk-Regular', 'font-mono'],
            'space-grotesk-medium': ['SpaceGrotesk-Medium', 'font-mono'],
            'space-grotesk-semibold': ['SpaceGrotesk-SemiBold', 'font-mono'],
            'space-grotesk-bold': ['SpaceGrotesk-Bold', 'font-mono'],
            'space-grotesk-light': ['SpaceGrotesk-Light', 'font-mono'],
        },

        colors: {
            background: 'var(--color-background)',
            foreground: 'var(--color-foreground)',
            'primary-background': 'var(--color-primary)',
            'secondary-background': 'var(--color-secondary)',
            highlight: 'var(--color-highlight)',
            contrast: 'var(--color-contrast)',
            success: 'var(--color-success)',
            error: 'var(--color-error)',
            warning: 'var(--color-warning)',
            info: 'var(--color-info)',
            'primary': 'var(--color-text-primary)',
            'secondary': 'var(--color-text-secondary)',
            'disabled': 'var(--color-text-disabled)',
            link: 'var(--color-link)'

        },
        spacing: {
            xs: 'var(--spacing-xs)',
            sm: 'var(--spacing-sm)',
            md: 'var(--spacing-md)',
            lg: 'var(--spacing-lg)',
            xl: 'var(--spacing-xl)'
        },
        borderRadius: {
            md: 'var(--border-radius-md)',
            lg: 'var(--border-radius-lg)'
        }

      },
    },
    plugins: [],
  }
