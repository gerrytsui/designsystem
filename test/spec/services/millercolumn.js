'use strict';

describe('Service: millerColumn', function () {

  // load the service's module
  beforeEach(module('designSystemApp'));

  // instantiate service
  var millerColumn;
  beforeEach(inject(function (_millerColumn_) {
    millerColumn = _millerColumn_;
  }));

  it('should do something', function () {
    expect(!!millerColumn).toBe(true);
  });

});
