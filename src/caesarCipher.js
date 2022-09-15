function cipher (string, index) {
  let newString = ''
  const alphU = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
    'W', 'X', 'Y', 'Z']
  const alphL = []
  for (let k = 0; k < alphU.length; k++) {
    alphL.push(alphU[k].toLowerCase())
  }

  for (let j = 0; j < string.length; j++) {
    for (let i = 0; i < alphU.length - 1; i++) {
      if (alphU[i] === string[j]) {
        newString = newString + alphU[i + index]
        continue
      }
      if (alphL[i] === string[j]) {
        newString = newString + alphL[i + index]
        continue
      }
    }
  }
  return newString
}
module.exports = cipher
