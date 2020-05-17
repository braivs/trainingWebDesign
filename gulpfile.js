var
	gulp = require('gulp'),
	livereload = require("gulp-livereload"),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	pug =  require('gulp-pug'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('sass-compile', function(){
	return gulp.src('./sass/**/*.sass')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 3 versions'],
		cascade: false
	}))
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('./release/css/'))
})

gulp.task('pug', function(){
	return gulp.src('./*.pug')
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest('./release/'))
})

gulp.task('reload-css', function() {
	return gulp.src('./release/css/*.css')
	.pipe(livereload())
});

gulp.task('reload-html', function() {
	return gulp.src('./release/*.html')
	.pipe(livereload())
	//
});


gulp.task('default', function(){
	gulp.watch('./sass/**/*.sass', gulp.series('sass-compile'))
	gulp.watch('./*.pug', gulp.series('pug'))
	livereload.listen()
	gulp.watch('./release/css/*.css', gulp.series('reload-css'))
	gulp.watch('./release/*.html', gulp.series('reload-html'))
})
