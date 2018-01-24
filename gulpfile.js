'use strict';

let gulp = require('gulp');
let del = require('del');
let rename = require('gulp-rename');
let postcss = require('gulp-postcss');
let autoprefixer = require('autoprefixer');
let cleanCSS = require('gulp-clean-css');
let sass = require('gulp-sass');
let babel = require('gulp-babel');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify');
let sourcemaps = require('gulp-sourcemaps');
let browserSync = require('browser-sync').create();

let config = {
    paths: {
        src:  './src',
        dist: './dist',
    },
    scripts: {
        lib: {
            jquery: './node_modules/jquery/jquery.min.js',
            popper: './node_modules/popper.js/dist/popper.min.js'
        }
    }
};

gulp.task('clean', function () {
    return del(config.paths.dist);
});

gulp.task('sass', function () {
    return gulp.src(config.paths.src + '/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([ autoprefixer() ]))
        .pipe(gulp.dest(config.paths.dist + '/css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest(config.paths.dist + '/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('sass:watch', function (done) {
    gulp.watch(config.paths.src + '/sass/**/*.scss', gulp.series('sass'));
    done();
});

gulp.task('scripts', function () {
    return gulp.src([
        config.scripts.lib.jquery,
        config.scripts.lib.popper,
        './node_modules/bootstrap/js/src/util.js',
        config.paths.src + '/js/**/*.js',
    ])
        .pipe(sourcemaps.init())
        .pipe(babel({ presets: ['env'] }))
        .pipe(concat('scripts.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.paths.dist + '/js'))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest(config.paths.dist + '/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('scripts:watch', function (done) {
    gulp.watch(config.paths.src + '/js/**/*.js', gulp.series('scripts'));
    done();
});

gulp.task('copyfiles', function () {
    return gulp.src(config.paths.src + '/index.html')
        .pipe(gulp.dest(config.paths.dist))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('files:watch', function (done) {
    gulp.watch(config.paths.src + '/**/*.html', gulp.series('copyfiles'));
    done();
});

gulp.task('watch', gulp.parallel('sass:watch', 'scripts:watch', 'files:watch'));

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: './dist'
        },
    });
});

gulp.task('serve', gulp.series('clean', 'sass', 'scripts', 'copyfiles', gulp.parallel('watch', 'browserSync')));

gulp.task('default', function (done) {
    gulp.parallel(
        'sass',
        'scripts',
        'copyfiles'
    );

    done();
});
