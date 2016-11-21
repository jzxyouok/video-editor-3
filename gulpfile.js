var gulp = require('gulp');
var bs = require('browser-sync').create();
var typescript = require('gulp-typescript');
var gulpTypings = require("gulp-typings");

var tsConfig =  require('./tsconfig.json');

gulp.task('installTypings', function () {
    return gulp.src("./typings.json")
        .pipe(gulpTypings());
});

gulp.task('typescript', function () {
    return gulp.src('app/src/**/*.ts')
        .pipe(typescript(tsConfig))
        .pipe(gulp.dest('app/build'));
});

gulp.task('default', ['typescript'], function () {
    bs.init({
        server: {
            baseDir:  './',
            index: './app/index.html'
        }
    });
    gulp.watch('app/index.html', bs.reload);
    gulp.watch('app/src/**/*.ts', ['typescript', bs.reload]);
    gulp.watch('app/scripts/**', bs.reload);
    gulp.watch('app/styles/**', bs.reload);
    gulp.watch('app/templates/**', bs.reload);
    gulp.watch('app/source/**', bs.reload);
});
