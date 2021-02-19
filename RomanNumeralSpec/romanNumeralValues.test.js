const RomanNumeralValues = require('../src/romanNumeralValues.js');

describe('Check whole program runs', function() {
    
    it('will give values for numbers', () => {
        numerals = new RomanNumeralValues();
        expect(numerals.ones(5)).toEqual("V")
      });

      it('will give values for strings', () => {
        numerals = new RomanNumeralValues();
        expect(numerals.ones("V")).toEqual(5)
      });

});
  