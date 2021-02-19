const NumToRoman = require('../src/numToRoman.js');

describe('NumToRoman', function() {
  var converter;

  it('will only accept integer input', () => {
    converter = new NumToRoman(10);
    expect(() => {converter.run()}).not.toThrowError(Error('Wrong input type'))

    converter = new NumToRoman("test string");
    expect(() => {converter.run()}).toThrowError(Error('Wrong input type'))

    converter = new NumToRoman(true);
    expect(() => {converter.run()}).toThrowError(Error('Wrong input type'))
  });

  it('will return the correct value for main types of number when given seperatley', () => {
   
    converter = new NumToRoman(1);
    expect(converter.run()).toEqual("I")
    
    converter = new NumToRoman(5);
    expect(converter.run()).toEqual("V")
    
    converter = new NumToRoman(10);
    expect(converter.run()).toEqual("X")

    converter = new NumToRoman(50);
    expect(converter.run()).toEqual("L")

    converter = new NumToRoman(100);
    expect(converter.run()).toEqual("C")

    converter = new NumToRoman(500);
    expect(converter.run()).toEqual("D")
        
  });

  it('can handle complex numbers', () => {
    converter = new NumToRoman(5);
    expect(converter.run()).toEqual("V")

    converter = new NumToRoman(159);
    expect(converter.run()).toEqual("CLIX")

    converter = new NumToRoman(890);
    expect(converter.run()).toEqual("DCCCXC")

    converter = new NumToRoman(101);
    expect(converter.run()).toEqual("CI")
  });

})


