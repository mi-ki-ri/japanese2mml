var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('min-js', function(){
  return browserify({
    entries: ['src/js/main.js']
  })
  .bundle()
  .pipe(source('main.js'))
    .pipe(gulp.dest('public/js'));
});


gulp.task('default', ['min-js']);
