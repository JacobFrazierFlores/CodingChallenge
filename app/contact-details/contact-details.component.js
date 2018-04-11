angular.
module('contactDetails').
component('contactDetails', {
    templateUrl: 'contact-details/contact-details.template.html',
    controller: ['$routeParams', 'db', '$filter',
        function ContactDetailsController($routeParams, db, $filter) {
            var self = this;
            //Receive contact ID from the route parameters
            self.contactId = $routeParams.contactId;

            db.get(function(response) {
                // Select the contact with the matching ID using the filter service
                self.contact = $filter('filter')(response, {id: self.contactId})[0];
            });
        }
    ]
});