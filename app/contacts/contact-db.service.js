angular.
module('contactDb').
service('db', function($http) {
    var contacts = [];

    function getContacts(callBack){
        if(contacts.length === 0){
            $http.get('contacts/seed.json').then(function(response) {
                contacts = response.data.contacts;
                callBack(contacts);
            });
        }
        else{
            callBack(contacts);
        }
    }

    this.get = function get(callBack) {
        getContacts(callBack);
    };

    this.add = function add(contact){
        var con = contact;
        getContacts(function(){
            //Makes dangerous assumption contacts will never be deleted
            con.id = contacts.length;
            contacts.push(con);
        });
    };
});