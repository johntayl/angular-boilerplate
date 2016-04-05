/**
 * Home Controller
 */
window.angular.module('home.controllers.home', [])
.controller('HomeCtrl', [
'$scope',
'UsersService',
function( $scope, UsersService ) {

    $scope.users = UsersService.users;

}]);
