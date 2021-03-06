const NumToRoman = require('../src/numToRoman.js');

describe('checkInputValid', function() {

    it('will only accept integer input', () => {
        converter = new NumToRoman(10);
        expect(() => {converter.checkInputValid()}).not.toThrowError(Error('Wrong input type'))
    
        converter = new NumToRoman("test string");
        expect(() => {converter.checkInputValid()}).toThrowError(Error('Wrong input type'))
    
        converter = new NumToRoman(true);
        expect(() => {converter.checkInputValid()}).toThrowError(Error('Wrong input type'))
      });

      it('will not accept integers that are too large', () => {
        converter = new NumToRoman(1000);
        expect(() => {converter.checkInputValid()}).toThrowError(Error('Input too large, input must be less than 1000'))
    
        converter = new NumToRoman(3651);
        expect(() => {converter.checkInputValid()}).toThrowError(Error('Input too large, input must be less than 1000'))
      });
      
});