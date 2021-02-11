
class NumToRoman {
  
  constructor() {
    this.onesValuemap = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
    this.tensValuemap = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
    this.hundredsValuemap = { 100: 'C', 500: 'D' }
    this.answer = "";
  }

  run(number) {
    if (Number.isInteger(number) != true) {
        throw new Error('Wrong input type');
    }
    
    if (number > 9) {
      var tens = Math.floor((number / 10))
      var value = this.tensValuemap[tens-1]      
      this.answer += value
      number -= (tens * 10)
    
    }
    
    if (number) {
      var value = this.onesValuemap[number-1]
      this.answer += value
    }

    return (this.answer);

  }
}
module.exports = NumToRoman;