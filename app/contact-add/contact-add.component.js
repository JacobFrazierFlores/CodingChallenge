angular.
module('contactAdd').
component('contactAdd', {
    templateUrl: 'contact-add/contact-add.template.html',
    controller: ['db', function ContactAddController(db) {
        var self = this;
        self.contact = [];
        self.contact.name = '';
        self.contact.email = '';
        self.contact.phone = '';
        self.contact.birthday = '';
        self.contact.avatar = '';

        self.addContact = function addContact(){
            db.add(self.contact);
        };
    }]
});