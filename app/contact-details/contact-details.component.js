angular.
module('contactDetails').
component('contactDetails', {
    templateUrl: 'contact-details/contact-details.template.html',
    controller: ['$routeParams', 'db', '$filter',
        function ContactDetailsController($routeParams, db, $filter) {
            var self = this;
            self.contactId = $routeParams.contactId;

            db.get(function(response) {
                self.contact = $filter('filter')(response, {id: self.contactId})[0];
            });
        }
    ]
});