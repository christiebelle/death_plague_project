var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('website functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });
});

  // write integration tests here in the form of "it should do something..."
  it('should have a landing page', function(done){
    this.timeout(15000);
    browser.get('http://localhost:3000');
    element(by.css("#enter")).click();
    browser.sleep(1000).then(function(done){
      expect(browser.getCurrentUrl()).toBe(homeUrl);
    })
    done();
  });
