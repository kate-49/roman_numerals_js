const numToRoman = require('../src/numToRoman.js')

test('accepts a number as input and returns a string', () => {
  expect(numToRoman(10)).toBe('X')
})
