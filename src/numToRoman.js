

class NumToRoman {

  constructor() {
    this.valuemap = {10: 'X'};
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