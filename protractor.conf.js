const SpecReporter = require('jasmine-spec-reporter');
/// const phantomjs = require('phantomjs-prebuilt');
const babel = require('babel-core/register');

const config = {
  directConnect: true,
  specs: [
    './src/**/*.e2e-spec.js'
  ],
  exclude: [],
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['no-sandbox']
    }
  },
  baseUrl: 'http://localhost:9876/',
  onPrepare() {
    babel({ presets: ['latest'] });
    jasmine.getEnv().addReporter(new SpecReporter({ displayStacktrace: true }));
    global.webdriver = browser.driver;
    webdriver.ignoreSynchronization = true;
    webdriver.manage().window().setSize(1366, 768);
  },
  framework: 'jasmine',
  jasmineNodeOpts: {
    isVerbose: false,
    showColors: true,
    includeStackTrace: false
  }
};

if (process.env.TRAVIS) {
  config.sauceUser = process.env.SAUCE_USERNAME;
  config.sauceKey = process.env.SAUCE_ACCESS_KEY;
  config.multiCapabilities = [
    {
      'browserName': 'chrome',
      'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
      'build': process.env.TRAVIS_BUILD_NUMBER,
      'name': 'Vanilla-Starter-Kit'
    // }, {
    //   'browserName': 'firefox',
    //   'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    //   'build': process.env.TRAVIS_BUILD_NUMBER,
    //   'name': 'Vanilla-Starter-Kit'
    // }, {
    //   'browserName': 'MicrosoftEdge',
    //   'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    //   'build': process.env.TRAVIS_BUILD_NUMBER,
    //   'name': 'Vanilla-Starter-Kit'
    // }, {
    //   'browserName': 'safari',
    //   'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    //   'build': process.env.TRAVIS_BUILD_NUMBER,
    //   'name': 'Vanilla-Starter-Kit'
    // }, {
    //   'browserName': 'internet explorer',
    //   'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    //   'build': process.env.TRAVIS_BUILD_NUMBER,
    //   'name': 'Vanilla-Starter-Kit'
    }
  ];
}

exports.config = config;
