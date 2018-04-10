angular.
module('contactDetails').
component('contactDetails', {
    templateUrl: 'contact-details/contact-details.template.html',
    controller: ['$routeParams', '$http', '$filter',
        function ContactDetailsController($routeParams, $http, $filter) {
            var self = this;
            self.contactId = $routeParams.contactId;

            $http.get('contacts/seed.json').then(function(response) {
                self.contact = $filter('filter')(response.data.contacts, {id: self.contactId})[0];
                console.log(self.contact);
            });
        }
    ]
});