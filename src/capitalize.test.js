const caps = require('./capitalize')

test('wow should become Wow', () => {
  expect(caps('wow')).toBe('Wow')
})

test('what is the time? should become What is the time?', () => {
  expect(caps('what is the time?')).toBe('What is the time?')
})

test('aBCD should become ABCD', () => {
  expect(caps('aBCD')).toBe('ABCD')
})
