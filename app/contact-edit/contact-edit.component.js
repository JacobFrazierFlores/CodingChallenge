angular.
module('contactEdit').
component('contactEdit', {
    templateUrl: 'contact-add/contact-add.template.html',
    controller: ['$routeParams', 'db', '$filter', '$location',
        function ContactEditController($routeParams, db, $filter, $location) {
            var self = this;
            var contactId = $routeParams.contactId;

            db.get(function(response) {
                self.contact = $filter('filter')(response, {id: contactId})[0];
                if(self.contact.birthday != null && self.contact.birthday.length > 0) {
                    self.contact.formatedBD = new Date(self.contact.birthday);
                }
            });

            self.submit = function submit(){
                self.contact.birthday = $filter('date')(self.contact.formatedBD, "MM/dd/yyyy");
                db.update(self.contact);
                console.log('cat');
                $location.path( "/contacts/" + self.contact.id );
            };

            self.cancel = function cancel(){
                console.log('hello');
                $location.path( "/contacts/" + self.contact.id );
            };

        }
    ]
});