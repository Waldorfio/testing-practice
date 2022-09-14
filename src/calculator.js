function calca(a, b) {
  return {
    add() {
      return a + b
    },
    subtract() {
      return a - b
    },
    divide() {
      return a / b
    },
    multiply() {
      return a * b
    },
  };
}
module.exports = calca;