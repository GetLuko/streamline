module.exports = {
  expo: {
    name: 'Sandbox',
    slug: 'sandbox',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
      url: 'https://u.expo.dev/11eb7a11-ac37-40c7-a649-095da5a7b0b3',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.lukoapp.sandbox',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
      package: 'com.lukoapp.sandbox',
    },
    web: {
      favicon: './assets/favicon.png',
    },
    extra: {
      eas: {
        projectId: '11eb7a11-ac37-40c7-a649-095da5a7b0b3',
      },
      env: getNXVariables(),
    },
    runtimeVersion: {
      policy: 'sdkVersion',
    },
  },
};

/**
 * Nx isn't passing env variables to expo so we need to add them to the extra section of the config
 * then manually set process.env when our app starts
 *
 */
function getNXVariables() {
  let result = {};
  for (const key in process.env) {
    if (key.startsWith('NX_')) {
      result[key] = process.env[key];
    }
  }
  return result;
}
