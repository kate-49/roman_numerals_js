
class NumToRoman {

  constructor() {
    this.valuemap = {1: 'I', 5: 'V', 10: 'X'};
    this.answer = [];
  }

  run(number) {
  
    var value = this.valuemap[number];
    this.answer.push(value);

   return this.answer.join(',');
   
  }

}
module.exports = NumToRoman;