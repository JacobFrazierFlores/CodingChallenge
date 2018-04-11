angular.
module('contactsApp').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
        when('/contacts', {
            template: '<contact-list></contact-list>'
        }).
        when('/contacts/add', {
            template: '<contact-add></contact-add>'
        }).
        when('/contacts/:contactId', {
            template: '<contact-details></contact-details>'
        }).
        when('/contacts/edit/:contactId', {
            template: '<contact-edit></contact-edit>'
        }).
        otherwise('/contacts');
    }
]);