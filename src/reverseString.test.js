const reverse = require('./reverseString');

test('lake should return ekal', () => {
  expect(reverse('lake')).toBe('ekal');
});

test('ekans should return snake', () => {
  expect(reverse('ekans')).toBe('snake');
});