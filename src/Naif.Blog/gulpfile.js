﻿/// <binding AfterBuild='build' Clean='clean' />

var gulp = require("gulp");
var del = require("del");

var paths = {
    scripts: "./scripts/",
    cssSource: "./content/*.css",
    imageSource: "./images/*.*",
    imageTarget: "./wwwroot/images/",
    libSource: "./node_modules/",
    libTarget: "./wwwroot/lib/",
    cssTarget: "./wwwroot/css/",
    appTarget: "./wwwroot/app/"
}

var libs = [
];

gulp.task('build:bootstrap', function () {
    return gulp.src(paths.libSource + "bootstrap/dist/**/*.*").pipe(gulp.dest(paths.libTarget + "bootstrap/"));
});

gulp.task('build:jqcloud', function () {
    return gulp.src(paths.libSource + "jqcloud-npm/dist/**/*.*").pipe(gulp.dest(paths.libTarget + "jqcloud/"));
});

gulp.task('build:css', function () {
    return gulp.src(paths.cssSource).pipe(gulp.dest(paths.cssTarget));
});

gulp.task('build:images', function () {
    return gulp.src(paths.imageSource).pipe(gulp.dest(paths.imageTarget));
});

gulp.task('build:libs', function () {
    return gulp.src(libs).pipe(gulp.dest(paths.libTarget));
});

gulp.task("build", ["build:bootstrap", "build:jqcloud", "build:css", "build:images", "build:libs"]);


gulp.task("clean", function() {
    del([paths.imageTarget, paths.cssTarget]);
})