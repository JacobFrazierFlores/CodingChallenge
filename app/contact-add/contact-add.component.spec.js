'use strict';

describe('contactAdd', function() {

    beforeEach(module('contactAdd'));

    describe('ContactAddController', function() {
        var db, ctrl;

        beforeEach(angular.mock.module({
            'db': {
                add: function(contact) {
                    expect(contact.name).toEqual("John");
                    expect(contact.email).toEqual("email@email.com");
                    expect(contact.phone).toEqual("1234567890");
                    expect(contact.birthday).toEqual("10/01/1990");
                    expect(contact.avatar).toEqual("avatar.com");
                }
            }
        }));

        beforeEach(inject(function($componentController) {
            ctrl = $componentController('contactAdd');
        }));

        it('should send an add request to the db service with accurate contact information', function() {
            ctrl.contact.name = "John";
            ctrl.contact.phone = "1234567890";
            ctrl.contact.email = "email@email.com";
            ctrl.contact.formatedBD = "1990-10-01";
            ctrl.contact.avatar = "avatar.com";
            ctrl.submit();
        });
    });

});