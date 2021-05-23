'use strict';

// VARIABLES
const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');

// FUNCIONES
exports.sass = () => {
  return src('./sass/**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(dest('./css'));
};

exports.minify = () => {
  return src('./sass/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(dest('./css'));
};

exports.default = () => {
  watch('./sass/**/*.scss', this.sass);
};
