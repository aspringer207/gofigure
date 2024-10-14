export default function intervals(max, step) {
  let results = []
  for (let s = step; s <= max; s + step) {
    results.push(s)
  }
  return results
}