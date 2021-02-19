const NumToRoman = require('../src/numToRoman.js');

describe('checkHundreds', function() {

  it('will return the correct value for main types of number when given seperatley', () => {
    converter = new NumToRoman(10);
    expect(converter.run()).toEqual("X")

    converter = new NumToRoman(50);
    expect(converter.run()).toEqual("L")
  });
});