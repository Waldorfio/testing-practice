function cipher (string, index) {
  let newString = ''
  const alph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
    'W', 'X', 'Y', 'Z']

  for (let j = 0; j < string.length; j++) {
    for (let i = 0; i < alph.length - 1; i++) {
      if (alph[i].toUpperCase() === string[j].toUpperCase()) {
        newString = newString + alph[i + index]
      }
    }
  }
  console.log(newString)
  return newString
}
module.exports = cipher;