'use strict'
describe('e2etest', function() {
  beforeEach(function() {
    browser.get('/#/');
  });

  it('this is e2e test', function() {
      expect(true).toBe(true);
  });
});
