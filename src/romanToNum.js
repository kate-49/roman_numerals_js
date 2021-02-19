const RomanNumeralValues = require('./romanNumeralValues.js');

class RomanToNum {
    constructor(numeral) {
        this.numeral = numeral;
        this.answer = 0;
        this.romanNumeralValues = new RomanNumeralValues();

    }

    run() {
        if (this.numeral.length > 0) {
            var value = this.romanNumeralValues.ones(this.numeral)
            this.answer += value
        }
        return this.answer;
    }
}
module.exports = RomanToNum;