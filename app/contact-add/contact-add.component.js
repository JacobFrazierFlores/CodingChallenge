angular.
module('contactAdd').
component('contactAdd', {
    templateUrl: 'contact-add/contact-add.template.html',
    controller: ['$filter', '$location', 'db', function ContactAddController($filter, $location, db) {
        var self = this;
        self.contact = [];
        self.contact.name = '';
        self.contact.email = '';
        self.contact.phone = '';
        self.contact.birthday = '';
        self.contact.avatar = '';

        self.submit = function submit(){
            if(self.contact.formatedBD){
                self.contact.birthday = $filter('date')(self.contact.formatedBD, "MM/dd/yyyy");
            }
            db.add(self.contact);
            $location.path( "/");
        };

        self.cancel = function cancel(){
            $location.path( "/");
        };
    }]
});