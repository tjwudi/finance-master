var gulp = require('gulp'),
    livereload = require('gulp-livereload');

gulp.task('watch', function() {
  var server = livereload();
  gulp.watch(['views/**/*.jade', 'public/css/**/*.less'], function(event) {
    server.changed(event.path);
  });
});