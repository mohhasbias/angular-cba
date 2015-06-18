var gulp = require('gulp'),
	connect = require('gulp-connect'),
  inject = require('gulp-inject'),
  bowerFiles = require('main-bower-files');

gulp.task('connect', ['inject-bower'], function(){
	connect.server({
		livereload: true
	});
});

gulp.task('html', function(){
	gulp.src('./**/*.html')
		.pipe(connect.reload());
});

gulp.task('css', function(){
	gulp.src('./**/*.css')
		.pipe(connect.reload());
});

gulp.task('js', function(){
	gulp.src('./**/*.js')
		.pipe(connect.reload());
});

gulp.task('watch', function(){
	gulp.watch(['./**/*.html'], ['html']);
	gulp.watch(['./**/*.css'], ['css']);
	gulp.watch(['./**/*.js'], ['js']);
  gulp.watch(['bower.json'], ['inject-bower']);
});

gulp.task('inject-bower', function(){
  gulp.src('./index.html')
    .pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower'}))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['inject-bower', 'connect', 'watch']);
