'use strict';

let gulp = require('gulp');
let rename = require('gulp-rename');
let cleanCSS = require('gulp-clean-css');
let sass = require('gulp-sass');

const config = {
    paths: {
        src:  './src',
        dist: './dist'
    }
};

gulp.task('sass', function () {
    return gulp.src(config.paths.src + '/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.paths.dist + '/css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch(config.paths.src + '/sass/**/*.scss', ['sass']);
});

gulp.task('default', function (done) {
    gulp.parallel(
        'sass',
        function() {

    });

    done();
});
