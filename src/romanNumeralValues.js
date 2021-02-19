
class RomanNumeralValues {

    constructor() {
        this.onesValueMap = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
        this.tensValueMap = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
        this.hundredsValueMap = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    }
    
    hundreds(number) {
        return this.hundredsValueMap[number]
    }

    tens(number) {
        return this.tensValueMap[number]
    }

    ones(number) {
        return this.onesValueMap[number]
        
    }

  };
  module.exports = RomanNumeralValues;
  