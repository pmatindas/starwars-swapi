module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'vendors/angular/angular.js',
      'vendors/angular-ui-router/release/angular-ui-router.js',
      'vendors/angular-mocks/angular-mocks.js',
      'app.js',    
      'constant.js',
      'directives.js',
      'swapiService.js',
      'person/**/*.js',      
      'species/**/*.js',
      'starship/**/*.js',
      'tests/**/*.spec.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
  });
};
