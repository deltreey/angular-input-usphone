'use strict';

describe('Directive: phone', function () {

  beforeEach(module('app'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should show the phone number in a standard US format', inject(function ($compile) {
    scope.test = '1234567890';
    element = angular.element('<input ng-model="test" type="text" phone />');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.val()).toBe('(123) 456-7890');
  }));
});
