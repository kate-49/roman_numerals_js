const RomanNumeralValues = require('./romanNumeralValues.js');

class NumToRoman {
  
  constructor(number) {
    this.number = number
    this.answer = "";
    this.romanNumeralValues = new RomanNumeralValues();
  }

  checkInputValid() {
    if (Number.isInteger(this.number) != true) {
      throw new Error('Wrong input type');
    }
    if (this.number >= 1000) {
      throw new Error('Input too large, input must be less than 1000')
    }
  }

  checkHundreds() {
    var hundreds = (Math.floor(this.number/100) * 100)
    var value = this.romanNumeralValues.hundreds(hundreds)
    this.answer += value
    this.number -= hundreds
  }

  checkTens() {
    var tens = (Math.floor(this.number / 10) * 10)
    var value = this.romanNumeralValues.tens(tens)
    this.answer += value
    this.number -= tens
  }
  
  checkOnes() {
    var value = this.romanNumeralValues.ones(this.number)
    this.answer += value
    this.number -= value
  }

  run() {
    this.checkInputValid()

    if (this.number > 99) {
      this.checkHundreds()
    }

    if (this.number > 9) {
      this.checkTens()
    }
    
    if (this.number) {
      this.checkOnes()
    }
    
    return (this.answer);

  }
}
module.exports = NumToRoman;