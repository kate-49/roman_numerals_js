const NumToRoman = require('../src/numToRoman.js');

describe('checkTens', function() {

  it('will accuratley map input and leave accurate remainder', () => {
    
    converter = new NumToRoman(10);
    converter.checkTens()
    expect(converter.answer).toEqual("X")
    expect(converter.number).toEqual(0)

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