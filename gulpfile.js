var gulp = require('gulp');
var gulpless = require('gulp-less');

gulp.task('default', function () {


    function watch() {

        gulp.watch('**/*.less', function (event) {
            gulp.src('**/[^_]*.less', {
                base: './'
            })
                 .pipe(gulpless())
                 .pipe(gulp.dest('./'));
        });
    }


    try {
        watch();
    } catch (e) {
        watch();
    }
});

