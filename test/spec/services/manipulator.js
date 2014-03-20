'use strict';

describe('Service: Manipulator', function () {

  // load the service's module
  beforeEach(module('rootWebappApp'));

  // instantiate service
  var Manipulator;
  beforeEach(inject(function (_Manipulator_) {
    Manipulator = _Manipulator_;
  }));

  it('should do something', function () {
    expect(!!Manipulator).toBe(true);
  });

});
