angular.
module('contactList').
component('contactList', {
    templateUrl: 'contact-list/contact-list.template.html',
    controller: [function ContactListController() {
        this.contacts = [
            {name : "John"},
            {name : "Kate"},
            {name : "Pete"}
        ]
    }]
});