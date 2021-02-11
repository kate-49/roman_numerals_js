
class NumToRoman {

  constructor() {
    this.valuemap = {10: 'X'};
    this.answer = [];
  }

  run(number) {
  
    var value = this.valuemap[number];
    this.answer.push(value);

   return this.answer.join(',');
   
  }

}
module.exports = NumToRoman;