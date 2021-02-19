const NumToRoman = require('../src/numToRoman.js');

describe('checkHundreds', function() {

  it('will accuratley map input and leave no remainder', () => {
    converter = new NumToRoman(1);
    expect(converter.run()).toEqual("I")
    expect(converter.number).toEqual(0)
    
    converter = new NumToRoman(5);
    expect(converter.run()).toEqual("V")
    expect(converter.number).toEqual(0)

    converter = new NumToRoman(9);
    expect(converter.run()).toEqual("IX")
    expect(converter.number).toEqual(0)
  });
});