const calca = require('./calculator')

test('add 1+2 to receive 3', () => {
  expect(calca(1, 2).add()).toBe(3)
})

test('subtract 8-5 to receive 3', () => {
  expect(calca(8, 5).subtract()).toBe(3)
})

test('multiply 3*4 to receive 12', () => {
  expect(calca(3, 4).multiply()).toBe(12)
})

test('divide 12*6 to receive 2', () => {
  expect(calca(12, 6).divide()).toBe(2)
})
