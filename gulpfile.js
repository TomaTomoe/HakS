var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');

var onError = function (err) {
    gutil.beep();
    console.log(err);
};

var src = {
    sass: 'src/scss/*.scss',
    css: 'src/css/**/*.css',
    html: ['*.html'],
    js: 'src/js/**/*.js',
    jsmin: 'dist/js'
};

gulp.task('serve', function () {

    browserSync({
        server:'./'
    });

    gulp.watch(src.js, ['minify-js']);
    gulp.watch(src.css).on('change', reload);
    gulp.watch(src.html).on('change', reload);
    gulp.watch(src.js).on('change', reload);
});

gulp.task('minify-js', function () {
    return gulp.src(src.js)
        .pipe(uglify())
        .pipe(gulp.dest(src.jsmin))
});

gulp.task('sass', function () {
 return gulp.src(src.sass)
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest('src/css/'));
});

gulp.task('sass:watch', function () {
  gulp.watch(src.sass, ['sass']);
});

gulp.task('default', ['serve', 'sass:watch']);
