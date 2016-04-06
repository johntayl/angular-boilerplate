/**
 * Users List Controller
 */
window.angular.module('users.controllers.list', [])
.controller('UsersListCtrl', [
'$scope',
'UsersService',
function( $scope, UsersService ) {

    $scope.users = UsersService.users;

}]);
