const { getDefaultConfig } = require('@expo/metro-config');
const { withNxMetro } = require('@nx/expo');

const defaultConfig = getDefaultConfig(__dirname);

module.exports = (async () => {
  return withNxMetro(defaultConfig, {
    // Change this to true to see debugging info.
    // Useful if you have issues resolving modules
    debug: false,
    // all the file extensions used for imports other than 'ts', 'tsx', 'js', 'jsx'
    extensions: [],
    // the project root to start the metro server
    projectRoot: __dirname,
    // Specify any additional (to projectRoot) watch folders, this is used to know which files to watch
    watchFolders: [],
  });
})();
