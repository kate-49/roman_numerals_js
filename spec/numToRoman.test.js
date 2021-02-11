const NumToRoman = require('../src/numToRoman.js');

describe('NumToRoman', function() {
  var converter;

  beforeEach(function() {
    converter = new NumToRoman();
  });

  it('can return a string when given an integer', function() {
    expect(converter.run(10)).toEqual("X");
  });
  
  it('will raise errors when not given correct input', function() {
    expect(converter.run(10.00)).toThrow(new Error("Incorrect input type"));
    expect(converter.run("test string")).toThrow(new Error("Incorrect input type"));
    expect(converter.run(true)).toThrow(new Error("Incorrect input type"));
  });
})


