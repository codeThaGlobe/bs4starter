'use strict';

let gulp = require('gulp');
let rename = require('gulp-rename');
let cleanCSS = require('gulp-clean-css');
let sass = require('gulp-sass');
let babel = require('gulp-babel');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify');
let sourcemaps = require('gulp-sourcemaps');

let config = {
    paths: {
        src:       './src',
        dist:      './dist',
    },
    scripts: {
        lib: {
            jquery: './node_modules/jquery/jquery.min.js',
            popper: './node_modules/popper.js/dist/popper.min.js'
        },
        bootstrap: [
            './node_modules/bootstrap/js/src/util.js'
        ]
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
    gulp.watch(config.paths.src + '/sass/**/*.scss', gulp.parallel('sass'));
});

gulp.task('scripts', function () {
    return gulp.src([
        config.paths.src + '/js/**/*.js',
        config.scripts.lib.jquery,
        config.scripts.lib.popper
    ])
        .pipe(sourcemaps.init())
        .pipe(babel({ presets: ['env'] }))
        .pipe(concat('scripts.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.paths.dist + '/js'))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest(config.paths.dist + '/js'));
});

gulp.task('scripts:watch', function () {
    gulp.watch(config.paths.src + '/sass/**/*.scss', gulp.parallel('sass'));
});

gulp.task('copyfiles', function () {
    return gulp.src(config.paths.src + '/index.html')
        .pipe(gulp.dest(config.paths.dist))
})

gulp.task('default', function (done) {
    gulp.parallel(
        'sass',
        'scripts',
        'copyfiles'
    );

    done();
});
