var eslint = require('gulp-eslint');
var gulp = require('gulp');
var mocha = require('gulp-mocha');


// var files = ['gulpfile.js', 'greet.js', 'hello_world.js', 'test/greet_test.js'];
gulp.task('lint', function() {
  return gulp.src(['**/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('mocha', function() {
  return gulp.src('test/server_test.js')
    .pipe(mocha());
});

gulp.task('default', ['lint', 'mocha']);
