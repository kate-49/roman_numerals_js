const RomanToNum = require('../src/romanToNum.js');

describe('Check it  will return number if given string', function() {
  
  it('can handle complex numbers', () => {
    converter = new RomanToNum("V");
    expect(converter.run()).toEqual(5)
  });

  });