let gulp = require('gulp');
let gulpLess = require('gulp-less');

gulp.task('default', function () {

    return gulp.watch(['styles/**/*.less', './index.less'], function (event) {
        less();
    });


    function less() {
        console.log('编译less');
        return gulp
            .src(['styles/index.less', './index.less'], {
                base: './'
            })
            .pipe(gulpLess())
            .pipe(gulp.dest('./'));
    }
});

