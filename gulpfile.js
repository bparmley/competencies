var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var mocha = require('gulp-mocha');

gulp.task('vet', function() {
    return gulp.src('./routes/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish', {verbose: true}))
    .pipe(jshint.reporter('fail'))
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/javascripts'))
});

gulp.task('test', ['vet'], function(){
    return gulp.src('./test/test.js', {read: false})
    .pipe(mocha({reporter: 'spec'}));
});