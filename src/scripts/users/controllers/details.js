/**
 * Users Details Controller
 */
window.angular.module('users.controllers.users_details', [])
.controller('UsersDetailsCtrl', [
'$scope',
'$state',
'UsersService',
function( $scope, $state, UsersService ) {

    $scope.user = UsersService.users[$state.params.userId];

}]);
