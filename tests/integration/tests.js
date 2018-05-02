var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('website functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have a landing page', function(){
    expect()
  });

  it('should display information when a tombstone is clicked', function(){
    expect()
  });

  it('should display a random crazy cure when Ask Plague Doctor is clicked', function(){
    expect()
  });
