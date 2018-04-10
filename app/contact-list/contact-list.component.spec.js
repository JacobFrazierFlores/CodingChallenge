'use strict';

describe('contactList', function() {

    beforeEach(module('contactList'));

    // Test the controller
    describe('ContactListController', function() {
        it('should create a contact model with 3 contacts', inject(function($componentController) {
            var ctrl = $componentController('contactList');

            expect(ctrl.contacts.length).toBe(3);
        }));

    });

});