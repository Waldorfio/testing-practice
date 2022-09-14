
function caps(string) {
  const first = string[0].toUpperCase();
  const capString = first + string.slice(1, string.length);
  return capString
}
module.exports = caps