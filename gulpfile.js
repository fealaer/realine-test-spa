(function () {
  'use strict';

  var gulp = require('gulp')
    , livereload = require('gulp-livereload')
    , del = require('del')
    , serve = require('gulp-serve')
    , Server = require('karma').Server;

  gulp.task('watch', ['serve'], function () {
    livereload.listen();
    gulp.watch(['src/app/**/*.js', 'src/app/**/*.css', 'src/app/**/*.html'], ['test', 'livereload']);
  });

  gulp.task('test', function (done) {
    new Server({
      configFile: __dirname + '/karma.conf.js',
      singleRun: true
    }, done).start();
  });

  gulp.task('clean', function () {
    return del(['dist']);
  });

  gulp.task('serve', serve('src'));

  gulp.task('livereload', function () {
    livereload();
  });
})();
