'use strict';

describe('contactList', function() {

    beforeEach(module('contactList'));

    // Test the controller
    describe('ContactListController', function() {
        var $httpBackend, ctrl;
        beforeEach(inject(function($componentController, _$httpBackend_) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('contacts/seed.json')
                .respond({contacts : [{name: 'John'}, {name: 'Kate'}, {name : 'Pete'}]});

            ctrl = $componentController('contactList');
        }));

        it('should create three contacts after receiving a response from the httpBackend', function() {
            expect(ctrl.contacts).toBeUndefined();

            $httpBackend.flush();
            expect(ctrl.contacts).toEqual([{name: 'John'}, {name: 'Kate'}, {name : 'Pete'}]);
        });
    });

});