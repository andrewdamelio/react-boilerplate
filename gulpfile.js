'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');
var react = require('gulp-react');
var del = require('del');
var jshint = require('gulp-jshint');
var cache = require('gulp-cached');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var babelify = require("babelify");
gulp.task('sass', function() {
  gulp.src('./app/src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/dist'));
});

gulp.task('browserify', function() {
  browserify({ debug: true })
    .transform(babelify)
    .require('./app/src/js/app.js', { entry: true })
    .bundle()
    .on("error", function (err) { console.log("Error: " + err.message); })
    .pipe(source('app.js'))
    .pipe(jshint())
    .pipe(gulp.dest('./app/dist'));
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: './app/'
    }
  });
});

gulp.task('images', function () {
  gulp.src('./app/src/images/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('./app/dist/images'));
});

gulp.task('jshint', function() {
  var stream = gulp.src('./app/src/**/*.js')
    .pipe(cache('jshint'))
    .pipe(react())
    .on('error', function(err) {
      console.error('JSX ERROR in ' + err.fileName);
      console.error(err.message);
      this.end();
    })
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));

  if (process.env.CI) {
    stream = stream.pipe(jshint.reporter('fail'));
  }
  return stream;
});

gulp.task('uglify', function() {
  gulp.src('./app/dist/app.js')
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('./app/dist'));
});

gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(reload({stream:true}));
});

gulp.task('js', function () {
  gulp.src('./app/dist/**/*.js')
    .pipe(reload({stream:true}));
});

gulp.task('css', function () {
  gulp.src('./app/dist/**/*.css')
    .pipe(reload({stream:true}));
});

gulp.task('watch', function() {
  gulp.watch('./app/index.html', ['html']);
  gulp.watch('./app/dist/**/*.js', ['js']);
  gulp.watch('./app/dist/**/*.css', ['css']);
  gulp.watch('./app/src/**/*.scss', ['sass']);
  // gulp.watch('./app/src/**/*.js', ['jshint']);
  gulp.watch('./app/src/**/*.js', ['browserify']);
  gulp.watch('./app/src/images/*.*', ['images']);
});

gulp.task('clean', function (cb) {
  del([
    'app/dist/**'
  ], cb);
});

gulp.task('default', ['serve']);
gulp.task('serve', ['browserify', 'sass', 'images', 'browser-sync', 'watch']);
gulp.task('build', ['clean'], function () {
  gulp.start('browserify', 'sass', 'uglify', 'images');
});


