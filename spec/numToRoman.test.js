const NumToRoman = require('../src/numToRoman.js');

describe('NumToRoman', function() {
  var converter;

  beforeEach(function() {
    converter = new NumToRoman();
  });

  it('will only accept integer input', () => {
    expect(() => {converter.run(10)}).not.toThrowError(TypeError('Wrong input type'))
    expect(() => {converter.run("test string")}).toThrowError(TypeError('Wrong input type'))
    expect(() => {converter.run(true)}).toThrowError(TypeError('Wrong input type'))
  });
})


