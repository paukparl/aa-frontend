const config = {
  plugins: [
    // Maintain this order to ensure plugin compatibility
    // https://github.com/tailwindlabs/prettier-plugin-tailwindcss?tab=readme-ov-file#compatibility-with-other-prettier-plugins
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  tailwindFunctions: ["cn"],
  importOrder: ["server-only", "<THIRD_PARTY_MODULES>", "^@/(.*)$", "^[./]"],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
};

export default config;
