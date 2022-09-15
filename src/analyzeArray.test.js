const analyze = require('./analyzeArray')

test('array [] should be []', () => {
  expect(analyze([1, 2, 3, 4])).toEqual({average: 2.5, minimum: 1, maximum: 4, len: 4})
})
