angular.
module('contactDetails').
component('contactDetails', {
    templateUrl: 'contact-details/contact-details.template.html',
    controller: ['$http', '$filter',
        function ContactDetailsController($http, $filter) {
            var self = this;

            $http.get('contacts/seed.json').then(function(response) {
                self.contact = $filter('filter')(response.data.contacts, {id: 1})[0];
            });
        }
    ]
});