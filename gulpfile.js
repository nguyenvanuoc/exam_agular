var gulp=require('gulp');
var browserSync=require('browser-sync').create();
var jade = require('gulp-jade');

var less=require("gulp-less");


// Static Server + watching scss/html files

gulp.task('serve',['less','jade'],function(){
	browserSync.init({
		server:'app'
	});
	gulp.watch("app/less/*.less",["less"]);
	gulp.watch("app/templates/*.jade",["jade"]);
	gulp.watch("app/*.html").on('change',browserSync.reload);

});
gulp.task('less',function(){
	return gulp.src("app/less/*.less")
		.pipe(less())
		.pipe(gulp.dest("app/css"))
		.pipe(browserSync.stream());

});
var jade = require('gulp-jade');
 
gulp.task('jade', function() {
  var YOUR_LOCALS = {};
 
  gulp.src('app/templates/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS,
      pretty:true,
    }))
    .pipe(gulp.dest('app/'))
    .pipe(browserSync.stream());
})

gulp.task('default',['serve','jade','less']);

