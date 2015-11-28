/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'waya',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    defaultLocale: 'en',
    EmberENV: {
      FEATURES: {}
    },
    APP: {},
     contentSecurityPolicy: {
      'img-src': "* 'self' 'unsafe-inline'",
      'connect-src': "*",
      'style-src': "* 'self' 'unsafe-inline'",
      'report-uri': "*",
      'script-src': "* 'self' 'unsafe-inline' 'unsafe-eval'",
      'font-src': "* 'self' 'unsafe-inline' 'unsafe-eval'",
      'default-src': "* 'self' 'unsafe-inline' 'unsafe-eval'"
    },
    'ember-devtools': {
      global: 'Backdoor',
      enabled: true
    }
  };

  if (environment === 'development') {
    ENV['ember-cli-mirage'] = {
      enabled: false
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
