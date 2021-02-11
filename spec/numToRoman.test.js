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

  it('will return the correct value for main types of number when given seperatley', () => {
    converter = new NumToRoman();
    expect(converter.run(1)).toEqual("I")
    
    converter = new NumToRoman();
    expect(converter.run(5)).toEqual("V")
    
    converter = new NumToRoman();
    expect(converter.run(10)).toEqual("X")
    
    converter = new NumToRoman();
    expect(converter.run(50)).toEqual("L")
    
    converter = new NumToRoman();
    expect(converter.run(100)).toEqual("C")
    
    converter = new NumToRoman();
    expect(converter.run(500)).toEqual("D")
    
    converter = new NumToRoman();
    expect(converter.run(1000)).toEqual("M")
  })

})


