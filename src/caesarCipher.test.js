const cipher = require('./caesarCipher');

test('abcd should be BCDE', () => {
    expect(cipher('ABCD',1)).toBe('BCDE');
});