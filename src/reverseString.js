function reverse(string) {
  let reversed = '';
  for (let i=0; i<string.length; i++) {
    reversed = string[i] + reversed;
  }
  console.log(reversed);
  return reversed
}
module.exports = reverse;