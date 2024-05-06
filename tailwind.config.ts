import type { Config } from "tailwindcss";

const config = {
  content: ["./src/**/*.{ts,tsx}"],
  plugins: [require("@tailwindcss/forms")],
} satisfies Config;

export default config;
