const NumToRoman = require('../src/numToRoman.js');

describe('checkTens', function() {

  it('will add appropriate value to valuemap and leave accurate remainer', () => {
    
    converter = new NumToRoman(11);
    converter.checkTens()
    expect(converter.answer).toEqual("X")
    expect(converter.number).toEqual(1)

    converter = new NumToRoman(49);
    converter.checkTens()
    expect(converter.answer).toEqual("XL")
    expect(converter.number).toEqual(9)

    converter = new NumToRoman(56);
    converter.checkTens()
    expect(converter.answer).toEqual("L")
    expect(converter.number).toEqual(6)

    converter = new NumToRoman(99);
    converter.checkTens()
    expect(converter.answer).toEqual("XC")
    expect(converter.number).toEqual(9)

    });

   
});