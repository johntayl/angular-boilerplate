/**
 * Application configuration.
 */

//Removing tomcat unsupported headers
window.app.config(['$httpProvider',
function( $httpProvider, Configuration ) {
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
    angular.noop();
}]);

//Setting HTML5 Location Mode
window.app.config(['$locationProvider',
function( $locationProvider ) {
    // $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
}]);
