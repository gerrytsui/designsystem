'use strict';

describe('Directive: pbPanelDraggableCollapsible', function () {

  // load the directive's module
  beforeEach(module('designSystemApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pb-panel-draggable-collapsible></pb-panel-draggable-collapsible>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the pbPanelDraggableCollapsible directive');
  }));
});
