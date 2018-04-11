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
            //Makes dangerous assumption last contact has highest id #
            con.id = contacts[contacts.length - 1].id + 1;
            contacts.push(con);
        });
    };
});