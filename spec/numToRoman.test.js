const NumToRoman = require('../src/numToRoman.js');

describe('NumToRoman', function() {
  
  it('can handle complex numbers', () => {
    converter = new NumToRoman(5);
    expect(converter.run()).toEqual("V")

    converter = new NumToRoman(159);
    expect(converter.run()).toEqual("CLIX")

    converter = new NumToRoman(890);
    expect(converter.run()).toEqual("DCCCXC")

    converter = new NumToRoman(101);
    expect(converter.run()).toEqual("CI")
  });

})


