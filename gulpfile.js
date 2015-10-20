var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
});
// 编译项目scss文件
gulp.task('scss2css',function(){
  return sass('www/resource/scss/global.scss',{
    sourcemap:true,
    style:'compressed',
    compass:true
  })
  .on('error',sass.logError)
  .pipe(sourcemaps.write())
  .pipe(sourcemaps.write('maps',{
    includeContent:false,
    sourceRoot:'www/resource/css'
  }))
  .pipe(gulp.dest('www/resource/css/'));
});
// 监听scss文件
gulp.task('watchScss', function () {
    gulp.watch('www/resource/scss/*.scss', ['scss2css']);
});
