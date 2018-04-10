'use strict';

describe('contactDetails', function() {

    beforeEach(module('contactDetails'));

    // Test the controller
    describe('ContactDetailsController', function() {
        var $httpBackend, ctrl;
        beforeEach(inject(function($componentController, _$httpBackend_) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('contacts/seed.json')
                .respond({contacts : [
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
                ]});

            ctrl = $componentController('contactDetails');
        }));

        it('should create three contacts after receiving a response from the httpBackend', function() {
            expect(ctrl.contacts).toBeUndefined();

            $httpBackend.flush();
            expect(ctrl.contact).toEqual({
                "id": 1,
                "name": "Erin Eyeball",
                "phone": "(123) 456-7890",
                "email": "one.eye.open@ilumin.com",
                "birthday": "01/01/1980",
                "avatar": "http://lorempixel.com/300/300/people/1"
            });
        });
    });

});