// Karma configuration
// Generated on Fri Apr 01 2016 19:20:57 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: 'www',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
			"js/ng/angular.js",
			"js/ng/angular-mocks.js",
			"js/ng/angular-ui-router.js",
			"js/init.js",
			"js/constants.js",
			"js/router.js",
			"js/services/widgets.js",
			"js/controllers/home.js",
			"js/controllers/widget-edit.js",
			"js/controllers/widget-view.js",
			"js/site.js",
			"tests/specs/router-tests.js",
			"tests/specs/services/widgets-tests.js",
			"tests/specs/controllers/home-tests.js",
			"tests/specs/controllers/widget-view-tests.js",
			"tests/specs/controllers/widget-edit-tests.js"
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
