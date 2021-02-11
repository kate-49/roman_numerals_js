

class NumToRoman {

  constructor() {
    this.valuemap = {1: 'I', 5: 'V', 10: 'X', 50: 'L', 100: 'C', 500: 'D', 1000: 
  'M'};
    this.answer = [];
  }

  run(number) {

    if (Number.isInteger(number) != true) {
        throw new TypeError('Wrong input type');
    }

    var value = this.valuemap[number];
    this.answer.push(value);

    return this.answer.join(',');
  }

}
module.exports = NumToRoman;