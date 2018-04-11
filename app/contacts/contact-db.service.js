angular.
module('contactDb').
service('db', function($http) {
    var contacts = [];

    function deepCopyArray(a){
        var copy = [];
        for(var i in a){
            copy.push(deepCopyContact(a[i]));
        }
        return copy;
    }

    function deepCopyContact(contact){
        return {
            id : contact.id,
            name : contact.name,
            phone : contact.phone,
            email : contact.email,
            birthday : contact.birthday,
            avatar : contact.avatar
        };
    }

    function getContacts(callBack){
        if(contacts.length === 0){
            $http.get('contacts/seed.json').then(function(response) {
                contacts = response.data.contacts;
                callBack(deepCopyArray(contacts));
            });
        }
        else{
            callBack(deepCopyArray(contacts));
        }
    }

    this.get = function get(callBack) {
        getContacts(callBack);
    };

    this.add = function add(contact){
        var con = deepCopyContact(contact);
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
                    contacts[i] = deepCopyContact(con);
                    break;
                }
            }
        });
    };
});