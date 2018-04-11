angular.
module('navigation').
component('navigation', {
    templateUrl: 'navigation/navigation.template.html',
    controller: function NavigationController() {
        var self = this;
        self.contactList = "active";
        self.addContact = "";
        self.activateList = function activateList(){
            self.contactList = "active";
            self.addContact = "";
        };
        self.activateAdd = function activateAdd(){
            self.contactList = "";
            self.addContact = "active";
        };
    }
});