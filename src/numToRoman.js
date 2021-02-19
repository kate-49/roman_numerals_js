
class NumToRoman {
  
  constructor(number) {
    this.number = number;
    this.onesValuemap = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
    this.tensValuemap = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
    this.hundredsValuemap = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
    this.answer = "";
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
    var hundreds = Math.floor((this.number/100))
    var value = this.hundredsValuemap[hundreds-1]
    this.answer += value
    this.number -= (hundreds * 100)
  }

  checkTens() {
    var tens = Math.floor((this.number / 10))
    var value = this.tensValuemap[tens-1]      
    this.answer += value
    this.number -= (tens * 10)
  }
  
  checkOnes() {
    var value = this.onesValuemap[this.number-1]
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