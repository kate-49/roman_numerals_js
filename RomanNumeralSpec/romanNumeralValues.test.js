const RomanNumeralValues = require('../src/romanNumeralValues.js');

describe('Check whole program runs', function() {

  beforeEach(() => {
      numerals = new RomanNumeralValues();
    });
    
      // it('exchanges hundreds accurately', () => {
      //   expect(numerals.hundreds("CD")).toEqual(4)
      //   expect(numerals.hundreds("DCC")).toEqual(7)
      //   expect(numerals.hundreds("CM")).toEqual(900)
      //   expect(numerals.hundreds(400)).toEqual("CD")
      //   expect(numerals.hundreds(700)).toEqual("DCC")
      //   expect(numerals.hundreds(900)).toEqual("CM")
      // });

      it('exchanges tens accurately', () => {
        expect(numerals.tens("X")).toEqual(10)
        expect(numerals.tens("XXX")).toEqual(30)
        expect(numerals.tens("XL")).toEqual(40)
        expect(numerals.tens("LX")).toEqual(60)
        expect(numerals.tens(10)).toEqual("X")
        expect(numerals.tens(30)).toEqual("XXX")
        expect(numerals.tens(40)).toEqual("XL")
        expect(numerals.tens(60)).toEqual("LX")
      });

      it('exchanges ones accurately', () => {
        expect(numerals.ones("I")).toEqual(1)
        expect(numerals.ones("IV")).toEqual(4)
        expect(numerals.ones("V")).toEqual(5)
        expect(numerals.ones("IX")).toEqual(9)
        expect(numerals.ones(1)).toEqual("I")
        expect(numerals.ones(4)).toEqual("IV")
        expect(numerals.ones(5)).toEqual("V")
        expect(numerals.ones(9)).toEqual("IX")
      });

});
  