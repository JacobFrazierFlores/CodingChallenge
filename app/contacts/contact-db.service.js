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
        var con = {
            name : contact.name,
            phone : contact.phone,
            email : contact.email,
            birthday : contact.birthday,
            avatar : contact.avatar
        };
        getContacts(function(){
            //Makes dangerous assumption last contact has highest id #
            con.id = contacts[contacts.length - 1].id + 1;
            contacts.push(con);
            console.log(contacts);
        });
    };

    this.update = function update(contact){
        var con = contact;
        getContacts(function(){
            //will have worse case run time of O(n), consider replacing w/ more efficient search algorithm if data set gets larger
            for (var i in contacts) {
                if (contacts[i].id == con.id) {
                    contacts[i].name = con.name;
                    contacts[i].phone = con.phone;
                    contacts[i].email = con.email;
                    contacts[i].birthday = con.birthday;
                    contacts[i].avatar = con.avatar;
                    break;
                }
            }
        });
    };
});