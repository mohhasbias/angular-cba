var gulp = require('gulp'),
	connect = require('gulp-connect'),
  inject = require('gulp-inject'),
  bowerFiles = require('main-bower-files'),
  runSequence = require('run-sequence'),
  angularFilesort = require('gulp-angular-filesort');

gulp.task('connect', function(){
	connect.server({
		livereload: true
	});
});

gulp.task('html', function(){
  gulp.src('./**/*.html', {read: false})
    .pipe(connect.reload());
});

gulp.task('css', function(){
	gulp.src('./app/**/*.css', {read: false})
		.pipe(connect.reload());
});

gulp.task('js', function(){
	gulp.src('./app/**/*.js', {read: false})
		.pipe(connect.reload());
});

gulp.task('watch', function(){
	gulp.watch(['./**/*.html'], ['html']);
	gulp.watch(['./app/**/*.css'], ['css']);
	gulp.watch(['./app/**/*.js'], ['js']);
  gulp.watch(['bower.json'], ['inject-bower']);
});

gulp.task('inject-bower', function(){
  return gulp.src('./index.html')
    .pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower'}))
    .pipe(gulp.dest('./'));
});

gulp.task('inject-app', function(){
  return gulp.src('./index.html')
    .pipe(inject(gulp.src(['./app/*.js']).pipe(angularFilesort()), {name: 'app'}))
    .pipe(gulp.dest('./'));
});

gulp.task('inject-app-components', function(){
  return gulp.src('./index.html')
    .pipe(inject(gulp.src(['./app/*/*.js']).pipe(angularFilesort()), {name: 'appcomponents'}))
    .pipe(gulp.dest('./'));
});

gulp.task('inject', function(callback){
  runSequence(
    'inject-bower',
    'inject-app',
    'inject-app-components',
    callback
  );
});

gulp.task('default', [
  'inject',
  'connect',
  'watch']);
