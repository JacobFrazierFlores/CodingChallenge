angular.
module('contactList').
component('contactList', {
    templateUrl: 'contact-list/contact-list.template.html',
    controller: ['db', function ContactListController(db) {
        var self = this;
        //Get contact-db from database and pass them the View
        db.get(function(response){
            self.contacts = response;
        });
    }]
});