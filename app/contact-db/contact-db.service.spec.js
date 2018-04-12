'use strict';

describe('contactDb', function() {

    beforeEach(module('contactDb'));

    describe('DB service', function() {
        var $httpBackend, db;

        beforeEach(angular.mock.module({
            '$localStorage': {
                contacts: undefined
            }
        }));

        beforeEach(inject(function(_$httpBackend_, _db_) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('contact-db/seed.json')
                .respond(
                    {
                        "contacts": [
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
                            },
                            {
                                "id": 3,
                                "name": "Cletus Weatherly",
                                "phone": "(123) 456-7890",
                                "email": "cletus@netscape.com",
                                "birthday": "01/01/1980",
                                "avatar": "http://lorempixel.com/300/300/people/3"
                            }
                        ]
                    }
                );
            db = _db_;
        }));

        it('should create three contacts after receiving a response from the httpBackend', function(done) {
            db.get(function(contacts){
                expect(contacts.length).toEqual(3);
                done();
            });
            $httpBackend.flush();
        });

        it('should get the contact with the matching ID #', function (done) {
            db.getById(2, function(contact){
                expect(contact).toEqual({
                    "id": 2,
                    "name": "Johnathan Homebody",
                    "phone": "(123) 456-7890",
                    "email": "stayathomedad@wheresmom.com",
                    "birthday": "01/01/1980",
                    "avatar": "http://lorempixel.com/300/300/people/2"
                });
                done();
            });
        });

        it('should add a new contact after receiving a add request', function (done) {
            db.add({
                "name": "John",
                "phone" : "1234567890",
                "email": "email@email.com",
                "birthday": "10/01/1990",
                "avatar": "avatar.com"
            });
            db.get(function(contacts){
                expect(contacts.length).toEqual(4);
                done();
            });
        });

        it('should update the correct contact after receiving an update request', function (done) {
            db.update({
                "id": 3,
                "name": "newName",
                "phone": "(123) 456-7890",
                "email": "cletus@netscape.com",
                "birthday": "01/01/1980",
                "avatar": "http://lorempixel.com/300/300/people/3"
            });
            db.getById(3, function(contact){
                expect(contact.name).toEqual("newName");
                done();
            });
        });
    });

});