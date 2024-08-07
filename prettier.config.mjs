/** @type {import("prettier").Config} */
const config = {
  semi: true,
  singleQuote: false,
  printWidth: 80,
  trailingComma: "es5",
  tailwindFunctions: ["clsx", "tw"],
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
