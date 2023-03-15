var gulp              = require('gulp');
var concat            = require('gulp-concat');
var minifycss         = require('gulp-minify-css')
var removeSourcemaps  = require('gulp-remove-sourcemaps');
var rename            = require("gulp-rename");
var sourcemaps        = require('gulp-sourcemaps');
var sass              = require('gulp-sass');
var uglify            = require('gulp-uglify');
sass.compiler         = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./scss/style.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(removeSourcemaps())
    .pipe(gulp.dest('./css'));
});

gulp.task('cssmin', function () {
  return gulp.src('./css/style.css')
    .pipe(minifycss({keepSpecialComments : 0}))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./css'));
});

gulp.task('cssrename', function () {
  return gulp.src('./css/style.css')
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./css'));
});


gulp.task('build', gulp.series([
  'sass',
  'cssmin'
]));

gulp.task('sass:watch', function () {
  gulp.watch([
    './scss/*.scss',
    './scss/**/*.scss',
    // './templates/patterns/**/*',
    // './templates/patterns/**/*.scss',
    // './js-src/*.js',
  ], gulp.series(['build']));
});

gulp.task('default', gulp.series(['sass:watch']));
