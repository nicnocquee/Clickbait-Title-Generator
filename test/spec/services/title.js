'use strict';

describe('Service: Title', function () {

  // load the service's module
  beforeEach(module('clickbaitApp'));

  // instantiate service
  var Title;
  beforeEach(inject(function (_Title_) {
    Title = _Title_;
  }));

  it('should do something', function () {
    expect(!!Title).toBe(true);
  });

});
