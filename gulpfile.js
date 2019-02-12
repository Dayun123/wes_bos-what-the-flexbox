"use strict";

// In order to use this file as a template, you will need to run `npm install --save-dev |package| on each of the packages below.
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer'); // prefixes for browsers
const csso = require('gulp-csso'); // minifiy css
const htmlmin = require('gulp-htmlmin'); // minify html
const concat = require('gulp-concat'); // concat into one file

// make sure to install reset-css!

// CSS tasks
function css() {
  return gulp
  // minify and prefix the reset and any css files in this project.
    .src(['node_modules/reset-css/reset.css', './*.css']) // the file(s) you want the task performed on
    .pipe(autoprefixer({ // the plugin to use
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(csso()) // minify css
    .pipe(concat('style.min.css')) // concat all css files into one file
    .pipe(gulp.dest('build')); // the destination for the finished file
}

// HTML tasks
function html() {
  return gulp
    .src('./index.html') // file you want task performed on
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('build'));
}

// Watch files
function watchFiles() {
  gulp.watch("./style.css", css); // which file to watch, and which task to run
  gulp.watch("./index.html", html);
}

// Defines the tasks, can run on command line with gulp [task_name]
exports.css = css; // `gulp css` on command line will run the css task
exports.html = html;
exports.watch = watchFiles; // `gulp watch` will run watch task