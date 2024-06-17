/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // Incluye esta línea si usas `src` como carpeta raíz de tus componentes
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle at left, var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-with-image":
          "linear-gradient(to top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 5)), url('/Nav.png')",
      },

      spacing: {
        932: "932px",
        28: "28",
      },
      colors: {
        rojo: "#f94940",
        "red-200": "#fca5a5",
        "custom-gray": "#EDEDED",
        "off-white": "#F8F8F8",
      },
      opacity: {
        20: "0.2",
      },
      fontFamily: {
        sans: ['"DM Sans"', "sans-serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
        "instrument-serif": ["Instrument Serif", "serif"],
      },
    },
    fontSize: {
      lg: "18px",
      inherit: "inherit",
      50: "50px",
      "mobile-50": "50px",
      "h2-desktop": "76px",
      "h2-mobile": "32px",
      "h3-desktop": "64px",
      "24px": "24px",
    },
    letterSpacing: {
      wider: "0.2em", // Adjusted for 20% letter spacing
    },
    fontWeight: {
      400: "400",
    },
    lineHeight: {
      65: "65px",
    },
    textAlign: {
      left: "left",
    },
    screens: {
      mq414: {
        raw: "screen and (max-width: 414px)",
      },
      mq413: {
        raw: "screen and (max-width: 413px)",
      },
      mq318: {
        raw: "screen and (max-width: 318px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
