angular.
module('contactEdit').
component('contactEdit', {
    templateUrl: 'contact-add/contact-add.template.html',
    controller: ['$routeParams', 'db', '$filter',
        function ContactEditController($routeParams, db, $filter) {
            var self = this;
            var contactId = $routeParams.contactId;

            db.get(function(response) {
                self.contact = $filter('filter')(response, {id: contactId})[0];
                if(self.contact.birthday != null && self.contact.birthday.length > 0) {
                    self.contact.formatedBD = new Date(self.contact.birthday);
                }
            });

            self.submit = function submit(){
                console.log('help');
                self.contact.birthday = $filter('date')(self.contact.formatedBD, "MM/dd/yyyy");
                db.update(self.contact);
            };

        }
    ]
});