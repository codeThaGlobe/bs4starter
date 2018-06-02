"use strict";

let gulp = require("gulp");
let del = require("del");
let rename = require("gulp-rename");
let postcss = require("gulp-postcss");
let autoprefixer = require("autoprefixer");
let cleanCSS = require("gulp-clean-css");
let sass = require("gulp-sass");
let babel = require("gulp-babel");
let concat = require("gulp-concat");
let uglify = require("gulp-uglify");
let sourcemaps = require("gulp-sourcemaps");
let browserSync = require("browser-sync").create();

let config = {
    paths: {
        src: "./src",
        dist: "./dist"
    }
};

// Cleans out the dist directory
gulp.task("clean", function() {
    return del(config.paths.dist);
});

// CSS
gulp.task("sass", function() {
    return (gulp
            .src(config.paths.src + "/sass/main.scss")
            .pipe(sass().on("error", sass.logError))
            // Required for Bootstrap CSS
            .pipe(postcss([autoprefixer()]))
            .pipe(gulp.dest(config.paths.dist + "/css"))
            .pipe(cleanCSS({ compatibility: "ie8" }))
            .pipe(rename({ extname: ".min.css" }))
            .pipe(gulp.dest(config.paths.dist + "/css"))
            .pipe(
                browserSync.reload({
                    stream: true
                })
            ) );
});

gulp.task("sass:watch", function(done) {
    gulp.watch(config.paths.src + "/sass/**/*.scss", gulp.series("sass"));
    done();
});

// Javascript
gulp.task("scripts", function() {
    return (gulp
            .src([
                "./node_modules/jquery/dist/jquery.min.js",
                "./node_modules/popper.js/dist/popper.js",
                // Add your required Bootstrap JS here
                config.paths.src + "/js/**/*.js"
            ])
            .pipe(sourcemaps.init())
            // Required for Bootstrap JS:
            .pipe(
                babel({
                    presets: ["env"],
                    plugins: [
                        "transform-object-rest-spread",
                        "transform-es2015-modules-strip"
                    ]
                })
            )
            .pipe(concat("scripts.js"))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(config.paths.dist + "/js"))
            .pipe(uglify())
            .pipe(rename({ extname: ".min.js" }))
            .pipe(gulp.dest(config.paths.dist + "/js"))
            .pipe(
                browserSync.reload({
                    stream: true
                })
            ) );
});

gulp.task("scripts:watch", function(done) {
    gulp.watch(config.paths.src + "/js/**/*.js", gulp.series("scripts"));
    done();
});

// HTML
gulp.task("files", function() {
    return gulp
        .src(config.paths.src + "/*.html")
        .pipe(gulp.dest(config.paths.dist))
        .pipe(
            browserSync.reload({
                stream: true
            })
        );
});

gulp.task("files:watch", function(done) {
    gulp.watch(config.paths.src + "/*.html", gulp.series("files"));
    done();
});

// Images
gulp.task("images", function() {
    return gulp
        .src(config.paths.src + "/img/**/*")
        .pipe(gulp.dest(config.paths.dist + "/img"))
        .pipe(
            browserSync.reload({
                stream: true
            })
        );
});

gulp.task("images:watch", function(done) {
    gulp.watch(config.paths.src + "/img/**/*", gulp.series("images"));
    done();
});

// Live-reload
gulp.task("browserSync", function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});

gulp.task(
    "watch",
    gulp.parallel("sass:watch", "scripts:watch", "files:watch", "images:watch")
);

gulp.task(
    "serve",
    gulp.series(
        "clean",
        "sass",
        "scripts",
        "files",
        "images",
        gulp.parallel("watch", "browserSync")
    )
);

gulp.task(
    "default",
    gulp.series("clean", gulp.parallel("sass", "scripts", "files", "images"))
);
