import Constants from 'expo-constants';

(function setEnvironmentVariables() {
  Object.assign(process.env, Constants.manifest?.extra?.env);
})();
