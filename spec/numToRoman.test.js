const NumToRoman = require('../src/numToRoman.js');

describe('NumToRoman', function() {
  var converter;

  beforeEach(function() {
    converter = new NumToRoman();
  });

  it('can return a string when given an integer', function() {
    converter = new NumToRoman();
    expect(converter.run(10)).toEqual("X");
  });
  
})


