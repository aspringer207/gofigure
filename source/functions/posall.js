import { posX, posY } from "../expressions/globals"

export default function posAll() {
    let n = 0;
  let arr = []
  for (let i in posX) {
    for (let j in posY) {
      n += 1
      let strX = posX[i]
      let strY = posY[j]
      let strR = strX.concat("-", strY)
      arr.push([n, strR])
    }
  }
  return arr
}