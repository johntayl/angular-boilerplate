/**
 * Users Create Controller
 */
window.angular.module('users.controllers.create', [])
.controller('UsersCreateCtrl', [
'$scope',
'$state',
'UsersService',
function( $scope, $state, UsersService ) {

    $scope.newUser = {
        name: '',
        avatar: '',
        bio: '',
    };


    $scope.submitForm = function() {
        var newUser = angular.copy($scope.newUser);

        UsersService.addUser(newUser);

        $state.go('app.users.list');
    };

}]);
