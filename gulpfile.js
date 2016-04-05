
// --------------------------------------
// Setup
// --------------------------------------

var fs          = require( 'fs' );
var colors      = require( 'colors/safe' );
var cheerio     = require( 'cheerio' );
var path        = require( 'path' );
var bower       = require( 'main-bower-files' );
var neat        = require( 'node-neat' ).includePaths;
var gulp        = require( 'gulp' );
var plugins     = require( 'gulp-load-plugins' )();
var merge2      = require( 'merge2' );
var minify      = require( 'gulp-minify' );
var cleanCss    = require( 'gulp-clean-css' );
var jade        = require( 'gulp-jade' );
var debug       = require( 'gulp-debug' );
var notifier    = require( 'node-notifier' );

var publicPaths = {
    src: './src/',
    dest: './build/',
    bower: './bower_components/',
    templates: './src/views/'
};


// --------------------------------------
// Helpers
// --------------------------------------

var handleError = function( error ) {
    console.log( error.toString() );

    notifier.notify({
        title: 'Gulp Error',
        message: error.message,
        icon: path.join(__dirname, 'gulp.png'),
        sound: true
    });

    this.emit( 'end' );

};

// --------------------------------------
// Default / Build Tasks
// --------------------------------------

gulp.task( 'default', [ 'images',  'scripts', 'styles', 'watch' ] );
gulp.task( 'build', [ 'images', 'scripts', 'styles' ] );

// --------------------------------------
// Watch Task
// --------------------------------------

gulp.task( 'watch', function() {
    plugins.livereload.listen();

    gulp.watch( publicPaths.src + '{scripts,views}/**/*.{js,jade}', [ 'scripts' ]);
    gulp.watch( publicPaths.src + 'styles/**/*.scss', [ 'styles' ] );
    gulp.watch( publicPaths.src + 'img/**/*.{jpg,jpeg,gif,png,svg,ico,webp}', [ 'images' ] );


} );


// --------------------------------------
//  Images Task
// --------------------------------------

gulp.task( 'images', function() {

    //Public
    var publicFiles = [
        publicPaths.src + 'img/*.{jpg,png,gif,svg,jpeg,ico,webp}'
    ];
    gulp.src( publicFiles ).pipe( gulp.dest( publicPaths.dest + 'img' ) );

} );



// --------------------------------------
// Styles Task
// --------------------------------------

gulp.task( 'styles', function() {
    gulp.src( publicPaths.src + 'styles/*.scss' )
      .pipe( plugins.sass( {
          errLogToConsole: true,
          includePaths: []
      }))
      .on( 'error', handleError )
      .pipe( gulp.dest( publicPaths.dest + 'styles') )
      .pipe( plugins.livereload( { auto: false } ) );

} );

// --------------------------------------
// Scripts Task
// --------------------------------------

gulp.task( 'scripts', function() {

    // Public

    //libraries
    var libraries = gulp.src( [
        publicPaths.bower + 'jquery/dist/jquery.js',
        publicPaths.bower + 'angular/angular.js',
        publicPaths.bower + 'angular-resource/angular-resource.js',
        publicPaths.bower + 'angular-ui-router/release/angular-ui-router.js',
        publicPaths.bower + 'angular-bootstrap/ui-bootstrap.js',
        publicPaths.bower + 'angular-bootstrap/ui-bootstrap-tpls.js',
    ] );

    // Template Files
    var templates = gulp.src( publicPaths.src + '**/*.jade' )
        .pipe( plugins.jade( { pretty: true, doctype: 'html'} ) )
        .pipe( plugins.angularTemplatecache( 'templates.js', {
            root: '',
            templateHeader: "window.angular.module('<%= module %>', []).run(['$templateCache', function($templateCache) {"
        } ) );

    // Application Files
    var application = gulp.src( [
        publicPaths.src + 'scripts/**/*.js',
    ] );


    // Cross the Streams
    // http://bit.ly/1GMiydd
    merge2( libraries, templates, application )
        .pipe( plugins.concat( 'all.js' ) )
        .pipe( gulp.dest( publicPaths.dest + 'scripts' ) )
        .pipe( plugins.livereload( { auto: false } ) );

} );


// --------------------------------------
// Compress Task
// --------------------------------------

gulp.task( 'compress', function() {

    // CSS
    gulp.src(publicPaths.dest + 'styles/style.css')
        .pipe(cleanCss({debug: true}, function( details ) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest(publicPaths.dest + 'styles'));


    // JS
    gulp.src(publicPaths.dest + 'scripts/all.js')
        .pipe(minify({
            ext: {
                min: '.min.js'
            }
        }))
        .pipe(gulp.dest(publicPaths.dest + 'scripts'));

} );
