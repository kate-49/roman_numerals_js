const NumToRoman = require('../src/numToRoman.js');

describe('checkHundreds', function() {

  it('will map input according to valuemap and add this to answer', () => {
   
    converter = new NumToRoman(161);
    converter.checkHundreds()
    expect(converter.answer).toEqual("C")
    expect(converter.number).toEqual(61)

    converter = new NumToRoman(599);
    converter.checkHundreds()
    expect(converter.answer).toEqual("D")
    expect(converter.number).toEqual(99)
        
    converter = new NumToRoman(900);
    converter.checkHundreds()
    expect(converter.answer).toEqual("CM")
    expect(converter.number).toEqual(0)
  });
})