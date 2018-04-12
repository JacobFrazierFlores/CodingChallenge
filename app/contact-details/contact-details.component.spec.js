'use strict';

describe('contactDetails', function() {

    beforeEach(module('contactDetails'));

    // Test the controller
    describe('ContactDetailsController', function() {
        var ctrl;

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
                }
            }
        }));

        beforeEach(inject(function($componentController) {
            ctrl = $componentController('contactDetails', {$routeParams: {contactId: '2'}});
        }));

        it('should create three contact-db after receiving a response from the httpBackend', function() {
            expect(ctrl.contact).toEqual({
                "id": 2,
                "name": "Johnathan Homebody",
                "phone": "(123) 456-7890",
                "email": "stayathomedad@wheresmom.com",
                "birthday": "01/01/1980",
                "avatar": "http://lorempixel.com/300/300/people/2"
            });
        });
    });

});