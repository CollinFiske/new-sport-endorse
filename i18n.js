const path = require('path');

module.exports = {
  i18n: {
    locales: ['en', 'es', 'fr', 'de'],
    defaultLocale: 'en',
    localePath: path.resolve('./locales'),
  },
};
