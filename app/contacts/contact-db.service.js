angular.
module('contactDb').
service('db', function($http, $localStorage) {
    var storage = $localStorage;

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
        if(!storage.contacts){
            $http.get('contacts/seed.json').then(function(response) {
                storage.contacts = response.data.contacts;
                callBack(deepCopyArray(storage.contacts));
            });
        }
        else{
            callBack(deepCopyArray(storage.contacts));
        }
    }

    this.get = function get(callBack) {
        getContacts(callBack);
    };

    this.add = function add(contact){
        var con = deepCopyContact(contact);
        getContacts(function(){
            //Makes dangerous assumption last contact has highest id #
            con.id = storage.contacts[storage.contacts.length - 1].id + 1;
            storage.contacts.push(con);
        });
    };

    this.update = function update(contact){
        var con = contact;
        getContacts(function(){
            //will have worse case run time of O(n), consider replacing w/ more efficient search algorithm if data set gets larger
            for (var i in storage.contacts) {
                if (storage.contacts[i].id === con.id) {
                    storage.contacts[i] = deepCopyContact(con);
                    break;
                }
            }
        });
    };
});