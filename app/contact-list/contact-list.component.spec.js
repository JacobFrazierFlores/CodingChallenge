'use strict';

describe('contactList', function() {

    beforeEach(module('contactList'));

    // Test the controller
    describe('ContactListController', function() {
        var db, ctrl;

        beforeEach(angular.mock.module({
            'db': {
                get: function(callBack) {
                    callBack([{name: 'John'}, {name: 'Kate'}, {name : 'Pete'}]);
                }
            }
        }));

        beforeEach(inject(function($componentController) {
            ctrl = $componentController('contactList');
        }));

        it('should create three contact-db after receiving a response from the httpBackend', function() {
            expect(ctrl.contacts).toEqual([{name: 'John'}, {name: 'Kate'}, {name : 'Pete'}]);
        });
    });

});