
function capitalize(string) {
  let newString = string[0].toUpperCase()
  string.shift()
  newString = newString + string
  return newString
}
