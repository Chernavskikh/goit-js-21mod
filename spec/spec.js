var app = require('../js/app.js');

describe("app", function() {
  it("call app", function() {
  	//prepare
  	var result;
  	//act
  	result = app.pow(3, 4);
  	//assert 
    expect(result).toBe(81);
  });
});