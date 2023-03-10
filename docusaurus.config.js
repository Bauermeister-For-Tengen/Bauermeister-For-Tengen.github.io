// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const TwitterSvg =
  '<svg style="fill: #1DA1F2; vertical-align: middle; margin-left: 3px;" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Ein Bauermeister für Tengen",
  tagline: "",
  url: "https://bauermeister-for-tengen.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "bauermeister-for-tengen", // Usually your GitHub org/user name.
  projectName: "bauermeister-for-tengen.github.io", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "de",
    locales: ["de"],
    localeConfigs: {
      de: {
        htmlLang: "de-DE",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Ein Bauermeister für Tengen",
        logo: {
          alt: "Bauermeister für Tengen Logo",
          src: "img/logo_new.svg",
        },
        items: [
          {
            to: "/blog/willkommen",
            position: "left",
            label: "Zu meiner Person",
          },
          {
            type: "doc",
            docId: "/category/plattform",
            position: "left",
            label: "Plattform",
          },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/events", label: "Veranstaltungen", position: "left" },
          {
            href: "https://github.com/bauermeister-for-tengen",
            className: "header-github-link",
            "aria-label": "GitHub",
            position: "right",
          },
          {
            href: "https://twitter.com/B_For_Tengen",
            // className: "header-twitter-link",
            "aria-label": "Twitter",
            label: "Twitter",
            position: "right",
          },
          {
            href: "https://www.youtube.com/channel/UCsBMrpfNUJ9cig2FOOtDTXQ",
            // className: "header-youtube-link",
            "aria-label": "YouTube",
            label: "YouTube",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Politik",
            items: [
              {
                label: "Plattform",
                to: "/docs/category/plattform",
              },
            ],
          },
          {},
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Veranstaltungen",
                to: "/events",
              },
              {
                label: "GitHub",
                href: "https://github.com/bauermeister-for-tengen",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/B_For_Tengen",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/@b_for_tengen",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Markus Bauermeister`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
