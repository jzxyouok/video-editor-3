var gulp = require('gulp');
var bs = require('browser-sync').create();
var typescript = require('gulp-typescript');
var gulpTypings = require("gulp-typings");

var tsConfig =  {
        target: "es5",
        module: "commonjs",
        moduleResolution: "node",
        sourceMap: true,
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        removeComments: false,
        noImplicitAny: false,
        typeRoots: [
          "../node_modules/@types"
        ],
        types: [
          "core-js"
        ]
    };

gulp.task('installTypings', function () {
    return gulp.src("./typings.json")
        .pipe(gulpTypings());
});

gulp.task('typescript', function () {
    return gulp.src('src/**/*.ts')
        .pipe(typescript(tsConfig))
        .pipe(gulp.dest('app/build'));
});

gulp.task('default', ['typescript'], function () {
    bs.init({
        server: {
            baseDir:  './app'
        }
    });
    gulp.watch('app/**').on('change', bs.reload);
});