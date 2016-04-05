/**
 * Users Edit Controller
 */
window.angular.module('users.controllers.users_edit', [])
.controller('UsersEditCtrl', [
'$scope',
'$state',
'UsersService',
function( $scope, $state, UsersService ) {

    $scope.user = UsersService.users[$state.params.userId];

    $scope.submitForm = function() {
        UsersService.users[$state.params.userId] = $scope.user;
        $state.go('app.users.list');
    };

}]);
