import eachPosition from "./eachPosition.js"
import resolveSpan from "./resolveSpan.js"
export default function resolvePos(
viewBox = [0, 0, 100, 100],
xSpan = 0.75,
ySpan = 0.75,
pos
) {
let e = eachPosition(pos)
let xP = e[0]
let yP = e[1]

let viewWidth = [viewBox[0], viewBox[2]]
let viewHeight = [viewBox[1], viewBox[3]]
let xInfo = resolveSpan(viewWidth, xSpan, xP);
let yInfo = resolveSpan(viewHeight, ySpan, yP);
return {
"x": xInfo[0],
"y": yInfo[0],
"width": xInfo[1],
"height": yInfo[1]}
}