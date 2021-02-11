const NumToRoman = require('../src/numToRoman.js');

describe('NumToRoman', function() {
  var converter;

  it('will only accept integer input', () => {
    converter = new NumToRoman();
    expect(() => {converter.run(10)}).not.toThrowError(Error('Wrong input type'))

    converter = new NumToRoman();
    expect(() => {converter.run("test string")}).toThrowError(Error('Wrong input type'))

    converter = new NumToRoman();
    expect(() => {converter.run(true)}).toThrowError(Error('Wrong input type'))
  });

  it('will return the correct value for main types of number when given seperatley', () => {
   
    converter = new NumToRoman();
    expect(converter.run(1)).toEqual("I")
    
    converter = new NumToRoman();
    expect(converter.run(5)).toEqual("V")
    
    converter = new NumToRoman();
    expect(converter.run(10)).toEqual("X")
        
  });

  it('can handle complex numbers', () => {
    converter = new NumToRoman();
    expect(converter.run(15)).toEqual("XV")
  });

})


