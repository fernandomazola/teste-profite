var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');


function compressimages(){
    gulp.src(['../img/**/*'])
        .pipe(imagemin())
        .pipe(gulp.dest('../img'));
}

gulp.task('compilar-sass', function(){
    return gulp.src(['*.scss','../scss/*.scss'])
        .pipe(sass().on('error',function(err){
            console.log(err);
        }))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('../css'))
});

gulp.task('monitorar-sass', function(){
    gulp.watch(['*.scss','../scss'], gulp.series('compilar-sass'));
});




gulp.task('build-img', compressimages);
gulp.task('build-sass', gulp.series('monitorar-sass'));