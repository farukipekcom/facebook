var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
gulp.task('first', function() {
    return gulp.src('./scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./'))
})

gulp.task('html', () => {
    return gulp.src('views/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./'))
})

gulp.task('watch', function() {
    gulp.watch('./*.html', gulp.series('first'))
    gulp.watch('./scss/**/*.scss', gulp.series('first'))
    gulp.watch('./js/**/*.js', gulp.series('first'))
    gulp.watch('./**/*.pug', gulp.series('html'))
})

gulp.task('default', gulp.series('watch'));