const cipher = require('./caesarCipher');

test('abcd should be BCDE', () => {
    expect(cipher('abcd',1)).toBe('bcde');
});

test('abcd should be BCDE', () => {
    expect(cipher('aBcD',1)).toBe('bCdE');
});

test('abcd should be BCDE', () => {
    expect(cipher('abcd',2)).toBe('cdef');
});

test('abcd should be BCDE', () => {
    expect(cipher('ab,cd',2)).toBe('cd,ef');
});