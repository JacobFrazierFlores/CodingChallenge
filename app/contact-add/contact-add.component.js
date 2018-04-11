angular.
module('contactAdd').
component('contactAdd', {
    templateUrl: 'contact-add/contact-add.template.html',
    controller: ['$http', function ContactAddController($http) {
        var self = this;
        self.contact = [];
        self.contact.name = '';
        self.contact.email = '';
        self.contact.phone = '';
        self.contact.birthday = '';
        self.contact.avatar = '';
        self.count = 0;
        self.addContact = function addContact(){
            console.log(self.contact);
        };
    }]
});