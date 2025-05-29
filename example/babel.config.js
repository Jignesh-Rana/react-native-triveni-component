const path = require('path');
const { getConfig } = require('react-native-builder-bob/babel-config');
const pkg = require('../package.json');

const root = path.resolve(__dirname, '..');

module.exports = function (api) {
  api.cache(true);

  return getConfig(
    {
      presets: ['babel-preset-expo'],
      plugins: [
        [
          'module-resolver',
          {
            alias: {
              '@': './src',
              'assets': './assets',
            },
          },
        ],
        'react-native-reanimated/plugin',
      ],
    },
    { root, pkg }
  );
};
