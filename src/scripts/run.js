/**
 * Run Module
 */
window.app.run([
'$rootScope',
'$state',
function( $rootScope, $state ) {

    /**
     * State change start event handler.
     */
    var onStateChangeStart = function( event, next ) {
        //Check any requirements before navigating to the next state.
    };


    /**
     * State change error event handler.
     */
    var onStateChangeError = function( event, toState, toParams, fromState, fromParams, error ) {
        console.log(error);
    };


    /**
     * Initialize events
     */
    var initEvents = function() {
        //On state change start
        $rootScope.$on('$stateChangeStart', onStateChangeStart);

        //On state change error
        $rootScope.$on('$stateChangeError', onStateChangeError);
    };


    initEvents();
}]);
