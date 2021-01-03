var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('first', function() {
    return gulp.src('./scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./'))
})

gulp.task('watch', function() {
    gulp.watch('./*.html', gulp.series('first'))
    gulp.watch('./scss/**/*.scss', gulp.series('first'))
    gulp.watch('./js/**/*.js', gulp.series('first'))
})

gulp.task('default', gulp.series('watch'));