angular.
module('contactDetails').
component('contactDetails', {
    templateUrl: 'contact-details/contact-details.template.html',
    controller: ['$routeParams', 'db', '$filter',
        function ContactDetailsController($routeParams, db, $filter) {
            var self = this;
            //Receive contact ID from the route parameters
            self.contactId = $routeParams.contactId;

            db.getById(self.contactId, function(response) {
                self.contact = response;
            });
        }
    ]
});