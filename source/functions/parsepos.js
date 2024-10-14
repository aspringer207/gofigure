export default function parsePos(a, b) {
  let invalid = `Invalid Argument. Acceptable values:
(first argument): left, center, right
(second argument): top, middle, bottom`
  let x = a === "left" ? 0 : a === "center" ? 3 : a === "right" ? 6 : NaN
  let y = b === "top" ? 1 : b === "middle" ? 2 : b === "bottom" ? 3 : NaN
  let result = x + y
  if (isNaN(result)) {
    return console.error(invalid)
  }
  return result
}
