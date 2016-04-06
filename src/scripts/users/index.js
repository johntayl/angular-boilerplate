/**
 * Bundling Users dependencies
 */
window.angular.module('users', [
    'users.services.users',
    'users.controllers.list',
    'users.controllers.details',
    'users.controllers.create',
    'users.controllers.edit',
]);
