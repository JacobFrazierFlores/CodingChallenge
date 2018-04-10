angular.
module('contactList').
component('contactList', {
    templateUrl: 'contact-list/contact-list.template.html',
    controller: ['$http', function ContactListController($http) {
        var self = this;

        $http.get('contacts/seed.json').then(function(response) {
            self.contacts = response.data.contacts;
        });
    }]
});