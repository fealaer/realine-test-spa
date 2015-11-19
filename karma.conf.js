(function () {
  'use strict';

  module.exports = function(config) {
    config.set({
      browsers: ['Chrome'],
      frameworks: ['jasmine'],
      files: [
        'src/bower_components/jquery/dist/jquery.js',
        'src/bower_components/bootstrap/dist/js/bootstrap.js',
        'src/bower_components/angular/angular.js',
        'src/app/**/*.js'
      ]
    });
  };
})();
