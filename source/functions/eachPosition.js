import { positionStrings, posX, posY } from "../expressions/globals";
export default function eachPosition(pos) {
    let z = positionStrings[pos - 1].split("-");
    let x = posX.indexOf(z[0]);
    let y = posY.indexOf(z[1]);
    return [x, y];
}
