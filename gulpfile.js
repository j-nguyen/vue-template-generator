const { src, series, dest, watch } = require('gulp');
const babel = require('gulp-babel');
const del = require('del');

function clean() {
    return del(['dist/**']);
}

function dev() {
    return src(['./lib/**/*.js', './lib/blueprints/**/*.js'])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(dest('dist'));
}

function copy() {
    return src('./lib/blueprints/**/**', { base: "./lib" })
        .pipe(dest('./dist'));
}

exports.build = series(clean, dev, copy);
watch('lib/*.js', series(clean, dev, copy));