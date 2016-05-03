var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var browserSync = require ('browser-sync');
var browserify = require ('browserify');
var reactify = require('reactify');
var souce = require('vinyl-source-stream');

/*Using gulp to start the server */
gulp.task('live-server' , function(){
    var server = new LiveServer('server/main.js')
    server.start();
})

gulp.task('bundle',function(){
    return browserify({
        entries:'app/main.jsx',
        debug:true,
        
    }).transform(reactify)
    .bundle()
    .pipe(souce('app.js'))
    .pipe(gulp.dest('./.tmp'));
})

/*Using browser sync  to start the server .This automatically opens up the localhost page at the given listening port */
gulp.task('serve',['bundle','live-server'],function(){
    browserSync.init(null,{
        proxy:"http://localhost:7777",
        port:9001
    })
})

