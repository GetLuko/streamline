const { generate } = require('@storybook/react-native/scripts/generate');
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

generate({
  configPath: path.resolve(__dirname, './.storybook'),
  useJs: true,
});

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.transformer.unstable_allowRequireContext = true;

module.exports = defaultConfig;
