'use strict';

describe('Service: Rootdata', function () {

  // load the service's module
  beforeEach(module('rootWebappApp'));

  // instantiate service
  var Rootdata;
  beforeEach(inject(function (_Rootdata_) {
    Rootdata = _Rootdata_;
  }));

  it('should do something', function () {
    expect(!!Rootdata).toBe(true);
  });

});
