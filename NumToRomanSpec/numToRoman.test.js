const NumToRoman = require('../src/numToRoman.js');

describe('Check whole program runs', function() {
  
  it('can handle complex numbers', () => {
    converter = new NumToRoman(5);
    expect(converter.run()).toEqual("V")

    converter = new NumToRoman(10);
    expect(converter.run()).toEqual("X")

    converter = new NumToRoman(100);
    expect(converter.run()).toEqual("C")

  });

  it('will only accept integer input', () => {
    converter = new NumToRoman(100);
    expect(() => {converter.run()}).not.toThrowError(Error('Wrong input type'))

    converter = new NumToRoman("test string two");
    expect(() => {converter.run()}).toThrowError(Error('Wrong input type'))

    converter = new NumToRoman(false);
    expect(() => {converter.run()}).toThrowError(Error('Wrong input type'))
  });

  it('will not accept integers that are too large', () => {
    converter = new NumToRoman(6666);
    expect(() => {converter.run()}).toThrowError(Error('Input too large, input must be less than 1000'))

    converter = new NumToRoman(5432);
    expect(() => {converter.run()}).toThrowError(Error('Input too large, input must be less than 1000'))
  });

})


