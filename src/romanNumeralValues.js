
class RomanNumeralValues {

    constructor() {
        this.onesValueMap = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
        this.tensValueMap = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
        this.hundredsValueMap = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    }
    
    hundreds(input) {
        if (Number.isInteger(input)){
            return this.hundredsValueMap[input]
        } else {
            return this.hundredsValueMap.indexOf(input)
        }
    }

    tens(input) {
        if (Number.isInteger(input)){
            input = input/10
            return this.tensValueMap[input]
        } else {
            var index = this.tensValueMap.indexOf(input)
            return (index * 10)
        }
    }

    ones(input) {
        if (Number.isInteger(input)){
            return this.onesValueMap[input]
        } else {
            return this.onesValueMap.indexOf(input)
        }
    }

  };
  module.exports = RomanNumeralValues;
  