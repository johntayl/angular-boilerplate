/**
 * Bundling Users dependencies
 */
window.angular.module('users', [
    'users.services.users',
    'users.controllers.users_list',
    'users.controllers.users_details',
    'users.controllers.users_create',
    'users.controllers.users_edit',
]);
