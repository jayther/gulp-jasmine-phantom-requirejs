'use strict';
var gulp = require('gulp'),
  jasmine = require('./'),
  watch = require('gulp-watch');

// Default unit test
gulp.task('default', function () {
	return gulp.src('fixture.js').pipe(jasmine());
});

// Passing options in specifying integration tests
gulp.task('test-integration', function() {
  return gulp.src('integration.js')
    .pipe(jasmine({
      integration: true,
      keepRunner: true
    }));
});

gulp.task('dev', function() {
    gulp.watch('./*.js', ['test-integration']);
});
