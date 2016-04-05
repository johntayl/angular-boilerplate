/**
 * Users Service
 */
window.angular.module('users.services.users', [])
.factory('UsersService', [
function() {

    /**
     * Users Service
     *
     * Holds a list of users that can be deleted, edited. Or can create a new user.
     *
     * Avatars taken from http://uifaces.com/
     */
    var usersService = {
        users: [
            {
                name: 'Jina',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jina/128.jpg',
                bio: 'lead designer, design systems'
            },
            {
                name: 'Brynn Evans',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
                bio: 'Design Lead of Project Fi. Love adventures, green tea, and the color pink.'
            },
            {
                name: 'Sindre Sorhus',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/sindresorhus/128.jpg',
                bio: 'Aspiring rebel.'
            },
            {
                name: 'Mike Kamanski',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ripplemdk/128.jpg',
                bio: 'I like to create things. UI & Visual Designer'
            },
            {
                name: 'Marco Gomes',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcogomes/128.jpg',
                bio: 'Fundador: boo-box (vendida em 2015)'
            },
            {
                name: 'Jono Hunt',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jonohunt/128.jpg',
                bio: 'Expressed opinions are fully supported & represented by every client & company I\'ve ever worked for. Ever.'
            }
        ]
    };


    /**
     * Add a user to the list of users.
     */
    usersService.addUser = function( newUser ) {
        usersService.users.push(newUser);
    };


    /**
     * Remove a user from the list.
     */
    usersService.removeUser = function( index ) {
        usersService.users.splice(index, 1);
    };


    return usersService;

}]);
