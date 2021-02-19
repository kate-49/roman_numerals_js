const NumToRoman = require('../src/numToRoman.js');

describe('checkHundreds', function() {

  it('will map input according to valuemap and add this to answer', () => {
   
    converter = new NumToRoman(100);
    converter.checkHundreds()
    expect(converter.answer).toEqual("C")

    converter = new NumToRoman(500);
    converter.checkHundreds()
    expect(converter.answer).toEqual("D")
        
    converter = new NumToRoman(900);
    converter.checkHundreds()
    expect(converter.answer).toEqual("CM")
  });
})