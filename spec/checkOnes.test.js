const NumToRoman = require('../src/numToRoman.js');

describe('checkHundreds', function() {

  it('will return the correct value for main types of number when given seperatley', () => {
    converter = new NumToRoman(1);
    expect(converter.run()).toEqual("I")
    
    converter = new NumToRoman(5);
    expect(converter.run()).toEqual("V")
  });
});