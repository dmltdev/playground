const gulp = require("gulp");
const cssnano = require("gulp-cssnano");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");

gulp.task("sass", function () {
  return gulp
    .src("app/style.scss")
    .pipe(sass())
    .pipe(cssnano())
    .pipe(gulp.dest("dist"));
});

gulp.task("js", function () {
  return gulp
    .src("app/*.js")
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist"));
});

gulp.task("watch", function () {
  gulp.watch("app/*.scss", gulp.series("sass"));
  gulp.watch("app/*.js", gulp.series("js"));
});

gulp.task("default", gulp.series("sass", "js", "watch"));
