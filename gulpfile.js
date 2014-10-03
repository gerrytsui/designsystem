/**
 * Require all of the required modules
 */
var gulp = require('gulp'),
  sass = require('gulp-sass'),
  cssmin = require('gulp-cssmin'),
  rename = require('gulp-rename'),
  scsslint = require('gulp-scss-lint')
  del = require('del');

/**
 * Task to delete the dist folder
 */
gulp.task('clean', function (cb) {
  return del(['output'], cb);
});

/**
 * Task to compile sass, and minimize it, then copy it all to the dist folder
 */
gulp.task('sass', function() {
  gulp.src('./src/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'))
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./dist/css'));
});

/**
 * Task to copy the fonts from their respective spaces, to the dist folder
 */
gulp.task('fonts', function() {
  // Font awesome fonts
  gulp.src('./bower_components/font-awesome/fonts/**/*')
    .pipe(gulp.dest('./dist/fonts/font-awesome'));

  // Bootstrap fonts
  gulp.src('./bower_components/bootstrap-sass-official/assets/fonts/bootstrap/**/*')
    .pipe(gulp.dest('./dist/fonts/bootstrap'));

  // PB fonts
  gulp.src('./src/fonts/pb/**/*')
    .pipe(gulp.dest('./dist/fonts/pb'));
});

/**
 * Task to run task(s) when watched files change
 */
gulp.task('watch', function() {
  gulp.watch('src/sass/**/*.scss', ['test', 'sass']);
});

/**
 * Task to run tests
 */
gulp.task('test', function() {
  gulp.src('/scss/*.scss')
    .pipe(scsslint());
});

/**
 * Buld task
 */
gulp.task('build', ['clean', 'sass', 'fonts']);
/**
 * Default task
 */
gulp.task('default', ['test', 'build']);
