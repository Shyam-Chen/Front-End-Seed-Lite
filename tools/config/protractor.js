// const { path } = require('phantomjs-prebuilt');
const babel = require('babel-register');
const { SpecReporter } = require('jasmine-spec-reporter');

const { TEST_PORT } = require('../constants');

exports.config = {
  directConnect: true,
  specs: [
    'src/**/*.e2e-spec.js'
  ],
  exclude: [],
  // capabilities: {
  //   'browserName': 'phantomjs',
  //   'phantomjs.binary.path': path,
  //   'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
  // },
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['--no-sandbox', '--headless', '--disable-gpu', '--window-size=1280,720']
    }
  },
  baseUrl: `http://localhost:${TEST_PORT}`,
  onPrepare() {
    babel();
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    browser.ignoreSynchronization = true;
    global.webdriver = browser.driver;
    // webdriver.manage().window().setSize(1280, 1024);
  },
  framework: 'jasmine',
  jasmineNodeOpts: {
    print() {}
  }
};
