function analyze (arr) {
  let avg = 0
  const sorted = arr.sort()
  const min = sorted[0]
  const max = sorted[sorted.length - 1]
  for (let i = 0; i < arr.length; i++) {
    avg = avg + arr[i]
  }
  avg = avg / (arr.length)

  const obj = {
    average: avg,
    minimum: min,
    maximum: max,
    len: arr.length
  }
  console.log(obj)
  return obj
}

module.exports = analyze
