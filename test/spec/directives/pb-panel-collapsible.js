'use strict';

describe('Directive: pbPanelCollapsible', function () {

  // load the directive's module
  beforeEach(module('designSystemApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pb-panel-collapsible></pb-panel-collapsible>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the pbPanelCollapsible directive');
  }));
});
