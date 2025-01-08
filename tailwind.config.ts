import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#FFBE00",        // Warna kuning
        "orange-1": "#FFBE00",   // Warna oranye pertama
        "orange-2": "#FF7400",   // Warna oranye kedua
        "orange-red": "#FF4800", // Warna oranye-merah
        red: "#FF0600",          // Warna merah
      },
    },
  },
  plugins: [],
} satisfies Config;
