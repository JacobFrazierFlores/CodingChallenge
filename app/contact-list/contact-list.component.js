angular.
module('contactList').
component('contactList', {
    templateUrl: 'contact-list/contact-list.template.html',
    controller: ['db', function ContactListController(db) {
        var self = this;
        db.get(function(response){
            self.contacts = response;
        });
    }]
});