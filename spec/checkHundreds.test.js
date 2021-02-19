const NumToRoman = require('../src/numToRoman.js');

describe('checkHundreds', function() {

  it('will return the correct value for main types of number when given seperatley', () => {
   
    converter = new NumToRoman(100);
    expect(converter.run()).toEqual("C")

    converter = new NumToRoman(500);
    expect(converter.run()).toEqual("D")
        
  });
})