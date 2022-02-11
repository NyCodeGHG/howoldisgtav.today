const path = require('path');

/** @type {import('next-i18next').UserConfig} */
const config = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
    localePath: path.resolve('./public/locales')
  },
  reloadOnPrerender: true,
};

module.exports = config;
