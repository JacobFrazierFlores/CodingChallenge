angular.
module('contactAdd').
component('contactAdd', {
    templateUrl: 'contact-add/contact-add.template.html',
    controller: ['$filter', '$location', 'db', function ContactAddController($filter, $location, db) {
        //Set contact defaults
        var self = this;
        self.contact = [];
        self.contact.name = '';
        self.contact.email = '';
        self.contact.phone = '';
        self.contact.birthday = '';
        self.contact.avatar = '';

        // Add contact submit button click handler
        self.submit = function submit(){
            // If the user input a birthday, reformat to fit database standard
            if(self.contact.formatedBD){
                self.contact.birthday = $filter('date')(self.contact.formatedBD, "MM/dd/yyyy");
            }
            db.add(self.contact);
            // Redirect to contact list
            $location.path( "/");
        };

        self.cancel = function cancel(){
            $location.path( "/");
        };
    }]
});