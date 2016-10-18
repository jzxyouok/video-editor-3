var gulp = require('gulp');
var bs = require('browser-sync').create();

gulp.task('serve', function () {
    bs.init({
        server: {
            baseDir:  './app'
        }
    });
    gulp.watch('app/**').on('change', bs.reload);
});