const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

const nextConfig = withNextra({
  images: {
    domains: [
      "raw.githubusercontent.com",
      "wac-cdn.atlassian.com",
      "githubusercontent.com",

    ],
  },
});

module.exports = nextConfig;
