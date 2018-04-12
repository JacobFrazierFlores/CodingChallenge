'use strict';

describe('contactEdit', function() {

    beforeEach(module('contactEdit'));

    describe('ContactEditController', function() {
        var db, ctrl;
        var contactId = 2;

        beforeEach(angular.mock.module({
            'db': {
                get: function(callBack) {
                    callBack([
                        {
                            "id": 1,
                            "name": "Erin Eyeball",
                            "phone": "(123) 456-7890",
                            "email": "one.eye.open@ilumin.com",
                            "birthday": "01/01/1980",
                            "avatar": "http://lorempixel.com/300/300/people/1"
                        },
                        {
                            "id": 2,
                            "name": "Johnathan Homebody",
                            "phone": "(123) 456-7890",
                            "email": "stayathomedad@wheresmom.com",
                            "birthday": "01/01/1980",
                            "avatar": "http://lorempixel.com/300/300/people/2"
                        }
                    ]);
                },
                update: function(contact) {
                    expect(contact.id).toBe(contactId);
                    expect(contact.name).toEqual("John");
                    expect(contact.email).toEqual("email@email.com");
                    expect(contact.phone).toEqual("1234567890");
                    expect(contact.birthday).toEqual("10/01/1990");
                    expect(contact.avatar).toEqual("avatar.com");
                }
            }
        }));

        beforeEach(inject(function($componentController) {
            ctrl = $componentController('contactEdit', {$routeParams: {contactId: contactId}});
        }));

        it('should start with original contact information', function() {
            expect(ctrl.contact).toEqual({
                "id": 2,
                "name": "Johnathan Homebody",
                "phone": "(123) 456-7890",
                "email": "stayathomedad@wheresmom.com",
                "birthday": "01/01/1980",
                "formatedBD" : new Date(1980, 0, 1),
                "avatar": "http://lorempixel.com/300/300/people/2"
            });
        });

        it('should send an update request to db service with new contact information', function(){
            ctrl.contact.name = "John";
            ctrl.contact.phone = "1234567890";
            ctrl.contact.email = "email@email.com";
            ctrl.contact.formatedBD = "1990-10-01";
            ctrl.contact.avatar = "avatar.com";
            ctrl.submit();
        })
    });

});