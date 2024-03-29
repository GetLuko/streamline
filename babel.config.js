module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      '@babel/preset-env',
      [
        'module:@react-native/babel-preset',
        {
          runtime: 'automatic',
          useBuiltIns: 'entry',
        },
      ],
    ],
    plugins: [
      ['react-native-reanimated/plugin'],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      ['@babel/plugin-proposal-private-methods', { loose: true }],
      ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ],
  };
};
