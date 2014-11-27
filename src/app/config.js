function config() {
  'use strict';
  var Config = {};
  // Begin config

  Config.APP_NAME = "I am an app name";
  Config.BASE_API_URL = "https://react-rest-sample.herokuapp.com/v1/"

  // End config
  Object.freeze(Config);
  return Config;
}

export default config()
