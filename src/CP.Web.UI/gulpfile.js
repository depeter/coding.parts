var gulp = require('gulp');
var install = require('gulp-install');

const PROD_DEST = './wwwroot/libs';

gulp.task('default', function () {
    return gulp.src(['./package.json'])
        .pipe(gulp.dest(PROD_DEST))
        .pipe(install({
            args: ['only=production']
        }));
});