/**
 * AngularApp Router
 */
window.app.config([
'$stateProvider',
'$urlRouterProvider',
function( $stateProvider, $urlRouterProvider ) {

    $stateProvider

    .state('app', {
        views: {
            'header': {
                templateUrl: 'views/nav/header.html'
            },
            'content': {
                templateUrl: 'views/main.html'
            }
        }
    })

    // Home
    .state('app.home', {
        url: '/',
        templateUrl: 'views/home/home.html',
        controller: 'HomeCtrl'
    })

    //Users
    .state('app.users', {
        abstract: true,
        url: '/users',
        template: '<div ui-view></div>'
    })
        .state('app.users.list', {
            url: '',
            templateUrl: 'views/users/list.html',
            controller: 'UsersListCtrl'
        })
        .state('app.users.create', {
            url: '/create',
            templateUrl: 'views/users/create.html',
            controller: 'UsersCreateCtrl'
        })
        .state('app.users.details', {
            url: '/:userId',
            templateUrl: 'views/users/details.html',
            controller: 'UsersDetailsCtrl'
        })
        .state('app.users.edit', {
            url: '/edit/:userId',
            templateUrl: 'views/users/edit.html',
            controller: 'UsersEditCtrl'
        });

    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/');

}]);
