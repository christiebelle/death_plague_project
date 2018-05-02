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
  it('should have a landing page', function(){
    var expected;
    this.timeout(15000);
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
    element(by.css(".enter")).click();
    browser.sleep().then(function(){
      browser.getCurrentUrl().then(function(url){
      expected = url;
    }).then(function(){expect(expected).to.equal('http://localhost:3000/home')})})
  });
