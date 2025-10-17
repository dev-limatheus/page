const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compilaSass() {
    return gulp.src('./src/styles/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./biuld/styles'))
}


exports.default = function () {
    gulp.watch('./src/styles/*scss', {ignoreInitial: false}, gulp.series(compilaSass));
}
