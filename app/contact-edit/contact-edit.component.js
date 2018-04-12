angular.
module('contactEdit').
component('contactEdit', {
    //Uses the same template as the addContact module
    templateUrl: 'contact-add/contact-add.template.html',
    controller: ['$routeParams', 'db', '$filter', '$location',
        function ContactEditController($routeParams, db, $filter, $location) {
            var self = this;
            //Store contact ID from route parameters
            var contactId = $routeParams.contactId;

            db.getById(contactId, function(response) {
                //Select contact with matching id
                self.contact = response;
                //If the birthday is not null or black, reformat it to match HTML5 data type
                if(self.contact.birthday != null && self.contact.birthday.length > 0) {
                    self.contact.formatedBD = new Date(self.contact.birthday);
                }
            });

            self.submit = function submit(){
                // If the user input a birthday, reformat to fit database standard
                if(self.contact.formatedBD) {
                    self.contact.birthday = $filter('date')(self.contact.formatedBD, "MM/dd/yyyy");
                }
                db.update(self.contact);
                // Redirect to contact details page
                $location.path( "/contact-db/" + self.contact.id );
            };

            self.cancel = function cancel(){
                $location.path( "/contact-db/" + self.contact.id );
            };

        }
    ]
});